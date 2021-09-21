import React from 'react';
import "./Sidebar.scss";

function Sidebar() {
    return (
        <React.Fragment>
            <div className="sidebar">
                <div className="sidebarItem">
                    <span className="sidebarTitle">About me</span>
                    <img className="sidebarImg" src="/images/img-39.jpg" alt="" />
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle">CATEGORIES</span>
                    <ul className="sidebarList">
                        <li className="sidebarListItem"> Life</li>
                        <li className="sidebarListItem"> Music</li>
                        <li className="sidebarListItem"> Style</li>
                        <li className="sidebarListItem"> Sport</li>
                        <li className="sidebarListItem"> Tech</li>
                        <li className="sidebarListItem"> Cinema</li>
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
