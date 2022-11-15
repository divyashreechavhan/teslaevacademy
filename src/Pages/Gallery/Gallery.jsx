import React from 'react'
import "./Gallery.css"
import EvComponents from './ApiGallery';
import { useState } from 'react';

const Gallery = () => {
  const [evComponentsData, setEvComponentsData] = useState(EvComponents);
  return (
    <>
      <h1 style={{ textAlign: "center", color: "#4dbf1c" }}>Ev Components AND Photos</h1>

      <div className='CardsGallery'>

        {evComponentsData.map((curElem) => {
          const { id,
            ComponentImage,
            ComponentName,
          } = curElem;
          return (
            <>
              <div class="Gallerycard">
                <div className='GalleryImg'>
                  <img src={ComponentImage} alt="Retrofitment kit" style={{ width: "100%", height: 276.312 }} />
                </div>
                <hr />
                <h3>{ComponentName}</h3>
              </div>

            </>
          )
        })}

      </div>
      <hr />
      <hr />
      <div class="RetrofitmentCard">
        <div className='RetrofitImg'>
          <img src="GalleryImages/EVCarRetrofitment.jpeg" alt="Denim Jeans" style={{ width: "100%" }} />
        </div>
        <hr />
        <h3>CAR EV RETROFITMENT</h3>
      </div>
      <hr />
      <hr />

      <div class="Youtube_Gallery">

         <iframe width="420" height="315"
          src="https://www.youtube.com/embed/wMjZ-mjOJPM?autoplay=0&mute=0">
        </iframe> 
         <iframe width="420" height="315"
          src="https://www.youtube.com/embed/xXfA9yir7Yg?autoplay=0&mute=0">
        </iframe> 
         <iframe width="420" height="315"
          src="https://www.youtube.com/embed/OROGfOJPSps?autoplay=0&mute=0">
        </iframe> 
         <iframe width="420" height="315"
          src="https://www.youtube.com/embed/PoKngtDz25g?autoplay=0&mute=0">
        </iframe> 
         <iframe width="420" height="315"
          src="https://www.youtube.com/embed/UQUtqXoORLg?autoplay=0&mute=0">
        </iframe> 
         <iframe width="420" height="315"
          src="https://www.youtube.com/embed/h6OQQ-JkPQI?autoplay=0&mute=0">
        </iframe> 
         <iframe width="420" height="315"
          src="https://www.youtube.com/embed/Hn1b0-heg3Y?autoplay=0&mute=0">
        </iframe> 
         <iframe width="420" height="315"
          src="https://www.youtube.com/embed/i9sQ1qchjQU?autoplay=0&mute=0">
        </iframe> 
         <iframe width="420" height="315"
          src="https://www.youtube.com/embed/7aRIeoO7CVI?autoplay=0&mute=0">
        </iframe> 

        <hr />
      </div>



    </>
  )
}

export default Gallery