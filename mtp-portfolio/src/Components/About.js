import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, [])
  return (
    <section id="about">
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <div className="header">EDUCATION</div>
      <div className='Timeline'>
        <div className='gcses' data-aos="flip-right">
          <div className='details'>
            <div className='schoolGrade'>
              <p>Easthampstead Park Community School</p>
              <p>8 GCSES at Grades 7-5 including A/7 Mathematics </p>
            </div>
            <div className='year'>
              <p>2016 - 2019 (3 YEARS)</p>
            </div>
          </div>
        </div>
        <div className='aLevels' data-aos="flip-right">
          <div className='details'>
            <div className='schoolGrade'>
              <p>Easthampstead Park Community School</p>
              <p>Mathematics (B) Further Mathematics (B) Geography (C)</p>
            </div>
            <div className='year'>
              <p>2019 - 2021 (2 YEARS)</p>
            </div>
          </div>
        </div>
        <div className='uNi' data-aos="flip-right">
          <div className='details'>
            <div className='schoolGrade'>
              <p>Royal Holloway, University of London</p>
              <p>BSc Computer Science Upper Second Class Honours (2:1)</p>
            </div>
            <div className='year'>
              <p>2021 - 2024 (3 YEARS)</p>
            </div>
          </div>
        </div>
        <div className='pResent' data-aos="flip-right">
        </div>
      </div>
      <div className='box'></div>
      <div className="moreInfo">
        <div className="box1">
          <h1>hi</h1>
        </div>
        <div className="box2">
          <h1>bye</h1>
        </div>
      </div>
      <div className="header">WORK EXPERIENCE</div>
      <div className='Timeline'>
        <div className='lloyds' data-aos="flip-right">
          <div className='details'>
            <div className='workDes'>
              <p>LLoyd's Register</p>
              <p>Data Administrator (Temporary)</p>
            </div>
            <div className='year'>
              <p>2023 (June - September)</p>
            </div>
          </div>
        </div>
        <div className='limitless' data-aos="flip-right">
          <div className='details'>
            <div className='workDes'>
              <p>Limitless Technology</p>
              <p>Microsoft Technical Support Specialist (Freelance) </p>
            </div>
            <div className='year'>
              <p>2024 (March - PRESENT)</p>
            </div>
          </div>
        </div>
        <div className='capable' data-aos="flip-right">
          <div className='details'>
            <div className='workDes'>
              <p>Capable Limited</p>
              <p>Manual Tester (Temporary) </p>
            </div>
            <div className='year'>
              <p>2024 (May - June)</p>
            </div>
          </div>
        </div>
        <div className='sainsburys' data-aos="flip-right">
          <div className='details'>
            <div className='workDes'>
              <p>Sainsbury's Bagshot Road</p>
              <p>Customer Services Assistant (Part Time)</p>
            </div>
            <div className='year'>
              <p>2019 - PRESENT (5 Years)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
