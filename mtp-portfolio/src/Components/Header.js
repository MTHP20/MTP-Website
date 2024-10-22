import React, { useState, useEffect } from 'react';
import './Header.css';
import profile from '../images/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const [isContactFormVisible, setContactFormVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

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
      let activeId = null;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeId = entry.target.getAttribute('id');
        }
      });

      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href) {
          const id = href.replace('#', '');
          if (id === activeId) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        }
      });
    }, {
      threshold: 0.5
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

  const handleSubmit = (e) => {
    e.preventDefault();

    window.Email.send({
      Host: "smtp.yourisp.com",
      Username: "your_email@example.com",
      Password: "your_email_password",
      To: 'recipient@example.com',
      From: email,
      Subject: subject,
      Body: message,
    }).then(
      message => alert(message)
    );

    setEmail('');
    setSubject('');
    setMessage('');
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
            <li><a href="#CV">&nbsp;&nbsp;CV&nbsp;&nbsp;</a></li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <a
                onClick={toggleContactForm}
                className={isContactFormVisible ? 'contact-active' : ''}
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mthp/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="http://github.com/MTHP20">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
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
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className='subject'
            placeholder="SUBJECT"
            maxLength="25"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <textarea
            className='message'
            placeholder="ENTER MESSAGE..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <div>
            <button type="submit" className="primaryBtn">SEND</button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
