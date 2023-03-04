import { PageQueryOptions } from "../interfaces/post.interfaces"
import { gql } from 'apollo-angular';

export function getPostQuery(id: number) {
  return gql`{
    post(id: ${id}) {
      id
      title
      body
    }
  }`
}

export const GET_POSTS = gql`
  query posts($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
        body
      }
      meta {
        totalCount
      }
    }
  }
`;

export const CREATE_POST_MUTATION = gql`
mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    title
    body
  }
}
`;
export const UPDATE_POST_MUTATION = gql`
mutation (
  $id: ID!,
  $input: UpdatePostInput!
) {
  updatePost(id: $id, input: $input) {
    id
    body
  }
}
`;
export const DELETE_POST_MUTATION = gql`
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