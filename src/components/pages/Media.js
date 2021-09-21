import React, { useState, useEffect } from 'react';
import '../../App.css';
import './Media.css';
import Footer from '../Footer';

import { SRLWrapper } from 'simple-react-lightbox';
import Navbar from '../Navbar';



   const images =[
      {
         id: 1,
         imgSrc: 'img-1.jpg',
         tag:'old'
      },
      {
         id: 2,
         imgSrc: 'img-2.jpg',
         tag:'last month'
      },
      {
         id: 3,
         imgSrc: 'img-3.jpg',
         tag:'last week'
      },
      {
         id: 4,
         imgSrc: 'img-4.jpg',
         tag:'new'
      },
      {
         id: 5,
         imgSrc: 'img-5.jpg',
         tag:'old'
      },
      {
         id: 6,
         imgSrc: 'img-6.jpg',
         tag:'last month'
      },
      {
         id: 7,
         imgSrc: 'img-7.jpg',
         tag:'last week'
      },
      
      {
         id: 9,
         imgSrc: 'img-9.jpg',
         tag:'old'
      },
      {
         id: 10,
         imgSrc: 'img-10.jpg',
         tag:'last month'
      },
      {
         id: 11,
         imgSrc: 'img-11.jpg',
         tag:'last week'
      },
      {
         id: 12,
         imgSrc: 'img-12.jpg',
         tag:'new'
      },
      {
         id: 13,
         imgSrc: 'img-13.jpg',
         tag:'old'
      },
      {
         id: 14,
         imgSrc: 'img-14.jpg',
         tag:'last month'
      },
      {
         id: 15,
         imgSrc: 'img-15.jpg',
         tag:'last week'
      },
      {
         id: 16,
         imgSrc: 'img-16.jpg',
         tag:'old'
      },
      {
         id: 17,
         imgSrc: 'img-17.jpg',
         tag:'new'
      },
      {
         id: 18,
         imgSrc: 'img-18.jpg',
         tag:'last month'
      },
      {
         id: 19,
         imgSrc: 'img-19.jpg',
         tag:'last week'
      },
      {
         id: 20,
         imgSrc: 'img-20.jpg',
         tag:'new'
      },
      {
         id: 21,
         imgSrc: 'img-21.jpg',
         tag:'old'
      },
      {
         id: 22,
         imgSrc: 'img-22.jpg',
         tag:'last month'
      },
      {
         id: 23,
         imgSrc: 'img-23.jpg',
         tag:'last week'
      },
      {
         id: 24,
         imgSrc: 'img-24.jpg',
         tag:'new'
      },
      {
         id: 25,
         imgSrc: 'img-25.jpg',
         tag:'old'
      },
      {
         id: 26,
         imgSrc: 'img-26.jpg',
         tag:'last month',
      },
      {
         id: 27,
         imgSrc: 'img-27.jpg',
         tag:'last week'
      },
      {
         id: 28,
         imgSrc: 'img-28.jpg',
         tag:'new'
      },
      {
         id: 29,
         imgSrc: 'img-29.jpg',
         tag:'old'
      },
      {
         id: 30,
         imgSrc: 'img-30.jpg',
         tag:'last month'
      },
      {
         id: 31,
         imgSrc: 'img-31.jpg',
         tag:'last week'
      },
      {
         id: 32,
         imgSrc: 'img-32.jpg',
         tag:'new'
      },
      {
         id: 33,
         imgSrc: 'img-33.jpg',
         tag:'old'
      },
      {
         id: 34,
         imgSrc: 'img-34.jpg',
         tag:'last month'
      },
      {
         id: 35,
         imgSrc: 'img-35.jpg',
         tag:'last week'
      },
      {
         id: 36,
         imgSrc: 'img-36.jpg',
         tag:'new'
      },
      {
         id: 37,
         imgSrc: 'img-37.jpg',
         tag:'old'
      },
      {
         id: 38,
         imgSrc: 'img-38.jpg',
         tag:'last month'
      },
      {
         id: 39,
         imgSrc: 'img-39.jpg',
         tag:'last week'
      },
      {
         id: 40,
         imgSrc: 'img-40.jpg',
         tag:'new',
      },
      {
         id: 41,
         imgSrc: 'img-41.jpg',
         tag:'new',
      },
      {
         id: 42,
         imgSrc: 'img-42.jpg',
         tag:'new',
      },
   ];

function Media() {
     const [tag, setTag] = useState('all');
     const [filteredImages, setFilteredImages] = useState([]);
     
     useEffect( () => {
         tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter( image => image.tag === tag))
     }, [tag])

     return (
      <React.Fragment >
         <Navbar/>
         <div className="gallery">
            <div className="tags">
               <TagButton name="all" handleSetTag={setTag} tagActive={ tag === `all` ? true : false}/>
               <TagButton name="new" handleSetTag={setTag} tagActive={ tag === `new` ? true : false}/>
               <TagButton name="last week" handleSetTag={setTag} tagActive={ tag === `last week` ? true : false}/>
               <TagButton name="last month" handleSetTag={setTag} tagActive={ tag === `last month` ? true : false}/>
               <TagButton name="old" handleSetTag={setTag} tagActive={ tag === `old` ? true : false}/>
            </div>
            <SRLWrapper> 
               <div className="container">
                  {filteredImages.map( image =>
                     <div key={images.id} className="image-card">
                        <a href={`/images/${image.imgSrc}`}> <img className="image" src={`/images/${image.imgSrc}`} alt=''/></a>
                     </div>)}
               </div>
            </SRLWrapper>     
         </div>
         <Footer />
      </React.Fragment>
  );
}

const TagButton = ( { name, handleSetTag, tagActive } ) => {
   return <button className={`tag ${ tagActive ? `active`: null}`} onClick={() => handleSetTag(name)}>{ name.toUpperCase() }</button>
}

export default Media;

