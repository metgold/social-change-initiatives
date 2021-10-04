import React from 'react';
import Roll from 'react-reveal/Roll';
import styled from 'styled-components';


function Val({backgroundVal, title, description}) {
    return (
        <WrapVal bgImage={backgroundVal}>
        <Roll bottom>
            <ItemVal>
                <h1 style={{background:"none"}}>{ title }</h1>
                <p>{ description }</p>
                <ul>
                    <li>1. Inclusivity: Everyone is eligible to be a part of this movement provided they respect our clause on equality and non discrimination.</li>
                    <li>2. Participatory: We are deliberate and purposeful in ensuring that all the members of this movement are engaged in the process of agenda setting, development and implementation. We are committed to capturing and addressing the voices and concerns of members of this movement and those of the persons affected directly or indirectly by our policies and actions.</li>
                    <li>3. Bottom-Up: is an approach that defines the manner in which issues and people are engaged. This means that we move our lens from specific issues to general issues and we concentrate on voices from community/grassroots level to shape our thinking, our startegies and our interventions. </li>
                    <li>4. Transperency and accountability: We ensure the existence of an enabling environment and make available, within our means, every resources and pooprtunities for all stakeholders of the Social Change Initiative to influence decision making, resource mobilization, allocation and disbursement, as well as own the outcomes of the programmes.</li>
                    <li>5. Human rights: We committed to being a safe space where everyone is treated with dignity and respect at every level of our structures and the communities we serve and represent. We are guided by the Universal Declaration of Human Rights, the African Charter on Human and People's Rights and its Optional Protocol, the Convention on the Elimination of all forms of Discrimination Against Women, the Economic, Social and Cultural Rights Treaty, the International Convention on Civic and Political Rights. We are committed to a periodic review of our policies and strategic plans.</li>
                    <li>6. Inter-sectionality: We are committed to an approach that tackles issues in an intersectional manner knowing that the individual is made up of several component of being that are interrelated amd mutually complimentary. Meaning that the malfunctioning of one component automatically ill disposes the person. We have the same approach to how we see populations. The intersectionalities approach establishes interconnectedness as a people. This is the reason why it is said that injustice to one is injustice to all. This approach does not suppress the autonomy and the right to choice.</li>
                    <li>7. Equality and Non-Discrimination: (a)We believe that we are all born equal in rights and dignity. (b) Non-discrimination. This movement has zero tolerance to discrimination based on as sex, gender, age, perceived or actual sexual orientation, race, colour, ethnic or social origin, genetic features, language, religion or belief, disability, HIV, or marital status. This applies to within and outside the movement."</li>
                </ul>"
            </ItemVal>
        </Roll>
        
    </WrapVal>
    )
}

export default Val

const WrapVal = styled.div`
    width: 100vw;
    height: 150vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")` };
    @media (max-width: 768px) {
    width: 100vw;
    height: 200vh;
    align-items: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgb(238, 174, 202);
    background-color: radial-gradient(
      circle,
      rgba(238, 174, 202, 1) 0%,
      rgba(199, 233, 148, 1) 100%)
    }
`

const ItemVal = styled.div`
    padding-top: 15vh;
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
        };
`
