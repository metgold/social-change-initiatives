import React from 'react';
import '../../App.css';
import styled from 'styled-components';


export default function News() {
  return (
    <Container><h3 className='meet'>"We must struggle to create a system that is dedicated to democracy and human rights"</h3></Container>
    )
    
}
  

const Container = styled.div`
    background-image: url('/images/img-6.jpg');
    display: flex;
    height: 90vh;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    
`