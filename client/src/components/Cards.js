import React from 'react';
import Roll from 'react-reveal/Roll';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Recent Events</h1>
      <Roll right>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-62.jpg'
              text= "A meeting between Gbagyi Sa'asi Association Niger State and Ms. Cesnabmihilo Dorothy Nuhu-Aken'Ova on Thursday September 30, 2021. The excos of the Association expressed their joy over the aspiration of Darlyn Dotty and promised full support."
              label="GBAGYI SA'ASI ASSOCIATION VISITS THE PRESEIDENTIAL ASPIRANT"
              path='/Media'
            />
            <CardItem
              src='images/img-63.jpg'
              text="NANNS EXCECUTIVES VISIT THE PRESEIDENTIAL ASPIRANT, CESNABMIHILO DOROTHY NUHU-AKEN'OVA  IN HER OFFICE and awarded her as 'ICON OF HUMANITARIAN SERVICE' in recognition of her immense contribution towards national development, educational upliftment, youth empowerment and service to humanity. "
              label='NANNS EXCECUTIVES(2021) VISIT THE PRESEIDENTIAL ASPIRANT'
              path='/Media'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-64.jpg'
              text='Our Darlyn Dotty is a member of this group'
              label='The Challenge Initiative(tci) Nigeria, September 2021'
              path='/Media'
            />
            {/*<CardItem
              src='images/img-4.jpg'
              text='Day 4'
              label='Events 4'
              path='/Media'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Day 5'
              label='Events 5'
              path='/'
            />*/}
          </ul>
        </div>
      </div>
      </Roll>
    </div>
  );
}

export default Cards;