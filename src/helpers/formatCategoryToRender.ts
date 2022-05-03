import { AnyStrapiModel, Category } from '../models';

export const formatCategoryToRender = (categories: AnyStrapiModel<Category>[]) => {
    return categories.map(({ attributes }) => ({ ...attributes }));
}