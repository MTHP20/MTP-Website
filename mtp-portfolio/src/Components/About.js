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
        <div class="grid-item">
          I've always had a strong interest in technology, which began with building computers when I was younger.
          This passion naturally led me to study Computer Science at Royal Holloway, where I discovered that Java is my favorite programming language.
          I aim to further expand my expertise by learning additional programming languages and taking on more ambitious projects.
        </div>
        <div class="grid-item">I also enjoy coding in HTML and JavaScript, which are the programming languages I've used the most. From personal projects like this portfolio to university projects such as a Restaurant Management System,
          I've developed a passion for web development. I aspire to create a small business and start developing websites for local clients on the side.
          <br></br><i>See projects down below.</i>
        </div>
        <div class="grid-item">In addition to my side hustle, I'm also committed to pursuing a full-time career in Software Development or Full Stack Engineering.
          I've developed a strong interest in technology consultancy, where I can apply knowledge from modules like IT Project Management to help companies with IT solutions.
          I aim to leverage my problem-solving skills and dedication to deliver high-quality results in this field.
        </div>
        <div class="grid-item">Outside of work, I enjoy staying active by playing basketball and exercising regularly at the gym. I also have a passion for music, both listening to and playing it.
          In the near future, I hope to travel and explore different parts of the world.
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
