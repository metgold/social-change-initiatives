import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

function HeroSection() {
  return (
      <Hero>{/*<video src='/videos/video-1.mp4' autoPlay loop muted />*/}
      <h1>DOROTHY NUHU AKEN'OVA FOR NATIONAL ASSIGNMENT</h1>
      <Link to='/News'><ButtonGroup>Learn More</ButtonGroup></Link>
        
      {/*<p>What are you waiting for?</p>*/}
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET INVOLVED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH EVENTS <i className='far fa-play-circle' />
        </Button>
      </div>
    </Hero>
  );
}

export default HeroSection;

const Hero = styled.div`
    background: url('/images/img-11.jpg') center center/cover no-repeat; 
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
    object-fit: contain;
    h1 {
    color: #fff;
    font-size: 30px;
    margin-top: -100px;
    }
    p {
    margin-top: 8px;
    color: #fff;
    font-size: 32px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`