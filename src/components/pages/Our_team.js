import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import styled from 'styled-components'

export default function OurTeam() {
  return (
    <React.Fragment>
      <Container>
        <h1 className='our_team'>Our Team</h1>
      </Container>
      <Footer />
    </React.Fragment>
    )
}

const Container = styled.div`
    background-image: url('/images/img-9.jpg');
    display: flex;
    height: 90vh;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    
`