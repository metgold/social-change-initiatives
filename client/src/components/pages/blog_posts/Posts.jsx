import React from 'react';
import Post from '../blog_post/Post';
import "./Posts.scss";

function Posts({posts}) {
    return (
        <React.Fragment>
            <div className="posts">
                {posts.map((p)=>(
                    <Post post={p}/>
                ))}
            </div>
        </React.Fragment>
    )
}

export default Posts
