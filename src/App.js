import React, { useState } from 'react';
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import NavBar from "./Components/NavBar/NavBar";
import Post from "./Components/Post/Post";

function App() {
  const [posts, setPosts] = useState([{name: 'wendy', post: 'Hello'}])

  function addNewPost(post){
    let tempPosts = [post, ...posts];
    setPosts(tempPosts);
  }

  return (
    <div>
      <CreatePostForm addNewPost = {addNewPost}/>
      <Post parentPosts={posts}/>
    </div>
  );
}

export default App;
