import { PostsData } from "./PostsData.jsx";
import PostCard from "./PostCard.jsx";

function BlogPost(){
    return(
        <div className="blog-container">
        <h1>Blog Post</h1>
        {PostsData.map((post)=>(
            <PostCard key={post.id} {...post}/>
        ))}
        </div>
    )
}
export default BlogPost;