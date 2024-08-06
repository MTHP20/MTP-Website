import React, { useState, useEffect } from 'react';
import './CV.css';
import pdf from '../images/CV.pdf';

const CV = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isAnimating, setAnimating] = useState(false);

  const toggleModalVisibility = () => {
    if (isModalVisible) {
      setAnimating(true);
      setTimeout(() => {
        setModalVisible(false);
        setAnimating(false);
      }, 300);
    } else {
      setModalVisible(true);
    }
  };

  useEffect(() => {
    if (isModalVisible) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isModalVisible]);

  return (
    <section id="CV">
      <h1 className='cvTitle' onClick={toggleModalVisibility}>VIEW MY CV!</h1>
      {isModalVisible && (
        <div className="modalOverlay" onClick={toggleModalVisibility}>
          <div
            className={`modalContent ${isAnimating ? 'slide-out' : 'slide-in'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe src={pdf} title="My CV" />
          </div>
        </div>
      )}
    </section>
  );
};

export default CV;