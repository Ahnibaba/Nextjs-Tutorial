import { serverSideFunction } from "@/utils/server-utils"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../globals.css"
import { ImageSlider } from "@/components/ImageSlider";
//import { clientSideFunction } from "@/utils/client-utils";

export default function ServerRoutePage() {
    const result = serverSideFunction()
    //const clientResult = clientSideFunction()
     const settings = {
    dots: true,
  };
  return (
    <>
      <h1>Server route {result}</h1>
      <ImageSlider />
    </>
  );
}