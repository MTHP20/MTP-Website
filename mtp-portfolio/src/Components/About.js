import React from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  return (
    <section id="about">
      <h2>ABOUT SECTION</h2>
      <div className='top'>
        <h1 className='text-center'>Welcome to React Animation</h1>
        <h1>Fade</h1>
        <div className='animation'></div>
        <div className='animation'></div>
        <div className='animation'></div>
        <div className='animation'></div>
        <h1>Flip</h1>
        <div className='animation'></div>
        <h1>Zoom Animation</h1>
        <div className='animation'></div>
      </div>
    </section>
  );
};

export default About;
