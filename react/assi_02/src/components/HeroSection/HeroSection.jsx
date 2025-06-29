import React from 'react';
import styles from './HeroSection.module.css';
import heroBgDesktop from '../../assets/images/hero-bg-desktop.jpg';
import heroBgMobile from '../../assets/images/hero-bg-mobile.jpg';
import { FaPlay } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.overlay} container`}>
        <span className={styles.badge}>Great Quality Social life</span>
        <h2 className={styles.headline}>Discover the world of<br />possible university.</h2>
        <div className={styles.actions}>
          <a className={`${styles.admissionsBtn} react-btn-common`} href="/about">Admissions</a>
          <div className={styles.watchVideo}>
            <a className={styles.playBtn} href="#"><FaPlay /></a>
            <em>Watch Video <br />Intro</em>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;