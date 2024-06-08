import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className='container'>
                <nav>
                    <ul>
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#projects">PROJECTS</a></li>
                        <li><a href="#skills">SKILLS</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                        <li><a href="#blog">BLOG</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
