export interface MetaPagination {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
};

export type AnyStrapiModel<T = Record<string, any>> = {
    id: number;
    attributes: T;
}

export interface ListDataRequets<T = Record<string, any>> {
    meta: {
        pagination: MetaPagination;
    };
    data: AnyStrapiModel<T>[];
}