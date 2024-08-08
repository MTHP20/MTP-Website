import React, { useState, useEffect } from 'react';
import { toggleContactForm } from './Header.js';
import './Footer.css';

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer-content">
                <div class="company">
                    <p>&copy; 2024 MTP</p>
                    <ul class="footer-links">
                    <p>Massive Shout Out to <a href="https://www.seanhalpin.xyz/" class="footer-link"><i>Seán Halpin</i></a><br></br>for the Inspiration of this website</p>
                    </ul>
                </div>
                <div class="elsewhere">
                    <p>ELSEWHERE</p>
                    <ul class="footer-links">
                    <p><a href="https://www.linkedin.com/in/mthp/" class="footer-link">LinkedIn</a></p>
                    <p><a href="https://github.com/MTHP20" class="footer-link">GitHub</a></p>
                    <p><a href="#CV" class="footer-link">CV</a></p>
                    </ul>
                </div>
                <div class="contact">
                    <p>CONTACT</p>
                    <ul class="footer-links">
                    <p>MTPBUSINESS20@GMAIL.COM</p>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

