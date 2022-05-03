import { GetStaticProps } from 'next';
import { Layout } from "../../src/components/Layouts/AnimateLayout";
import { fetchAPI } from '../../src/services/strapiApi';
import { staticTitles } from '../../src/constants/routes';
import { ArticleToRender, MetaPagination, Category } from '../../src/models';
import { BlogPageLayout } from '../../src/components/Layouts/BlogPageLayout';
import { formatArticlesToRender, formatCategoryToRender } from '../../src/helpers';

interface Props {
    articles: ArticleToRender[];
    categories: Category[];
    pagination: MetaPagination,
};

export default function BlogPage({ articles, categories, pagination }: Props) {
    console.log('articles: ', articles);
    console.log('categories: ', categories);
    console.log('pagination: ', pagination);

    return (
        <Layout title={staticTitles.blog}>
            <BlogPageLayout 
                articles={articles}
            />
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const [articles, categories] = await Promise.all([
        fetchAPI('/articles', {
            populate: ['author', 'image', 'categories', 'categories.categoryIcon',],
            fields: ['title', 'slug', 'description'],
        }),
        fetchAPI('/categories'),
    ]);

    const formatArticels = formatArticlesToRender(articles?.data || []);
    const formatCategories = formatCategoryToRender(categories?.data || []);

    return {
        props: {
            articles: JSON.parse(JSON.stringify(formatArticels)),
            categories: formatCategories,
            pagination: articles.meta.pagination,
        }
    }
}