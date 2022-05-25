import { FC } from 'react';
import { GetServerSideProps } from 'next';
import { useBreakpointValue, Box, useColorModeValue } from '@chakra-ui/react';
import { fetchAPI } from '../../../src/services/strapiApi';
import { Layout } from '../../../src/components/Layouts/AnimateLayout';
import { BlogPageLayout } from '../../../src/components/Layouts/BlogPageLayout';
import { Category, ArticleToRender } from '../../../src/models';
import { formatArticlesToRender, formatCategoryToRender } from '../../../src/helpers';
import { BlogList, TagList } from '../../../src/components/BlogList';

interface Props {
    categories: Category[];
    articles: ArticleToRender[];
    category: Category;
}

const CategoryPage: FC<Props> = ({ category, categories, articles, }) => {
    const mobileTagsShow = useBreakpointValue({ base: true, md: false, lg: false });
    const tagsBlockBg = useColorModeValue('white', 'bg.headerBgDark');

    const rightContent = (
        <>
            {mobileTagsShow && (
                <Box bg={tagsBlockBg} p="24px" boxShadow="base" borderRadius="6px">
                    <TagList items={categories} />
                </Box>
            )}
            <BlogList articles={articles} />
        </>
    );

    const leftContent = (
        <Box bg={tagsBlockBg} p="24px" boxShadow="base" borderRadius="6px">
            <TagList items={categories} />
        </Box>
    );

    return (
        <Layout title={`Статьи с пометкой ${category.name}`}>
            <BlogPageLayout
                showBackBtn
                leftContent={leftContent}
                rightContent={rightContent}
                title={`Статьи: ${category.name}`}
            />
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const [matchingCategories, allCategories] = await Promise.all([fetchAPI("/categories", {
        filters: { slug: params?.slug },
        populate: {
            articles: {
                populate: ['author', 'author.avatar', 'image', 'categories', 'categories.categoryIcon',],
                fields: ['title', 'slug', 'description', 'publishedAt'],
                sort: ['createdAt:desc'],
            },
        },
    }), fetchAPI("/categories")]);


    const formatArticels = formatArticlesToRender(
        matchingCategories.data[0].attributes.articles.data || []
    );

    const formatCategories = formatCategoryToRender(allCategories?.data || []);

    return {
        props: {
            category: { ...matchingCategories.data[0].attributes },
            categories: JSON.parse(JSON.stringify(formatCategories)),
            articles: JSON.parse(JSON.stringify(formatArticels)),
        },
    };
};

export default CategoryPage;