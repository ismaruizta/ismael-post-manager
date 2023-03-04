import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { EmptyObject } from 'apollo-angular/types';
import { PageQueryOptions, Post } from '../interfaces/post.interfaces';
import { CREATE_POST_MUTATION, DELETE_POST_MUTATION, getPaginateOptions, getPostQuery, GET_POSTS, UPDATE_POST_MUTATION } from '../queries/post.queries';

@Injectable({
    providedIn: 'root'
})
export class PostServiceService {

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
            mutation: DELETE_POST_MUTATION,
            variables: {
                id
            },
        })
    }

    updatePost() {
        return this.apollo.mutate({
            mutation: UPDATE_POST_MUTATION,
            variables: {
                "id": 1,
                "input": {
                    "body": "Some updated content."
                }
            }
        })
    }

    createPost() {
        return this.apollo.mutate({
            mutation: CREATE_POST_MUTATION,
            variables: {
                input: {
                    title: 'New Post Title',
                    body: 'New post body text'
                }
            }
        })
    }
}
