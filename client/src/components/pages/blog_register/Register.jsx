import "./Register.scss";
import styled from 'styled-components';
import { Link } from "react-router-dom"
import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../Navbar";

export default function Register() {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [error,setError] = useState(false);
    const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL,
    });

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError(false);
        try{
        const res = await axiosInstance.post("/Auth/Register", {
            username,
            email,
            password,
            phone,
        });
        res.data && window.location.replace("/Login");
    }catch(err){
            setError(true);
        }
    };
    return (
        <React.Fragment>
            <Navbar/>
            <ContainerReg className="register">
                <span className="registerTitle">Register</span>
                <form className="registerForm" onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input 
                    type="text" 
                    className="registerInput" 
                    placeholder="Enter your username"
                    onChange={e=>setUsername(e.target.value)}
                    />
                    <label>Email</label>
                    <input 
                    type="text" 
                    className="registerInput" 
                    placeholder="Enter your email"
                    onChange={e=>setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input 
                    type="password" 
                    className="registerInput" 
                    placeholder="Enter your password"
                    onChange={e=>setPassword(e.target.value)}
                    />
                    <label>Phone</label>
                    <input 
                    type="phone" 
                    className="registerInput" 
                    placeholder="Enter your phone number"
                    onChange={e=>setPhone(e.target.value)}
                    />
                    <button className="registerButton" type="submit">Register</button>
                </form>
                <button className="registerLoginButton"><Link to="/login" style={{textDecoration:"none", color:"inherit"}}>Login</Link></button>
                {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
            </ContainerReg>
        </React.Fragment>
    )
}

const ContainerReg = styled.div`
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
        url("/images/img-50.jpg");
`
