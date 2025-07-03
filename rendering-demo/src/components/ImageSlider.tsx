"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../app/globals.css"


export const ImageSlider = () => {
    const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/400/300" />
        </div>
        <div>
          <img src="http://picsum.photos/400/400" />
        </div>
        <div>
          <img src="http://picsum.photos/400/500" />
        </div>
      </Slider>
    </div>
  ); 
}