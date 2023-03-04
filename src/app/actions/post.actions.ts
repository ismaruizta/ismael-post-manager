import { createAction, props } from '@ngrx/store';
import { NewPost, Post } from '../interfaces/post.interfaces';

export const loadPosts = createAction(
    '[Post] Load Posts',
    props<{page:number, limit:number}>()
    );

export const loadPostsSuccess = createAction(
  '[Post] Load Posts Success',
  props<{ posts: Post[] }>()
);

export const loadPostsFailure = createAction(
  '[Post] Load Posts Failure',
  props<{ error: string }>()
);

export const addPost = createAction(
  '[Post] Add Post',
  props<{ post: NewPost }>()
);

export const addPostSuccess = createAction(
  '[Post] Add Post Success',
  props<{ post: Post }>()
);

export const addPostFailure = createAction(
  '[Post] Add Post Failure',
  props<{ error: string }>()
);

export const updatePost = createAction(
  '[Post] Update Post',
  props<{ post: Post }>()
);

export const updatePostSuccess = createAction(
  '[Post] Update Post Success',
  props<{ post: Post }>()
);

export const updatePostFailure = createAction(
  '[Post] Update Post Failure',
  props<{ error: string }>()
);

export const deletePost = createAction(
  '[Post] Delete Post',
  props<{ id: number }>()
);

export const deletePostSuccess = createAction(
  '[Post] Delete Post Success',
  props<{ id: number }>()
);

export const deletePostFailure = createAction(
  '[Post] Delete Post Failure',
  props<{ error: string }>()
);

export const selectPost = createAction(
  '[Post] Select Post',
  props<{ post: Post }>()
);

export const clearSelectedPost = createAction('[Post] Clear Selected Post');
