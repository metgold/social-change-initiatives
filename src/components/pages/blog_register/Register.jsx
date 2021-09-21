import "./Register.scss";
import styled from 'styled-components';
import { Link } from "react-router-dom"
import React from "react";
import Topbar from "../blog_topbar/Topbar";

export default function Register() {
    return (
        <React.Fragment>
            <Topbar/>
            <ContainerReg className="register">
                <span className="registerTitle">Register</span>
                <form className="registerForm">
                    <label>Username</label>
                    <input type="text" className="registerInput" placeholder="Enter your username"/>
                    <label>Email</label>
                    <input type="text" className="registerInput" placeholder="Enter your email"/>
                    <label>Password</label>
                    <input type="password" className="registerInput" placeholder="Enter your password"/>
                    <button className="registerButton">Register</button>
                </form>
                <button className="registerLoginButton"><Link to="/login" style={{textDecoration:"none", color:"inherit"}}>Login</Link></button>
            </ContainerReg>
        </React.Fragment>
    )
}

const ContainerReg = styled.div`
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
        url("/images/img-8.jpg");
`
