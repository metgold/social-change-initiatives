import React from 'react'
import styled from 'styled-components';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Team from '../Team';

function OurTeam() {
  return (
    <React.Fragment>
    <Container>
      <Navbar/>
        <Frame>
        <Team
        name="Abdurrahim Imam Chindo"
        lg=""
        state="Director "
        img="img-9.jpg"
        />
        <Team
        name="Sani Saeed Altukry"
        lg=""
        state="National Organizing Secretary"
        img="img-1.jpg"
        />
          <Team
              name="Abubakar Labbo"
              lg="Jega Local Government"
              state="Kebbi State Coordinator"
              img="img-53.jpg"
              />
            <Team
              name="Ibrahim Ahmed Yusuf"
              lg="MMC Local Government"
              state="Borno State Coordinator"
              img="img-52.jpg"
              />
            <Team
              name="Mandy Ezekiel"
              lg=" Local Government"
              state="Akwa Ibom State Coordinator"
              img="img-54.jpg"
              />
            <Team
              name="Abubakar Mohammed Awual (Ja'afar)"
              lg=" Local Government"
              state="Kogi State Coordinator"
              img="img-55.jpg"
              />
            <Team
              name="Nura Abubakar Bodinga"
              lg=" Local Government"
              state="Sokoto State Coordinator"
              img="img-56.jpg"
              />
            <Team
              name="Florence Jatau Victor"
              lg="Local Government"
              state="Kaduna State Coordinator"
              img="img-57.jpg"
              />
            <Team
              name="Thelma Chinwe Nnamdi"
              lg="Local Government"
              state="Enugu State Coordinator"
              img="img-58.jpg"
              />
            <Team
              name="Bala Salisu Muhammed"
              lg=" Local Government"
              state="Bauchi State Coordinator"
              img="img-59.jpg"
              />
            <Team
              name="Nwogu Chiamaka"
              lg="Local Government"
              state="Abia State Coordinator"
              img="img-60.jpg"
              />
            <Team
              name="Comr.Usman Ibrahim Dantakarda"
              lg="Gusau Local Government"
              state="Zamfara State Coordinator"
              img="img-.jpg"
              />
            <Team
              name="Obaro Stanley"
              lg="Jega Local Government"
              state="Kebbi State Coordinator"
              img="img-.jpg"
              />
              
          </Frame>  
          <Footer/>
        </Container>
    </React.Fragment>
  )
}

export default OurTeam;

const Container = styled.div`
   
`

const Frame = styled.div`
    width: 40%;
    height: 100%;
    padding: 35px;
    gap: 10px;
    margin: 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 768px) {
        display: grid;
        grid-template-rows: repeat(1, 1fr);
        padding: 35px;
    }
`



