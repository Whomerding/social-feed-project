import React, { useState } from 'react';

const CreatePostForm=(props) => {
    const [name, setName] = useState('');
    const [post, setPost] = useState ('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            name: name,
            post: post
        };
        console.log(newEntry)
        props.addNewEntry(newEntry)
    }

    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className = 'form-group'>
            <label>Name</label>
            <input type="string" className="form-control" value = {name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className = 'form-group'>
            <label>Post</label>
            <input type="string" className="form-control" value = {post} onChange={(event) => setPost(event.target.value)} />
            </div>
            <button type = 'submit' className = 'btn btn-primary' style={{'margin-top': '1em'}} >Add</button>
        </form>
);
}
export default CreatePostForm;