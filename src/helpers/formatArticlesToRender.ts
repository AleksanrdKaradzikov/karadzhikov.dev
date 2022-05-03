import { Article, AnyStrapiModel } from '../models';


export const formatArticlesToRender = (artiles: AnyStrapiModel<Article>[]) => {
    return artiles.map(({ attributes }) => {
        return {
            ...attributes,
            author: attributes?.author?.data?.attributes,
            categories: attributes.categories?.data.map((item) => ({
                ...item.attributes,
            })),
        }
    })
};
