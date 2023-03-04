import { PageQueryOptions } from "../interfaces/post.interfaces"
import { gql } from 'apollo-angular';


export const GET_POSTS = gql`
  query getPosts($options: PageQueryOptions) {
    posts(options: $options) {
      meta {
        totalCount
      }
      data {
        id
        title
        body
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;

export const UPDATE_POST = gql`
  mutation updatePost($id: ID!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      title
      body
    }
  }
`;

export const DELETE_POST = gql`
mutation (
  $id: ID!
) {
  deletePost(id: $id)
}
`;

export function getPaginateOptions(page: number, limit: number): PageQueryOptions {
  return {
    options: {
      paginate: {
        page: page,
        limit: limit
      }
    }
  }
}

export function getPostQuery(id: number) {
  return gql`{
    post(id: ${id}) {
      id
      title
      body
    }
  }`
}
