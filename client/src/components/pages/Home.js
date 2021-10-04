
import React, { useState } from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import ActionProvider from '../../chatbot/ActionProvider';
import MessageParser from '../../chatbot/MessageParser';
import config from '../../chatbot/config';
import Chatbot from "react-chatbot-kit";
import styled from 'styled-components';
import Navbar from '../Navbar';
import CloseIcon from '@material-ui/icons/Close';
import ChatIcon from '@material-ui/icons/Chat';
import Faq from '../Faq';

function Home() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  
  return (
    <React.Fragment>
      <Navbar/>
      <HeroSection />
      <Cards />
      <RightMenu>     
        <CustomMenu onClick={()=>setBurgerStatus(true)}/>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                  <CustomClose onClick={()=>setBurgerStatus(false)}/>
                </CloseWrapper>           
                <ChatBot>
                <Chatbot className = 'chatbot'
                  config={config}
                  actionProvider={ActionProvider} 
                  messageParser={MessageParser}/>
                </ChatBot>
      </BurgerNav>
      <Faq/>
      <Footer />
    </React.Fragment>
  );
}

export default Home;

const ChatBot = styled.div`
    position: fixed;
    right: 20px;
    bottom: 0;
    font-size: 80px;
    color: #fff;
    cursor: pointer;
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const CustomMenu = styled( ChatIcon)`
    position: fixed;
    right: 30px;
    bottom: 0;
    border: 1.5px solid white;
    border-radius: 50%;
    background-color: #fff;
    color:rgba(45, 76, 160, 0.8);
    cursor: pointer;
    z-index: auto;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 65px;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index:16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.2s;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a {
            font-weight: 600;
        }
    }
   
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
    
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

`