import React, { useState, useEffect } from 'react';
import './Header.css';
import profile from '../images/profile.jpg';

const Header = () => {
  const [isContactFormVisible, setContactFormVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    const handleScroll = () => {
      if (window.scrollY > 0) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (id && link.getAttribute('href')?.includes(id)) {
              link.classList.add('active');
            }
          });
        }
      });
    }, {
      threshold: 0.7
    });

    sections.forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleContactForm = () => {
    if (isContactFormVisible) {
      setIsAnimating(true);
    } else {
      setContactFormVisible(true);
    }
  };

  const handleAnimationEnd = () => {
    if (isAnimating) {
      setContactFormVisible(false);
      setIsAnimating(false);
    }
  };
  
  return (
    <header>
      <div className='container'>
        <nav>
          <ul>
            <li><a href="#home">&nbsp;&nbsp;HOME&nbsp;&nbsp;</a></li>
            <li><a href="#about">&nbsp;&nbsp;ABOUT&nbsp;&nbsp;</a></li>
            <li><a href="#projects">&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;</a></li>
            <li><a href="#skills">&nbsp;&nbsp;SKILLS&nbsp;&nbsp;</a></li>
            <li><a href="#blog">&nbsp;&nbsp;MORE!&nbsp;&nbsp;</a></li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li><a onClick={toggleContactForm}>&nbsp;&nbsp;Contact&nbsp;&nbsp;</a></li>
            <li><a href="https://www.linkedin.com/in/mthp/">&nbsp;&nbsp;LinkedIn&nbsp;&nbsp;</a></li>
            <li><a href="http://github.com/MTHP20">&nbsp;&nbsp;GitHub&nbsp;&nbsp;</a></li>
          </ul>
        </nav>
      </div>
        <div className={`contactForm ${isContactFormVisible ? 'show' : ''} ${isAnimating ? 'hide' : ''}`} id="contactForm" onAnimationEnd={handleAnimationEnd}>
        <div className='contactTitle'>
          <img src={profile} alt="profile" id="profile" />
          <div className='caption'>
            <h2>CONTACT ME HERE!</h2>
          </div>
          <div>
            <button type="button" className="secondaryBtn" onClick={toggleContactForm}>X</button>
          </div>
        </div>
        <form>
          <input type="email" placeholder="YOUR EMAIL" />
          <textarea placeholder="SUBJECT"></textarea>
          <textarea placeholder="ENTER MESSAGE..."></textarea>
          <div>
            <button type="submit" className="primaryBtn">Send</button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
