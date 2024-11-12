// src/App.js
import React from 'react';
import { useGetPostsQuery } from './features/posts/postsApi';

function App() {
  // Using the RTK Query hook to fetch posts
  const { data: posts, error, isLoading } = useGetPostsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts!</div>;

  return (
    <div className="App">
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
