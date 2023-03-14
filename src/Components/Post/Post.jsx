import Like from "../Like/Like";
import Dislike from "../Dislike/Dislike";

const Post = (props) => {    
    return ( 
        <div class = "create-post">
        {props.parentPosts.map((posts)=> {
    return (
        <div key={Date()} style ={{margin: "5%"}}>
        <h2>{posts.name}</h2>
        <p>{Date()}</p>
        <h3>{posts.post}</h3>
        <Like/>
        <Dislike/>
        <hr style = {{margin: "3REM"}}></hr>
        </div>
        )
        })}
        </div>
        );
    }

    export default Post;