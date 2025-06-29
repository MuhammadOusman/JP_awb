import React from 'react';
import styles from './TopBar.module.css';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={`${styles.container} container`}>
        <div className={styles.contactInfo}>
          <span><FaPhoneAlt className={styles.icon} /> <a href="tel:(+1)3344999999">(+1) 3344 999 999</a></span>
          <span><FaEnvelope className={styles.icon} /> <a href="mailto:info@reactheme.com">info@reactheme.com</a></span>
        </div>
        <div className={styles.socialIcons}>
          <a href="#"><FaFacebookF className={styles.socialIcon} /></a>
          <a href="#"><FaTwitter className={styles.socialIcon} /></a>
          <a href="#"><FaLinkedinIn className={styles.socialIcon} /></a>
          <a href="#"><FaInstagram className={styles.socialIcon} /></a>
        </div>
      </div>
    </div>
  );
};
export default TopBar;