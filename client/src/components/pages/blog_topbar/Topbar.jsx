import React, { useContext } from 'react';
import "./Topbar.scss";
import { Link } from "react-router-dom";
import { Context } from '../../../context/Context';

function Topbar() {
    const {user, dispatch} = useContext(Context);

    const handleLogout = () =>{
        dispatch({type: "LOGOUT" })
    }
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
                    <li className="topListItem"><Link to="/" style={{textDecoration:"none", color:"inherit"}}><img src="/images/img-65.png" style={{height: "50px", width: "200px", }} alt="" /></Link></li>
                    <li className="topListItem"><Link to="/Write" style={{textDecoration:"none", color:"inherit"}}>WRITE</Link></li>
                    <li className="topListItem"><Link to="/Comm" style={{textDecoration:"none", color:"inherit"}}>COMMUNITY</Link></li>
                    <li className="topListItem" onClick={handleLogout}>{ user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                    <img 
                    className="topImg" 
                    src={user.profilePic} 
                    alt="" />
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
