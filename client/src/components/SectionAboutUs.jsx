import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import {ArrowDownwardOutlined} from '@material-ui/icons';
import { Link } from 'react-router-dom';


function Section({ title, description, vBtnText, mBtnText, oBtnText, sBtnText, backgroundImg }) {
   
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1 style={{background:"none"}}>{ title }</h1>
                    <p>{ description }</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <Link to= '/PopVision'> 
                            
                            { vBtnText && 
                                <LeftButton>
                                    { vBtnText }
                                </LeftButton>
                            }
                            
                           
                        </Link>
                        <Link to= '/PopMission'> 
                            
                            { mBtnText && 
                                <LeftButton>
                                    { mBtnText }
                                </LeftButton>
                            }
                            
                        </Link>
                        <Link to= '/PopObjectives'> 
                            
                            { oBtnText && 
                                <LeftButton>
                                    { oBtnText }
                                </LeftButton>
                            }
                            
                        </Link>
                        <Link to= '/'> 
                            
                            { sBtnText && 
                                <LeftButton>
                                    { sBtnText }
                                </LeftButton>
                            }
                            
                        </Link>
                    </ButtonGroup>
                </Fade>
                <Dropdown>
                <Fade bottom>
                    <ArrowDownwardOutlined/>
                </Fade>
                </Dropdown>
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")` }
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    text-transform: uppercase;
    z-index: -1 ;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const Dropdown = styled.div`
    display: flex;
    justify-content: center;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
    color: #fff;
`
const Buttons = styled.div`


`