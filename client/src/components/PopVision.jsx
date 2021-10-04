import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import SectionV from './SectionV'


function PopVision() {
    return (
        <React.Fragment>
        <Container>
            <Navbar/>
            <SectionV 
            title="Vision"
            description="Nigeria, a country where we are all equal in rights and dignity."
            backgroundImg="img-47.jpg"
            
        />
        
        
        </Container>            
         
        </React.Fragment>
    )
}

export default PopVision

const Container = styled.div`
    display:grid;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

