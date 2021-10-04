import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router"
import { Link } from "react-router-dom";
import { Context } from "../../../context/Context";
import "./Singlepost.scss"

export default function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const PF = "http://localhost:5000/images/";
    const {user} = useContext(Context);

    useEffect(()=>{
        const getPost = async ()=> {
            const res = await axios.get("/Posts/" + path);
            setPost(res.data)
        };
        getPost()
    },[path]);

    const handleDelete = async()=>{
        try{
        await axios.delete(`/Posts/${post._id}`, {
            data: {username:user.username}});
        window.location.replace("/Values");
        }catch(err) {}
    };
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                    {post.photo && (
                    <img
                     src={PF + post.photo}
                     alt=''
                     className="singlePostImg"
                     /> 
                    )}
                
                <h1 className="singlePostTitle">
                        {post.title}
                        {post.username === user?.username && (
                    <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i class="singlePostIcon far fa-trash-alt" onClick={handleDelete} ></i>
                    </div>)}
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: 
                        <Link to={`/?user=${post.username}`} style={{textDecoration:"none", color:"inherit"}}>
                        <b>{post.username}</b> 
                        </Link>
                    </span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostDesc">{post.desc}</p>
            </div>
        </div>
    )
}
