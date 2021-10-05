import React, { useEffect, useState } from 'react';
import './BlogHome.scss'
import Header from '../blog_header/Header';
import Posts from '../blog_posts/Posts';
import Sidebar from '../blog_sidebar/Sidebar';
import axios from "axios"
import { useLocation } from 'react-router';
import { ContextProvider } from '../../../context/Context';


function BlogHome() {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();
    useEffect(()=>{
        const fetchPosts = async ()=>{
            
           const res = await axios.get("/Posts"+search);
           setPosts(res.data);
        };
        fetchPosts();
    },[search]);

    return (
        <React.Fragment>
        <ContextProvider>
            <Header/>
            <div className="home1">
                <Posts posts={posts} />
                <Sidebar/>
            </div></ContextProvider>
        </React.Fragment>
    )
}

export default BlogHome
