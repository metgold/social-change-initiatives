import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Recent Events</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Cour'
              label='Events 1'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Bridging gaps'
              label='Events 2'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Take the Stride'
              label='Events 3'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='A worthy call'
              label='Events 4'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='The right time'
              label='Events 5'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;