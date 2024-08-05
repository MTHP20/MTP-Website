import React, { useEffect } from 'react';
import './Header.css';

const Header = () => {
  useEffect(() => {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    const handleScroll = () => {
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(id)) {
              link.classList.add('active');
            }
          });
        }
      });
    }, {
      threshold: 0.7 // Adjust this value based on when you want the section to be considered "in view"
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
            <li><a href="#contact">&nbsp;&nbsp;Contact&nbsp;&nbsp;</a></li>
            <li><a href="https://www.linkedin.com/in/mthp/">&nbsp;&nbsp;LinkedIn&nbsp;&nbsp;</a></li>
            <li><a href="http://github.com/MTHP20">&nbsp;&nbsp;GitHub&nbsp;&nbsp;</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;