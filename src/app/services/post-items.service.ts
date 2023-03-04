import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { EmptyObject } from 'apollo-angular/types';
import { NewPost, PageQueryOptions, Post } from '../interfaces/post.interfaces';
import { CREATE_POST, DELETE_POST, getPaginateOptions, getPostQuery, GET_POSTS, UPDATE_POST } from '../queries/post.queries';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    constructor(private apollo: Apollo) { }

    getPost(id: number) {
        return this.apollo.query({
            query: gql`${getPostQuery(id)}`
        })
    }

    getPosts( page:number, limit:number) {
        const options: PageQueryOptions = getPaginateOptions(page, limit);
        return this.apollo.watchQuery<Post[], EmptyObject>({
            query: GET_POSTS,
            variables:{
                ...options
            }, 
            fetchPolicy: "cache-first"
        })
    }

    deletePost( id:number ) {
        return this.apollo.mutate({
            mutation: DELETE_POST,
            variables: {
                id
            },
        })
    }

    updatePost( id:string, post:Post) {
        return this.apollo.mutate({
            mutation: UPDATE_POST,
            variables: {
                "id": id,
                "input": {
                    "body": post.body,
                    "title": post.title
                }
            }
        })
    }

    createPost( post:NewPost ) {
        return this.apollo.mutate({
            mutation: CREATE_POST,
            variables: {
                input: {
                    title: post.title,
                    body: post.body
                }
            }
        })
    }
}
