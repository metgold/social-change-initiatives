import "./Login.scss";
import styled from 'styled-components'
import { Link } from "react-router-dom"
import React, { useContext, useRef } from "react";
import { Context } from "../../../context/Context";
import axios from "axios";
import Navbar from "../../Navbar";

export default function Login() {

    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
    const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try{
            const res = await axiosInstance.post("/Auth/Login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({type:"LOGIN_SUCCESS", payload:res.data });
        }catch(err){
            dispatch({type:"LOGIN_FAILURE"});
        }
    };

    return (
        <React.Fragment>
            <Navbar/>
            <Container className="login">
                <span className="loginTitle">Login</span>
                <form className="loginForm" onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input 
                    type="text" 
                    className="loginInput" 
                    placeholder="Enter your username"
                    ref={userRef}
                    />
                    <label>Password</label>
                    <input 
                    type="password" 
                    className="loginInput" 
                    placeholder="Enter your password"
                    ref={passwordRef}
                    />
                    <button className="loginButton" type="submit" disabled={isFetching}>
                        Login
                    </button>
                </form>
                <button className="loginRegisterButton"><Link to="/Register" style={{textDecoration:"none", color:"inherit"}}>Register</Link></button>
            </Container>
        </React.Fragment>
    )
}

const Container = styled.div`
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
        url("/images/img-48.jpg");
`
