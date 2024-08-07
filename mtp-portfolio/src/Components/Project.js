import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './Project.css';
import GIFProject1 from "../images/GIFProject1.mp4";

export default function Project() {
  return (
    <section id="projects">
      <br /><br /><br /><br /><br /><br />
      <div className="header">MY RECENT PROJECTS</div>
      <br />
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-content">
            <video src={GIFProject1} autoPlay loop muted playsInline>
              Your browser does not support the video tag.
            </video>
            <button 
              className="overlay-button" 
              onClick={() => window.location.href = 'https://github.com/MTHP20/MTP-Website/tree/main'}
            >
              VIEW PROJECT
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <p>Slide 2</p>
            <button 
              className="overlay-button" 
              onClick={() => window.location.href = 'https://example.com/project2'}
            >
              VIEW PROJECT
              </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <p>Slide 3</p>
            <button 
              className="overlay-button" 
              onClick={() => window.location.href = 'https://example.com/project3'}
            >
              VIEW PROJECT
              </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
