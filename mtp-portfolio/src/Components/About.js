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
        <div class="grid-item">I've always had a set path to study Computer Science all starting from a high interest in technology and building computers when I was younger.
          As learned throughout my course at Royal Holloway, I'd say my favourite programming language to use is Java.
          I aim to expand my expertise by learning more programming languages and code bigger projects within.
        </div>
        <div class="grid-item">However, I also enjoy coding in HTML and JavaScript with this being the programming language I've used the most.
          From personal projects like this Portfolio to university projects such as a Restaurant Management System I aspire to create a small business and start developing websites for local clients on the side.
          <br></br><i>See projects down below.</i>
        </div>
        <div class="grid-item">Along this side hustle, I'm also driven to obtain a full-time career in the Software Development or Full Stack Engineering field.
          I've also gained an interest in technology consultancy field where I would be able to utilise modules I've learnt such as IT Project Management to support companies with
          IT solutions leveraging my problem-solving acumen and dedication to deliver high-quality solutions.
        </div>
        <div class="grid-item">Outside work I enjoy playing basketball and exercising regularly at the gym to ensure activity and healthiness, listening to and playing music,
          and hopefully soon travel and explore different parts of the world
        </div>
      </div>
      <div className='box'></div>
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
