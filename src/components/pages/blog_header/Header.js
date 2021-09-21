import React from 'react';
import "./Header.css";

function Header() {
    return (
        <React.Fragment>
            <div className="header1">
                <div className="headerTitles">
                    <span className="headerTitleSm">React & Node</span>
                    <span className="headerTitleLg">Blog</span>
                </div>
                <img className="headerImg" src="/images/img-40.jpg" alt="" />
            </div>
        </React.Fragment>
    )
}

export default Header

