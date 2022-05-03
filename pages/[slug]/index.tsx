import { GetStaticProps } from 'next';
import { fetchAPI } from '../../src/services/strapiApi';

const CategoryPage = ({ category, categories }: any) => {
    console.log('category: ', category);
    console.log('categories: ', categories);
    return (
        <div>CategoryPage</div>
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
    const matchingCategories = await fetchAPI("/categories", {
        filters: { slug: params?.slug },
        populate: {
            articles: {
                populate: "*",
            },
        },
    });
    const allCategories = await fetchAPI("/categories");

    return {
        props: {
            category: matchingCategories.data[0],
            categories: allCategories,
        },
        revalidate: 1,
    };
};

export default CategoryPage;