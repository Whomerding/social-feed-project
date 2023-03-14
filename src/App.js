import React, { useState } from 'react';
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import NavBar from "./Components/NavBar/NavBar";
import Post from "./Components/Post/Post";
import "./Components/app.css"


function App() {
  const [posts, setPosts] = useState([])

  function addNewPost(post){
    let tempPosts = [post, ...posts];
    setPosts(tempPosts);
  }

  return (
    <div>
      <NavBar/>
      <div class = "main">
      <CreatePostForm addNewPost = {addNewPost}/>
      <Post parentPosts={posts}/>
      </div>
    </div>
  );
}

export default App;
