import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Val from './Val';


function Value() {
    return (
        <React.Fragment>
        <Navbar/>
        <Container>
            <Val
            title="VALUES"
            description="VALUES OF THE SOCIAL CHANGE INITIATIVE"
            backgroundVal="img-61.jpg"
            />
        </Container>
        </React.Fragment>
    )
}

export default Value

const Container = styled.div`
    display:grid;
    width: 100%;
    height: 100vh;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
