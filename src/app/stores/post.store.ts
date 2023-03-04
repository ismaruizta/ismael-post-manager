import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from '../interfaces/post.interfaces';

export const selectPostState = createFeatureSelector<PostState>('posts');

export const selectAllPosts = createSelector(
    selectPostState,
    state => state.posts
);
