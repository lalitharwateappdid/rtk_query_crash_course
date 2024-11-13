// src/App.js
import React from "react";
import { useGetPostsQuery } from "./features/posts/postsApi";

// assets
import loader from "./assets/loader.webm";

function App() {
  // Using the RTK Query hook to fetch posts
  const { data: posts, error, isLoading } = useGetPostsQuery();

  if (isLoading)
    return (
      <div style={{display:"flex", justifyContent:"center", width:"100%"}}>
        
        <video width="320" height="240" autoplay loop muted>
          <source src={loader} type="video/webm" />
          Your browser does not support the video tag.
        </video>
       
      </div>
    );
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
