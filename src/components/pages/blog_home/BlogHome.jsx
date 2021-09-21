import React from 'react';
import './BlogHome.scss'
import Header from '../blog_header/Header';
import Posts from '../blog_posts/Posts';
import Sidebar from '../blog_sidebar/Sidebar';


function BlogHome() {
    return (
        <React.Fragment>
            <Header/>
            <div className="home1">
                <Posts/>
                <Sidebar/>
            </div>
        </React.Fragment>
    )
}

export default BlogHome
