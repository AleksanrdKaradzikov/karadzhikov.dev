import { GetServerSideProps } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import { Layout } from "../../src/components/Layouts/AnimateLayout";
import { fetchAPI } from '../../src/services/strapiApi';
import { staticTitles } from '../../src/constants/routes';
import { ArticleToRender, MetaPagination, Category } from '../../src/models';
import { BlogPageLayout } from '../../src/components/Layouts/BlogPageLayout';
import { BlogList, TagList } from '../../src/components/BlogList';
import { BlogPagination } from '../../src/components/BlogPagination';
import { formatArticlesToRender, formatCategoryToRender } from '../../src/helpers';

interface Props {
    articles: ArticleToRender[];
    categories: Category[];
    pagination: MetaPagination,
};

export default function BlogPage({ articles, categories, pagination }: Props) {
    const { isReady, push } = useRouter();

    useEffect(() => {
        if (isReady && articles.length === 0) {
            push('/blog');
        }
    }, [isReady, push, articles]);

    const mobileTagsShow = useBreakpointValue({ base: true, md: false, lg: false });
    const tagsBlockBg = useColorModeValue('white', 'bg.headerBgDark');
    const showPagination = pagination && pagination.pageCount > 1;

    const rightContent = (
        <>
            {mobileTagsShow && (
                <Box bg={tagsBlockBg} p="24px" boxShadow="base" borderRadius="6px">
                    <TagList items={categories} />
                </Box>
            )}
            <BlogList articles={articles} />
            {showPagination && (
                <BlogPagination pagination={pagination as MetaPagination} />
            )}
        </>
    );

    const leftContent = (
        <Box bg={tagsBlockBg} p="24px" boxShadow="base" borderRadius="6px">
            <TagList items={categories} />
        </Box>
    );

    return (
        <Layout title={staticTitles.blog}>
            <BlogPageLayout
                leftContent={leftContent}
                rightContent={rightContent}
                title="Статьи"
            />
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { page = 1, pageSize = 5 } = query;

    const [articles, categories] = await Promise.all([
        fetchAPI('/articles', {
            populate: ['author', 'author.avatar', 'image', 'categories', 'categories.categoryIcon',],
            fields: ['title', 'slug', 'description', 'publishedAt'],
            sort: ['createdAt:desc'],
            pagination: {
                page,
                pageSize,
            }
        }),
        fetchAPI('/categories'),
    ]);

    const formatArticels = formatArticlesToRender(articles?.data || []);
    const formatCategories = formatCategoryToRender(categories?.data || []);

    return {
        props: {
            articles: JSON.parse(JSON.stringify(formatArticels)),
            categories: JSON.parse(JSON.stringify(formatCategories)),
            pagination: articles.meta.pagination,
        },
    }
}