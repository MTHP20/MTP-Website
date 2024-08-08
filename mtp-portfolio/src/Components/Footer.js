import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer-content">
                <p>&copy; 2024 Your Company Name. All rights reserved.</p>
                <ul class="footer-links">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;

