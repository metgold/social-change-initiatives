import React from 'react';
import Flip from 'react-reveal/Flip';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
 /*  setInterval(function(){
    var counter = 1;
    // document.getElementById('radio' + counter).checked =true;
    counter++;
    if(counter > 4){
      counter = 1;
    }
  }, 5000); */
function HeroSection() {
  return (
      <Hero className="hero-container">{/*<video src='/videos/video-1.mp4' autoPlay loop muted />*/}
        {/* image slider start*/}
        <Slider>
          <Slides className="slides">
            {/* radio buttons start*/}
            <input type="radio" name="radio-btn" id="radio1"/>
            <input type="radio" name="radio-btn" id="radio2"/>
            <input type="radio" name="radio-btn" id="radio3"/>
            <input type="radio" name="radio-btn" id="radio4"/>
            {/* image slider end*/}
            {/* image slide start*/}
            <SlideFirst className="slide first">
              <img src="/images/img-11.jpg" alt=""/>
            </SlideFirst>
            <Slide className="slide">
            <img src="/images/img-12.jpg" alt=""/>
            </Slide>
            <Slide className="slide">
            <img src="/images/img-10.jpg" alt=""/>
            </Slide>
            <Slide className="slide">
            <img src="/images/img-41.jpg" alt=""/>
            </Slide>
            {/*<Slide>
            <img src="/images/img-5.jpg" alt=""/>
            </Slide>
            <Slide>
            <img src="/images/img-6.jpg" alt=""/>
            </Slide>
            <Slide>
            <img src="/images/img-7.jpg" alt=""/>
            </Slide>*/}
            {/* image slide end*/}
           {/* automatic navigation start*/}
          <NavigationAuto className="navigation-auto">
            
          </NavigationAuto>
          {/* automatic navigation end*/}
          </Slides>
          {/* manual navigation start*/}
            <NavigationManual className="navigation-manual">
              <label for="radio1" className="manual-btn"></label>
              <label for="radio2" className="manual-btn"></label>
              <label for="radio3" className="manual-btn"></label>
              <label for="radio4" className="manual-btn"></label>
            </NavigationManual>
          {/* manual navigation end*/}
        </Slider>
        {/* image slider end*/}
       
       <Flip left>
          <h1>Cesnabmihilo Dorothy Nuhu Aken'Ova <p className="centre"> FOR </p> PRESIDENT</h1>
        </Flip>
        <BtnG><Link to='/News'><ButtonGroup>Learn More</ButtonGroup></Link>
      </BtnG>
        
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
   /* height: 100vh;
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
    margin-top: -200px;
    } */
    /*p {
    margin-top: 8px;
    color: #fff;
    font-size: 32px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    }*/
`

const Slider = styled.div`
    width: 800px;
    height: 500px;
    border-radius: 10px;
    overflow: hidden;
`
const Slides = styled.div`
    
`
const SlideFirst = styled.div`
    
`
const Slide = styled.div`
   
`
const NavigationAuto = styled.div`
    
    
`

const NavigationManual = styled.div`
    

`

const BtnG = styled.div`
    margin: 30px;
    
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 0px;
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