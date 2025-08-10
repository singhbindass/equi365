// components/ui/ImageSlider.jsx
import React, { useState } from "react";
import {
  sliderContainer,
  sliderTrack,
  slideImage,
  navButton,
  indicatorContainer,
  indicatorDot,
} from "../style/slider-css";


const ImageSlider = ({ images = [] }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={sliderContainer}>
      {/* Image Track */}
      <div
        className={sliderTrack}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index + 1}`} className={slideImage} />
        ))}
      </div>
       
      {/* Left Arrow */}
      <button onClick={prevSlide} className={`${navButton} left-3`}>
        ‹
      </button>

      {/* Right Arrow */}
      <button onClick={nextSlide} className={`${navButton} right-3`}>
        ›
      </button>

      {/* Indicators */}
      <div className={indicatorContainer}>
        {images.map((_, idx) => (
          <button
            key={idx}
            className={indicatorDot(idx === current)}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
