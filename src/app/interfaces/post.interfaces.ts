export interface Post {
    id: string;
    title: string;
    body: string;
}

export interface NewPost {
    title: string,
    body?: string
}

export interface PostState {
    posts: Post[];
}

export interface PageQueryOptions {
    options: {
        paginate: {
            page: number;
            limit: number;
        };
    };
}


