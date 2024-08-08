import './CV.css';
import './Extra.css';
import pdf from '../images/CV.pdf';
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Extra.css';
import { Pagination, Navigation } from 'swiper/modules';
import img1 from '../images/spain/1.JPEG';
import img2 from '../images/spain/2.JPEG';
import img3 from '../images/spain/3.JPEG';
import img4 from '../images/spain/4.JPEG';
import img5 from '../images/spain/5.JPEG';
import img6 from '../images/spain/6.JPEG';
import img7 from '../images/spain/7.JPEG';
import img8 from '../images/spain/8.JPEG';
import img9 from '../images/spain/9.JPEG';
import img10 from '../images/spain/10.JPEG';
import img11 from '../images/spain/11.JPEG';
import img12 from '../images/spain/12.JPEG';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

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
      <div className='box'></div>
      <h1 className="header">SLIDE TO SEE MY RECENT TRIP TO BARCELONA!</h1>
      <Swiper
        slidesPerView={2.75}
        spaceBetween={15}
        loop={true}
        pagination={true}
        navigation={false}
        modules={[]}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} id='images' />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CV;