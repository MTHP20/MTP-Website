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
      <br /><br /><br /><br /><br /><br /><br /><br />
      <div className="header">MY RECENT PROJECTS</div>
      <br /><br /><br /><br />
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
              onClick={() => window.open('https://github.com/MTHP20/MTP-Website/tree/main', '_blank')}
            >
              VIEW PROJECT
            </button>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
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
        </SwiperSlide> */}
      </Swiper>
      <div className="projectInfo">
        <div class="projectDes"><p>One of my favorite projects was my final year project, where I developed an Offline Mapping Application using HTML5 technologies. I retrieved OpenStreetMap data via Leaflet and implemented offline functionality using Service Workers, while Web Storage was used to store user data within the browser.</p>
        <p>The application allowed users to navigate and pan across the map, search for desired locations, and explore dynamic features. Working on this project broadened my understanding of how technologies like HTML5 Canvas can be leveraged to create more complex applications.</p>
        <p>I also have several upcoming projects in mind to expand my expertise in other programming languages. I'm planning to develop an MP3 player in Python and a To-Do List application in C#.</p>
        </div>
      </div>
    </section>
  );
}
