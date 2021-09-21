import React from 'react';
import Post from '../blog_post/Post';
import "./Posts.scss";

function Posts() {
    return (
        <React.Fragment>
            <div className="posts">
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </React.Fragment>
    )
}

export default Posts
