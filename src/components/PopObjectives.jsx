import React from 'react'
import styled from 'styled-components'

import Navbar from './Navbar'
import SectionO from './SectionO'



function PopObjectives() {
    return (
        <React.Fragment>
        <Container>
            <Navbar/>
            <SectionO 
            titleo="Objectives"
            descriptiono="The Social Change Initiative would have done the following in 5 years:"
            backgroundImgo="img-47.jpg"
        />
        
        
        </Container>            
            
        </React.Fragment>
    )
}

export default PopObjectives


const Container = styled.div`
    display:grid;
    width: 100%;
    margin-top: 150px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

