
import React from 'react';
import styles from './WelcomeLMS.module.css';
import aboutImgMain from '../../assets/images/about.png'; 
import badgeImg from '../../assets/images/badge.png'; 


import { FaArrowRight, FaEnvelope } from 'react-icons/fa';

const WelcomeLMS = () => {
  return (
    <section className={`${styles.welcomeLMS} pt---10 pb---120`}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.imageCol}>
            <div className={styles.aboutImage}>
              {/* Main image */}
              <img src={aboutImgMain} alt="About Echooling" className={styles.mainAboutImage} />
              
              {/* College Badge, positioned absolutely */}
              <img className={styles.collegeBadge} src={badgeImg} alt="College Badge" />

              {/* These divs will be styled with pseudo-elements or background images in CSS for dots/shapes */}
              <div className={styles.shapeDots1}></div> {/* Top left dots */}
              <div className={styles.shapeDots2}></div> {/* Bottom right dots */}
              <div className={styles.shapeCircle}></div> {/* Bottom right circle */}
            </div>
          </div>
          <div className={styles.contentCol}>
            <div className={styles.aboutContent}>
              <h2 className={styles.aboutTitle}>Welcome to <br /> <em>Echooling LMS Platform</em></h2>
              <p className={styles.aboutParagraph}>Education is both the act of teaching knowledge to others and<br /> the act of receiving knowledge from someone else.</p>
              <p className={styles.aboutParagraph2}>Have questions? <a href="/"> Get Free Guide </a></p>
              <p className={styles.paragraphBottom}>Education also refers to the knowledge received through schooling instruction <br />and to the institution of teaching as a whole. The main purpose of education <br />is the integral development of a person.</p>
              <ul className={styles.actionList}>
                <li>
                  <a className={`arrow-link ${styles.readMoreBtn}`} href="/about">
                    Read More <FaArrowRight />
                  </a>
                </li>
                <li className={styles.lastLi}>
                  <em>Get Support</em>
                  <a href="mailto:support@react.com"><FaEnvelope className={styles.mailIcon} /> support@react.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeLMS;