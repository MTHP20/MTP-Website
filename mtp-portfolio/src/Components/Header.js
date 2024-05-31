import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Your Name</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#home">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
