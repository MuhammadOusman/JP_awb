import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../../assets/Images/slide-1.webp";
import slide2 from "../../assets/Images/slide-2.webp";
import slide3 from "../../assets/Images/slide-3.webp";
import slide4 from "../../assets/Images/slide-4.webp";
import slide5 from "../../assets/Images/slide-5.webp";
import slide6 from "../../assets/Images/slide-6.webp";
import styles from "./G_Wagon_Carousel.module.css";

const G_Wagon_Carousel = () => {
  return (
    <div className={styles["slide-container"]}>
      <Carousel fade>
        <Carousel.Item>
          <img src={slide1} alt="First slide" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={slide2} alt="Second slide" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={slide3} alt="Third slide" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={slide4} alt="Fourth slide" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={slide5} alt="Fifth slide" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={slide6} alt="Sixth slide" className="d-block w-100" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default G_Wagon_Carousel;