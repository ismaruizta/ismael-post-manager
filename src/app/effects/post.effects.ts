import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import {
    loadPosts,
    loadPostsSuccess,
    loadPostsFailure,
    addPost,
    addPostSuccess,
    addPostFailure,
    updatePost,
    updatePostSuccess,
    updatePostFailure,
    deletePost,
    deletePostSuccess,
    deletePostFailure
} from '../actions/post.actions';
import { PostService } from '../services/post-items.service';
import { Post } from '../interfaces/post.interfaces';

@Injectable()
export class PostEffects {

    constructor(
        private actions$: Actions,
        private postService: PostService
    ) { }

    loadPosts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadPosts),
            switchMap(({ page, limit }) =>
                this.postService.getPosts(page, limit).valueChanges.pipe(
                    map((result: any) => {
                        const posts = result.data;
                        return loadPostsSuccess( posts );
                    }),
                    catchError(error => of(loadPostsFailure({ error: error.message })))
                )
            )
        )
    );

    addPost$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addPost),
            switchMap(({ post }) =>
                this.postService.createPost(post).pipe(
                    map((response: any) => {
                        const newPost: Post = response.data.createPost;
                        return addPostSuccess({ post: newPost });
                    }),
                    catchError(error => of(addPostFailure({ error: error.message })))
                )
            )
        )
    );

    updatePost$ = createEffect(() =>
        this.actions$.pipe(
            ofType(updatePost),
            switchMap(({ post }) =>
                this.postService.updatePost(post.id, post).pipe(
                    map((response: any) => {
                        const updatedPost: Post = response.data.updatePost;
                        return updatePostSuccess({ post: updatedPost });
                    }),
                    catchError(error => of(updatePostFailure({ error: error.message })))
                )
            )
        )
    );

    deletePost$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deletePost),
            switchMap(({ id }) =>
                this.postService.deletePost(id).pipe(
                    map(() => deletePostSuccess({ id })),
                    catchError(error => of(deletePostFailure({ error: error.message })))
                )
            )
        )
    );


}

