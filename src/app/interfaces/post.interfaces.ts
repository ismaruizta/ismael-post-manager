export interface PageQueryOptions {
    options: {
        paginate: {
            page: number;
            limit: number;
        };
    };
}

export interface Post {
    id: string,
    title: string,
    body?: string
}