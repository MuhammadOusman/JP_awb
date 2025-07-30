import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../assets/IMAGES/ss.jpeg';
import img2 from '../assets/IMAGES/Slider-1-IMG.webp';

const SliderComponent = () => {
  return (
    <div style={{ margin: '20px', width: 'calc(100% - 40px)' }}>
      <Carousel interval={3000} controls={true} indicators={true} fade={true}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
            style={{
              height: '200px',
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
            style={{
              height: '200px',
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SliderComponent;
