import { FC, useMemo, useEffect, useRef, useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import { Box, Button, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Layout } from "../../src/components/Layouts/AnimateLayout";
import { Breadcrumbs } from '../../src/components/Breadcrumbs';
import { HOME, BLOG, mapPathToLabel } from '../../src/constants/routes';
import { fetchAPI } from '../../src/services/strapiApi';
import { ArticleToRender } from '../../src/models';
import { PagePreview } from '../../src/components/BlogSingle';
import { TagList } from '../../src/components/BlogList';
import { formatArticlesToRender } from '../../src/helpers';
import { getStrapiMedia } from '../../src/services/strapiMedia';
import { componentsMap } from '../../src/constants/markdownComponents';
import { setItemCount, getItemCount } from '../../src/helpers/postVisitiors';
import { VISITOR_KEY } from '../../src/constants/constants';
import { useVisitors } from '../../src/hooks/useVisitors';

const staticBreadcrumbs = [
    {
        path: HOME,
        label: mapPathToLabel[HOME],
    },
    {
        path: BLOG,
        label: mapPathToLabel[BLOG],
    }
];


interface Props {
    article: ArticleToRender;
    prev: { slug: string; title: string } | null;
    next: { slug: string; title: string } | null;
}

const ArticlePage: FC<Props> = ({ article, next, prev }) => {
    const [visitors, setVisitors] = useVisitors();
    const router = useRouter();
    const refId = useRef('');
    const breadcrumbs = useMemo(() => {
        return [
            ...staticBreadcrumbs,
            { isRoot: true, label: article.title }
        ];
    }, []);

    useEffect(() => {
        if (router.query.id) {
            if (refId.current === router.query.id) {
                return;
            }

            setVisitors({
                ...visitors,
                isLoading: true,
            });

            const veiwsMap = JSON.parse(localStorage.getItem(VISITOR_KEY) || '{}');
            const queryId = router.query.id as string;

            if (!veiwsMap[queryId]) {
                refId.current = queryId;
                setItemCount(queryId, (res) => {
                    setVisitors({
                        views: res.value,
                        isLoading: false,
                    });

                    veiwsMap[queryId] = true;
                    localStorage.setItem(VISITOR_KEY, JSON.stringify(veiwsMap));
                });
            } else {
                getItemCount(queryId, (res) => {
                    setVisitors({
                        views: res.value,
                        isLoading: false,
                    });
                });
            }
        }
    }, [router.query.id]);

    const { title, image, publishedAt, author, slug } = article;
    const isShowTags = article.categories.length > 0;
    const isShowFooter = !!(next || prev);

    const handlePrev = () => {
        router.push({
            pathname: '/blog/[id]',
            query: { id: prev?.slug },
        });
    };

    const handleNext = () => {
        router.push({
            pathname: '/blog/[id]',
            query: { id: next?.slug },
        });
    }

    return (
        <Layout title={title} exitKey={slug}>
            <Box my="20px">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </Box>
            <PagePreview
                views={visitors.views}
                viewsLoading={visitors.isLoading}
                author={author?.name}
                title={title}
                date={publishedAt}
                bgUrl={getStrapiMedia(image)}
            >
                {isShowTags && (
                    <Box py="24px">
                        <TagList items={article.categories} />
                    </Box>
                )}
                <Box mt={isShowTags ? '0' : '24px'}>
                    <Box
                        wordBreak="break-word"
                        whiteSpace="pre-line"
                    >
                        <ReactMarkdown
                            components={componentsMap}
                        >
                            {article.content}
                        </ReactMarkdown>
                    </Box>
                </Box>
                {isShowFooter && (
                    <Box
                        mt="24px"
                        alignItems="center"
                        d={{ base: 'none', md: 'flex', lg: 'flex' }}
                        justifyContent={!prev && next ? "flex-end" : "space-between"}
                    >
                        {prev && (
                            <Box d="flex" alignItems="center">
                                <Button mr="30px" onClick={handlePrev}>
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                </Button>
                                <Box>
                                    <Text as="p">
                                        {prev.title}
                                    </Text>
                                    <Text as="p" fontSize="sm" color="gray.500">
                                        Предыдущая
                                    </Text>
                                </Box>
                            </Box>
                        )}
                        {next && (
                            <Box d="flex" alignItems="center">
                                <Box>
                                    <Text as="p">
                                        {next.title}
                                    </Text>
                                    <Text as="p" fontSize="sm" color="gray.500">
                                        Следущая
                                    </Text>
                                </Box>
                                <Button ml="30px" onClick={handleNext}>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </Button>
                            </Box>
                        )}
                    </Box>
                )}
            </PagePreview>
        </Layout>
    )
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const [articleData] = await Promise.all([fetchAPI('/articles', {
        filters: { slug: { $eq: params?.id } },
        populate: '*',
    })]);

    if (articleData.data.length === 0) {
        return {
            notFound: true,
        }
    }

    const currentId = articleData.data[0].id;

    const [articlesData] = await Promise.all([fetchAPI('/articles', {
        filters: { id: { $in: [currentId - 1, currentId, currentId + 1] } },
        populate: '*',
    })]);

    const formatArticle = formatArticlesToRender(articleData.data)[0];
    const prev = articlesData.data.find(({ id }: { id: number }) => id === currentId - 1);
    const next = articlesData.data.find(({ id }: { id: number }) => id === currentId + 1);

    return {
        props: {
            article: JSON.parse(JSON.stringify(formatArticle)),
            prev: prev ? { slug: prev.attributes.slug, title: prev.attributes.title } : null,
            next: next ? { slug: next.attributes.slug, title: next.attributes.title } : null,
        },
    };
};

export default ArticlePage;