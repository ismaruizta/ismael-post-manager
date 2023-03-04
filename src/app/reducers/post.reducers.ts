// @ts-nocheck
import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter } from '@ngrx/entity';
import { addPostSuccess, deletePostSuccess, loadPosts, loadPostsSuccess, updatePostSuccess } from '../actions/post.actions';
import { Post, PostState } from '../interfaces/post.interfaces';


export const adapter = createEntityAdapter<Post>();

export const initialState: PostState = adapter.getInitialState({
  posts: []
});

export const postReducer = createReducer(
  initialState,
  on(loadPosts, state => ({ ...state, loading: true })),
  on(loadPostsSuccess, (state, { posts }) =>
    ({ ...state, loading: false, posts: posts.data })
  ),
  on(addPostSuccess, (state, { post }) =>
    ({ ...state, loading: false, posts: [...state.posts, post] })
  ),
  on(updatePostSuccess, (state, { post }) => {
    const output = adapter.updateOne({ id: post.id, changes: post }, state);
    return output;
  }),
  on(deletePostSuccess, (state, { id }) =>
    ({ ...state, loading: false, posts: state.posts.filter(item => item.id != id) })
  )
);
