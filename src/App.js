import React, { useState } from 'react';
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import NavBar from "./Components/NavBar/NavBar";
import Post from "./Components/Post/Post";
import PostList from "./Components/PostList/PostList";

function App() {
  const [posts, setPosts] = useState([{name: 'wendy', post: 'Hello'}])
  return (
    <div> 
      <CreatePostForm/>
      <Post/>
    </div>
  );
}

export default App;
