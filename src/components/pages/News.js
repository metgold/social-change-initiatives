import React from 'react';
import Navbar from '../Navbar';
import '../../App.css';
import './News.scss';

import Footer from '../Footer';
import Bounce from 'react-reveal/Bounce';
import styled from 'styled-components';



export default function News() {
  return (
    <React.Fragment>
      <Navbar/>
      <Container>
        
        <header>PROFILE</header>
        {/*<h3 className='meet'>"We must struggle to create a system that is dedicated to democracy and human rights"</h3>*/}
        <div id="body">
          <div id="profile">
            <img src="/images/img-42.jpg" alt="" width="200px" height="200px"/>
            <h3>Cesnabmihilo Dorothy Nuhu Aken'Ova</h3>
            <ul>
              <li>Name : Cesnabmihilo Dorothy Nuhu Aken'Ova</li>
              <li>Sex : Female</li>
              <li>Date of Birth : 23 April, 1963</li>
              <li>Nationality : Nigerian</li>
              <li>Favorite Quote : </li>
            </ul>
            <h3>Family</h3>
            <ul>
              <li>Spouse : Pastor George Osi Aken'Ova </li><b style={{fontSize:'14px', paddingLeft:'0px'}}>(9th July, 1953 - 1st November, 2015)</b>
            </ul>
            </div>
          <div id="bio">
            <h1>Biography</h1>
            <Bounce right>
              <p>
              Cesnabmihilo Dorothy Nuhu Aken’Ova is a feminist and sexual rights activist that has done a lot of work with diverse groups including faith based organizations on relationships, parenting and parent-child communication, and adolescent sexuality and reproductive health.

              She was diagnosed with breast cancer in December 2010.  As she discovered what the medical implications of the disease are, she fell into depression and experienced anxiety and frequent panic attacks that raised her blood pressure, resulting in exhaustion.  She was completely taken over by fear to the extent that she was afraid to sleep for fear that she might die.  Every little itch or discomfort led to panic – it might be a re-occurrence, it might be brain tumor, it might be skin cancer, it might be leukemia, etc… Cesnabmihilo received a lot of support from her family and friends.
              </p>
            </Bounce>
            <Bounce left>
              <p>
              Cesnabmihilo Dorothy Nuhu-Aken'Ova is the Executive Director, International Centre for Sexual Reproductive Rights (INCRESE); Ashoka Fellow; Recipient of 2014 Berlin StoneWall Award for Resistance and the Trail Blazer Award of the 2019 Freedom Awardee. She serves as the Chairperson, Advisory Committee, Coalition for the Defence of Sexual Rights (CDSR); Founding Member, Executive Advisory Committee, CAL; Member, African Feminist Forum; Member and Adviser, Nigeria Feminist Forum; Cofounder and Advisory Committee Member, Gender Rights Initiative (GRI); Affiliate Member, Development Alternative with Women for a New Era (DAWN); Member, International Policy Working Group, AMANITARE; Member, Africa Advisory Committee, OutRight Action International (formerly IGLHRC); Cofounder and Committee Member of the Global South Strategic Group on SRHR HIV Programming; 2003 1000 Women Nobel Peace Price Nominee.

              We believe that, Dorothy Aken'Ova is fit to be Nigeria’s next president. She is visionary, upright, disciplined, hardworking, focused, compassionate. Dorothy Aken'Ova is committed to inclusivity in governance and holds dearly to people oriented leadership principles, economic structures, and environmental justice. This she has translated into the founding of INCRESE Feminist Institute, Connecting the Dots (www.increse.org/connectingthedots) and many other projects she has designed and managed with over 2 decades of experience.
              
              With her expertise in intersectionalities, she has the capacity to work with Nigerians in their diversity to addrress the numerous challenges plaguing the country using the globally renowned intervention strategies that yield lasting solutions. She is well known for her capacity to work with various stakeholders in challenging terrains to address complex and delicate issues.
              
              Dorothy Aken'Ova's degree of compassion is unrivaled. She has a precedence to stand for and speak out for the poor, the vulnerable and the marginalised, an aspect of this humanness is desirable in leadership in these trying times and seasons of the global pandemic which has had far reaching impact. Social unrests of different magnitudes, such as we are experiencing, require a responsive and compassionate leader.
              
              Finally, when Nigerians elect Cesnabmihilo Dorothy Nuhu-Aken'Ova as our president, it will be a turning point in the nation’s history. 
              
              Now is the time to have Nigeria’s first female president. 
              
              Now is the time to have a president who is conversant with the issues and how they intersect.
              
              Now is the time to have a leader who believes in mentorship and adheres to principles of democracy.
              
              Together, let us give Nigeria Cesnabmihilo Dorothy Nuhu-Aken'Ova.
              </p>
            </Bounce>
          </div>
        </div>
        
        </Container>
        <Footer/>
    </React.Fragment>
    )
    
}
  

const Container = styled.div`
    /* background-image: url('/images/img-6.jpg'); */
    display:grid;
    width: 900px;
    margin-top: 150px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    /* border: 2px solid blue */
`
