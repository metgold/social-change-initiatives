import "./Login.scss";
import styled from 'styled-components'
import { Link } from "react-router-dom"

export default function Login() {
    return (
        <Container className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="text" className="loginInput" placeholder="Enter your email"/>
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter your password"/>
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton"><Link to="/Register" style={{textDecoration:"none", color:"inherit"}}>Registar</Link></button>
        </Container>
    )
}

const Container = styled.div`
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
        url("/images/img-8.jpg");
`
