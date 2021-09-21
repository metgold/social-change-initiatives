import React from 'react'
import styled from 'styled-components'
import Roll from 'react-reveal/Roll';

function SectionM( {titlem, descriptionm, backgroundImgm} ) {
    return (
        <Wrap bgImage={backgroundImgm}>
            <Roll bottom>
                <ItemText>
                    <h1>{ titlem }</h1>
                    <p>{ descriptionm }</p>
                    
                </ItemText>
            </Roll>
            
        </Wrap>
    )
}

export default SectionM

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/Tesla1.jpg');
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
