import React from 'react';
import { Link } from 'react-router-dom';

import styled from "styled-components";
import { Button } from './Button';



function Construction() {
    return (
        <Container>
            <h1>Page still on build</h1>
            <p>Please check back in the next hour</p>
            
                <Button><Link to="/" style={{textDecoration:"none", color:"inherit"}}>Back </Link></Button>
           
        </Container>
    )
}

export default Construction

const Container = styled.div`
    width: 100%;
    height: 150vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("/images/img-47.jpg");
    object-fit: contain;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
