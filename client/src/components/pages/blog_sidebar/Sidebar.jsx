import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.scss";

function Sidebar() {
    const [cats,setCats] = useState([]);

    useEffect(()=>{
        const getCats = async ()=>
        {
            const res = await axios.get("/categories")
            setCats(res.data)
        };
        getCats();
    },[]);

    return (
        <React.Fragment>
            <div className="sidebar">
                <div className="sidebarItem">
                    <span className="sidebarTitle">About me</span>
                    <img className="sidebarImg" src="/images/img-.jpg" alt="" />
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle">CATEGORIES</span>
                    <ul className="sidebarList">
                        {cats.map((c)=>(
                            <Link to={`/?cat=${c.name}`} style={{textDecoration:"none", color:"inherit"}}>
                                <li className="sidebarListItem">{c.name}</li>
                            </Link>
                            
                        ))}
                        
                    </ul>
                </div>
                <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook"></i>
                    <i className="sidebarIcon fab fa-twitter"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                    <i className="sidebarIcon fab fa-youtube"></i>
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Sidebar
