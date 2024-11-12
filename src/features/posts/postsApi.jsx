import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts',
    }),
    getPost: builder.query({
      query: (id) => `posts/${id}`,
    }),
  }),
});

// Export the hooks that will be generated
export const { useGetPostsQuery, useGetPostQuery } = postsApi;
