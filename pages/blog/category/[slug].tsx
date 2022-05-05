import { FC } from 'react';
import { GetStaticProps } from 'next';
import { fetchAPI } from '../../../src/services/strapiApi';
import { Layout } from '../../../src/components/Layouts/AnimateLayout';
import { BlogPageLayout } from '../../../src/components/Layouts/BlogPageLayout';
import { Category, ArticleToRender } from '../../../src/models';
import { formatArticlesToRender, formatCategoryToRender } from '../../../src/helpers';

interface Props {
    categories: Category[];
    articles: ArticleToRender[];
    category: Category;
}

const CategoryPage: FC<Props> = ({ category, categories, articles, }) => {
    return (
        <Layout>
            <BlogPageLayout
                categories={categories}
                articles={articles}
                currentCategory={category.name}
            />
        </Layout>
    );
}

export const getStaticPaths = async () => {
    const categoriesRes = await fetchAPI("/categories", { fields: ["slug"] });

    return {
        paths: categoriesRes.data.map(({ attributes }: any) => ({
            params: {
                slug: attributes.slug,
            },
        })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
        revalidate: 1,
    };
};

export default CategoryPage;