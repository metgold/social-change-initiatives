import React from 'react'

import styled from 'styled-components'
import Navbar from '../Navbar'
import Section from '../SectionAboutUs'



function AboutUs() {
    return (
        <React.Fragment>
        <Container>
            <Navbar/>
        
            <Section 
            title="Vision"
            description="Nigeria, a country where we are all equal in rights and dignity"
            backgroundImg="img-43.jpg"
            vBtnText="Learn more"
            
        />
        <Section
            title="Mission"
            description="To be an inclusive movement and a catalyst for nation wide"
            backgroundImg="img-44.jpg"
            mBtnText="Learn more"
            
        />
        <Section
            title="Objectives"
            description="The Social Change Initiative would have done the following in 5 years"
            backgroundImg="img-45.jpg"
            oBtnText="Learn more"
            
        />
        <Section
            title="Strategies"
            description=""
            backgroundImg="img-46.jpg"
            sBtnText="Learn more"
           
        />
        
        </Container>            
        
        </React.Fragment>
    )
}

export default AboutUs

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
