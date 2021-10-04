import React from 'react'
import styled from 'styled-components'
import Roll from 'react-reveal/Roll';

function SectionO({titleo, descriptiono, backgroundImgo} ) {
    return (
        <Wrap bgImage={backgroundImgo}>
            <Roll bottom>
                <ItemText>
                    <h1 style={{background:"none"}}>{ titleo }</h1>
                    <p>{ descriptiono }</p>
                    <ul>
                        <li>1. Facilitated access to learning and development opportunities to 1,500 youths in their diversity in each geopolitical zone in Nigeria.</li>
                        <li>2. Built a robust and effective movement for social change with chapters in 36 states of Nigeria and the FCT.</li>
                        <li>3. Improved civic and political participation of marginalised and disadvantaged groups by 50% across the 6 geographic zones in Nigeria.</li>
                        <li>4. Conducted quarterly behavioural change communication campaigns for the adolescents and youths in the 36 states and the FCT.</li>
                        <li>5. Birthed a Political Party that is driven on Human rights and feminist principles.</li>
                        <li>6. Supported members to contest for political offices at community, local government, state and national levels.</li>
                        <li>7. Conducted 370 humanitarian outreach (twice a year in every state and the FCT) in Nigeria.</li>
                        <li>8. Established a scholarship fund for 335 (3 topmost performing young persons that are disadvantaged in 36 states and the FCT).</li>
                        <li>9. Conducted annual symposium on Sustainable Development thereby contributing to safety and security, conflict resolution and peace building in Nigeria.</li>
                        <li>10. Conducted 2 national situational analysis of civic and political participation.</li>
                    </ul>
                    
                </ItemText>
            </Roll>
            
        </Wrap>
    )
}

export default SectionO

const Wrap = styled.div`
    width: 100vw;
    height: 150vh;
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
    width: 80%;
    margin: auto;
    text-align: center;
    text-transform: uppercase;
    z-index: -1 ;
        ul{
            text-align:justify;  
            text-justify:auto;
            font-size: 50px;
            font-weight: 300;
            color: #000;
            margin: 5px;
            padding: 30px;
            text-transform: none;
            font-family: 'Abril Fatface', cursive;
        }
`

