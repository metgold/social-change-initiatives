import React from 'react';
import styled from 'styled-components';
import { SRLWrapper } from 'simple-react-lightbox';
import Fade from 'react-reveal/Fade';



function Team({name, state, img}) {
    return (
        <React.Fragment>
        <Container>
        <Fade bottom>
            <SRLWrapper>
                <Profile bg={img}>
                <h1 style={{background: "none", fontSize: "0px"}}>{name}</h1>
                
                </Profile>
            </SRLWrapper>
            
            <Text>
                <span>{name}</span>
                <p>{state}</p>
            </Text>
          </Fade>
      </Container>
        </React.Fragment>
    )
}

export default Team;

const Container = styled.div`
    display: grid;
    grid-template-rows: 200px 30px;
    width: 80%;
    height: 100%;
    margin: 55px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
`


const Profile = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom:45px;
    background-size: contain;
    background-position: absolute;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bg}")` };
    
    h1 {
        color: rgba(45, 76, 160, 0.8);
        font-weight: 500;
        font-size: 20px;
        margin-top: 200px;
        object-fit: contain;
        height: 00%;
    }
`


const Text = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0px;
   
    span {
        display: flex;
        padding-top: 40px;
        padding-right: 5px;
        font-family: "Varela Round", sans-serif;
        text-align: start;
        font-size: 28px;
        color: rgba(45, 76, 160, 0.8);
    }
    p {
        font-family: "Varela Round", sans-serif;
        padding-top: 40px;
        padding-left: 15px;
        text-align: center;
        font-size: 20px;
        margin: 0px;
    }
`
