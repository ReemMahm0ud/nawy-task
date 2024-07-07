// src/components/Carousel.jsx
"use client";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ images }) => {
  console.log("test", Array.isArray(images));
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      useKeyboardArrows={true}
      autoPlay={true}
      stopOnHover={true}
      showStatus={false}
      className="rounded-md overflow-hidden"
    >
      {images?.map((image, index) => (
        <div key={index}>
          <Image
            src={image.img_link}
            alt={`Slide ${image.title}`}
            className="w-full h-64 md:h-96 object-cover"
            width={100}
            height={100}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
