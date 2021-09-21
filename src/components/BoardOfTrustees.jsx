import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Navbar from './Navbar'

function BoardOfTrustees() {
    return (
        <React.Fragment>
            <Container>
                <Navbar/>
            </Container>
            <Footer/>
        </React.Fragment>
    )
}

export default BoardOfTrustees

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
