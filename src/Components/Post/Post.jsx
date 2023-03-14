
const Post = (props) => {
    return ( 
        <div>
        {props.parentPosts.map((posts)=> {
    return (
        <div key={Date}>
        <h2>{posts.name}</h2>
        <h3>{posts.post}</h3>
        </div>
        )
        })}
        </div>
        );
    }


export default Post;