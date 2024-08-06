import React, { useState, useEffect } from 'react';
import './CV.css';
import pdf from '../images/CV.pdf';

const CV = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModalVisibility = () => {
    setModalVisible(!isModalVisible);
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
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <iframe src={pdf} title="My CV" />
          </div>
        </div>
      )}
    </section>
  );
};

export default CV;
