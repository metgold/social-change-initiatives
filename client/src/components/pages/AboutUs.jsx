import React from 'react'

import styled from 'styled-components'
import Navbar from '../Navbar'
import Section from '../SectionAboutUs'



function AboutUs() {
    return (
        <React.Fragment>
        <Navbar/>
        <Container>
            
        
            <Section 
            title="Vision"
            description="Nigeria, a country where we are all equal in rights and dignity"
            backgroundImg="img-48.jpg"
            vBtnText="Learn more"
            
        />
        <Section
            title="Mission"
            description="To be an inclusive movement and a catalyst for nation wide"
            backgroundImg="img-49.jpg"
            mBtnText="Learn more"
            
        />
        <Section
            title="Objectives"
            description="The Social Change Initiative would have done the following in 5 years"
            backgroundImg="img-50.jpg"
            oBtnText="Learn more"
            
        />
        <Section
            title="Strategies"
            description=""
            backgroundImg="img-51.jpg"
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
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
