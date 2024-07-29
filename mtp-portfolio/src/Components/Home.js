import React from 'react';
import mainPhoto from '../images/mainPhoto.jpg';
import './Home.css';

const Home = () => {
  return (
    <section id="home">
      <div className='nameTitle'>
        <h1>MICHAEL PANLILIO</h1>
      </div>
      <div className='aboutContainer'>
        <div className='profile'>
          <img src={mainPhoto} alt="main" id="main" />
        </div>
        <div className='overviewContainer'>
          <p>Over the past 3 years, I studied Computer Science at Royal Holloway, University of London, and recently graduated.
            Throughout my course, I've worked on various projects using different programming languages.</p>
          <p>As a recent graduate, I am focused on expanding my portfolio while further developing and strengthening my expertise in software.
            My goal is to leverage this experience to secure a position at a renowned organisation.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
