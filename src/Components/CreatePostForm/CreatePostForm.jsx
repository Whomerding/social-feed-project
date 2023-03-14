import React, { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import "./CreatePostForm.css"
const CreatePostForm=(props) => {
    const [name, setName] = useState('');
    const [post, setPost] = useState ('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post
        };
        props.addNewPost(newPost)
    }

    return (
        
        <div className="create-post">
            <form onSubmit={handleSubmit} className='form-grid'>
                <Stack gap={2} className="col-md-5 mx-auto">
                <div className = 'form-group-row'>
                <label>Name</label>
                <input style = {{display:"inline"}} type="string" className="form-control" value = {name} onChange={(event) => setName(event.target.value)}/>
                </div>
                <div className = 'form-group-row'>
                <label>Post</label>
                <input type="string" className="form-control" value = {post} onChange={(event) => setPost(event.target.value)}/>
                </div>
                <button type = 'submit' className = 'btn btn-primary'>Create</button>
                </Stack>
            </form>
        </div>
);
}
export default CreatePostForm;