import Like from "../Like/Like";
import Dislike from "../Dislike/Dislike";

const Post = (props) => {    
    return ( 
        <div>
        {props.parentPosts.map((posts)=> {
    return (
        <div key={Date()}>
        <h2>{posts.name}</h2>
        <p>{Date()}</p>
        <h3>{posts.post}</h3>
        <Like/>
        <Dislike/>
        </div>
        )
        })}
        </div>
        );
    }

    export default Post;