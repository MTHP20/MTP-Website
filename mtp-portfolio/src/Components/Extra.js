import React, { useState } from 'react';
import './Extra.css';

// Importing images for collages
import img1 from '../images/spain/1.JPEG';
import img2 from '../images/spain/2.JPEG';
import img3 from '../images/spain/3.JPEG';
import img4 from '../images/spain/4.JPEG';
import img5 from '../images/spain/5.JPEG';
import img6 from '../images/spain/6.JPEG';
import img7 from '../images/spain/7.JPEG';
import img8 from '../images/spain/8.JPEG';
import img9 from '../images/spain/9.JPEG';
import img10 from '../images/spain/10.JPEG';
import img11 from '../images/spain/11.JPEG';
import img12 from '../images/spain/12.JPEG';

const collages = [
    [img1, img2, img3],
    [img4, img5, img6],
    [img7, img8, img9],
    [img10, img11,img12], 
  ];

const Extra = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % collages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + collages.length) % collages.length);
  };

  return (
    <section id="extra" className="collage-carousel">
      <button className="carousel-control prev" onClick={prevSlide}>❮</button>
      <div className="collage-inner">
        {collages[currentIndex].map((img, index) => (
          <div key={index} className="collage-item">
            <img src={img} alt={`Collage Slide ${currentIndex} Image ${index}`} />
          </div>
        ))}
      </div>
      <button className="carousel-control next" onClick={nextSlide}>❯</button>
    </section>
  );
};

export default Extra;
