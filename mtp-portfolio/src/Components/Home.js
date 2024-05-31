import React from 'react';
import mainPhoto from '../images/mainPhoto.jpg';
import './Home.css';

const Home = () => {
  return (
    <section id="home">
      <div className='nameTitle'>
        <h1>Michael Panlilio</h1>
      </div>
      <div className='aboutContainer'>
        <div className='profile'>
          <img src={mainPhoto} alt="main" id="main" />
        </div>
        <div className='overviewContainer'>
          <p>A *JOB TITLE" working from London, United Kingdom</p>
          <br></br>
          <p>Over the past 3 years, I have been studying Computer Science at Royal Holloway, University of London.
            Finishing my final year I've worked on various projects using different programming languages.</p>
          <p>As a soon-to-be graduate, I am focused on expanding my portfolio while further developing and strengthening my expertise in software.
            My goal is to leverage this experience towards securing a position at a renowned organization.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
