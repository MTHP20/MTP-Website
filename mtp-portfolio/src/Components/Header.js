import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className='container'>
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
            </div>
        </header>
    );
};

export default Header;
