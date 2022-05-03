import { Article } from './articleModel';
import { AnyStrapiModel } from './requestModels';

export interface Category {
    name: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    articles: { data: AnyStrapiModel<Article>[] };
    categoryIcon?: any // TODO;
}