import React from 'react';
import "./Topbar.scss";
import { Link } from "react-router-dom";

function Topbar() {
    const user = true
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook"></i>
            <i className="topIcon fab fa-twitter"></i>
            <i className="topIcon fab fa-instagram"></i>
            <i className="topIcon fab fa-youtube"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link to="/" style={{textDecoration:"none", color:"inherit"}}>SOCIAL CHANGE INITIATIVE <i className='fab fa-typo3' /></Link></li>
                    <li className="topListItem"><Link to="/Write" style={{textDecoration:"none", color:"inherit"}}>WRITE</Link></li>
                    <li className="topListItem"><Link to="/Comm" style={{textDecoration:"none", color:"inherit"}}>COMMUNITY</Link></li>
                    <li className="topListItem">{ user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                    <img className="topImg" src="/images/img-11.jpg" alt="" />
                ): (
                    <div>
                        <ul className="topList">
                            <li className="topListItem">
                                <Link to="/Login" style={{textDecoration:"none", color:"inherit"}}>LOGIN</Link>
                            </li>
                            <li className="topListItem">
                                <Link to="/Register" style={{textDecoration:"none", color:"inherit"}}>REGISTER</Link>
                            </li>
                        </ul>
                    </div>
                    )
                }
                
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

export default Topbar
