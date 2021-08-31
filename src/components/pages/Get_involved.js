import React from 'react';
import '../../App.css';
import styled from 'styled-components';


export default function GetInvolved() {
  return (
    <Container><h1 className='news'>Volunteer</h1></Container>
    )
}

const Container = styled.div`
    background-image: url('/images/img-2.jpg');
    display: flex;
    height: 90vh;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    
`