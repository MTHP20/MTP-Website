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
      <h2>ABOUT SECTION - TIMELINE - EDUCATION</h2>
      <div className='Timeline'>
          <div className='aLevels' data-aos="flip-right">
          <div className='details'>

          </div>
        </div>

          <div className='uNi' data-aos="flip-right">
            

        </div>

          <div className='pResent' data-aos="flip-right">
            

        </div>
      </div>
    </section>
  );
};

export default About;
