import React from 'react'
import styled from 'styled-components'

import Navbar from './Navbar'
import SectionM from './SectionM'


function PopMission() {
    return (
        <React.Fragment>
        <Container>
            <Navbar/>
            <SectionM 
            titlem="Mission"
            descriptionm="To be an inclusive movement and a catalyst for nation wide feminist advocacy and political participation for social change."
            backgroundImgm="img-47.jpg"
        />
        
        
        </Container>            
            
        </React.Fragment>
    )
}

export default PopMission


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
