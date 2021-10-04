import React from 'react';
import "./Post.scss";
import { Link } from "react-router-dom";

function Post({post}) {
    const PF = "http://localhost:5000/images/"
    return (
        <React.Fragment>
            <div className="post">
                {post.photo && 
                <img
                 className="postImg"
                 src={PF + post.photo}
                 alt=""
                 />
                 }
                <div className="postInfo">
                    <div className="postCats">
                        {post.categories.map((c)=>(
                                <span className="postCat">{c.name}</span>
                            ))}
                    </div>
                    <Link to={`/Post/${post._id}`} style={{textDecoration:"none", color:"inherit"}}>
                        <span className="postTitle">{post.title}</span>
                    </Link>
                    <hr/>
                    <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="postDesc">
                    {post.desc}
                </p>
            </div>
        </React.Fragment>
    )
}

export default Post
