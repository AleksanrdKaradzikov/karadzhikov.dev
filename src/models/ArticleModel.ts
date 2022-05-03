import { Category } from './categoriesModel';
import { AnyStrapiModel } from './requestModels';
import { Writer } from './writerModel';

export interface Article {
    title: string;
    description: string;
    content: string;
    updatedAt: string;
    createdAt: string;
    slug: string;
    categories: { data: AnyStrapiModel<Category>[] };
    publishedAt: string;
    image: any; // TODO
    author: { data: AnyStrapiModel<Writer> | undefined };
}

export interface ArticleToRender {
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
    title: string;
    description: string;
    content: string;
    slug: string;
    categories: Category[];
    image: any; // TODO
    author?: Writer;
}