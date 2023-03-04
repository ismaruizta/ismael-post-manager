import { Action } from '@ngrx/store';
import { Post, NewPost } from '../interfaces/post.interfaces';

export enum PostActionTypes {
    LOAD_POSTS = '[Post] Load Posts',
    LOAD_POSTS_SUCCESS = '[Post] Load Posts Success',
    LOAD_POSTS_FAILURE = '[Post] Load Posts Failure',
    CREATE_POST = '[Post] Create Post',
    CREATE_POST_SUCCESS = '[Post] Create Post Success',
    CREATE_POST_FAILURE = '[Post] Create Post Failure',
    UPDATE_POST = '[Post] Update Post',
    UPDATE_POST_SUCCESS = '[Post] Update Post Success',
    UPDATE_POST_FAILURE = '[Post] Update Post Failure',
    DELETE_POST = '[Post] Delete Post',
    DELETE_POST_SUCCESS = '[Post] Delete Post Success',
    DELETE_POST_FAILURE = '[Post] Delete Post Failure',
    SELECT_POST = '[Post] Select Post',
    CLEAR_POST = '[Post] Clear Post'
}

export class LoadPosts implements Action {
    readonly type = PostActionTypes.LOAD_POSTS;
}

export class LoadPostsSuccess implements Action {
    readonly type = PostActionTypes.LOAD_POSTS_SUCCESS;

    constructor(public payload: Post[]) { }
}

export class LoadPostsFailure implements Action {
    readonly type = PostActionTypes.LOAD_POSTS_FAILURE;

    constructor(public payload: string) { }
}

export class CreatePost implements Action {
    readonly type = PostActionTypes.CREATE_POST;

    constructor(public payload: NewPost) { }
}

export class CreatePostSuccess implements Action {
    readonly type = PostActionTypes.CREATE_POST_SUCCESS;

    constructor(public payload: Post) { }
}

export class CreatePostFailure implements Action {
    readonly type = PostActionTypes.CREATE_POST_FAILURE;

    constructor(public payload: string) { }
}

export class UpdatePost implements Action {
    readonly type = PostActionTypes.UPDATE_POST;

    constructor(public payload: { id: number, post: Post }) { }
}

export class UpdatePostSuccess implements Action {
    readonly type = PostActionTypes.UPDATE_POST_SUCCESS;

    constructor(public payload: Post) { }
}

export class UpdatePostFailure implements Action {
    readonly type = PostActionTypes.UPDATE_POST_FAILURE;

    constructor(public payload: string) { }
}

export class DeletePost implements Action {
    readonly type = PostActionTypes.DELETE_POST;

    constructor(public payload: number) { }
}

export class DeletePostSuccess implements Action {
    readonly type = PostActionTypes.DELETE_POST_SUCCESS;

    constructor(public payload: number) { }
}

export class DeletePostFailure implements Action {
    readonly type = PostActionTypes.DELETE_POST_FAILURE;

    constructor(public payload: string) { }
}

export class ClearPost implements Action {
    readonly type = PostActionTypes.CLEAR_POST;
}

export class SelectPost implements Action {
    readonly type = PostActionTypes.SELECT_POST;

    constructor(public payload: Post) { }
}

export type PostActions =
    | LoadPosts
    | LoadPostsSuccess
    | LoadPostsFailure
    | CreatePost
    | CreatePostSuccess
    | CreatePostFailure
    | UpdatePost
    | UpdatePostSuccess
    | UpdatePostFailure
    | DeletePost
    | DeletePostSuccess
    | DeletePostFailure
    | SelectPost
    | ClearPost;
