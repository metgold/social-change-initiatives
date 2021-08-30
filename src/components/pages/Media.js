import React from 'react';
import './Media.css';
import MediaItem from './MediaItem';

function Media() {
  return (
    <div className='media'>
      <h1>Recent Events</h1>
      <div className='media__container'>
        <div className='media__wrapper'>
          <ul className='media__items'>
            <MediaItem
              src='images/img-1.jpg'
              text='Cour'
              label='Events 1'
              path='/services'
            />
            <MediaItem
              src='images/img-2.jpg'
              text='Bridging gaps'
              label='Events 2'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <MediaItem
              src='images/img-3.jpg'
              text='Take the Stride'
              label='Events 3'
              path='/services'
            />
            <MediaItem
              src='images/img-4.jpg'
              text='A worthy call'
              label='Events 4'
              path='/products'
            />
            <MediaItem
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

export default Media;