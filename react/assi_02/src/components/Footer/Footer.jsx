import React from 'react';
import styles from './Footer.module.css';
import footerLogo from '../../assets/images/footer-logo.png';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={`${styles.footer} home-main`}>
      <div className={styles.footerTop}>
        <div className="container">
          <div className={styles.row}>
            <div className={styles.colLg3}>
              <div className={styles.footerWidget}>
                <div className={styles.footerLogo}><a href="/"><img src={footerLogo} alt="Echooling Footer Logo" /></a></div>
                <h5 className={styles.footerSubtitle}>There are course and event custom <br />post types so you can easily create and<br /> manage course, events.</h5>
                <ul className={styles.footerAddress}>
                  <li><FaPhoneAlt className={styles.icon} /><a href="tel:+(402)76244183"> +(402) 762 441 83 </a></li>
                  <li><FaEnvelope className={styles.icon} /><a href="mailto:info@echooling.com"> info@echooling.com </a></li>
                </ul>
              </div>
            </div>
            <div className={styles.colLg3}>
              <div className={styles.footerWidget}>
                <h3 className={styles.footerTitle}>About Us</h3>
                <div className={styles.footerMenu}>
                  <ul>
                    <li><a href="/about">About</a></li><li><a href="/course">Courses</a></li>
                    <li><a href="/event">Events</a></li><li><a href="/">Career</a></li>
                    <li><a href="/profile">Become a Teacher</a></li><li><a href="/contact">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.colLg3}>
              <div className={styles.footerWidget}>
                <h3 className={styles.footerTitle}>Useful Links</h3>
                <div className={styles.footerMenu}>
                  <ul>
                    <li><a href="/">Browse Library</a></li><li><a href="/">Library</a></li>
                    <li><a href="/">Partners</a></li><li><a href="/blog">News & Blog</a></li>
                    <li><a href="/">FAQ</a></li><li><a href="/">Tutorials</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.colLg3}>
              <div className={styles.footerWidget}>
                <h3 className={styles.footerTitle}>Newsletter</h3>
                <div className={styles.footerForm}>
                  <p>Get the latest Echooling news <br />delivered to you inbox</p>
                  <form action="#"><input type="email" required="" placeholder="Enter your email" /><button className={styles.formButton}><FaArrowRight /></button></form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className="container">
          <div className={styles.copyLeft}>© 2022 <a href="/">Echooling.</a> All Rights Reserved</div>
          <div className={styles.copyRight}>
            <ul className={styles.socialLinks}><li className={styles.follow}>Follow us</li><li><a href="/"><FaFacebookF /></a></li>
              <li><a href="/"><FaTwitter /></a></li><li><a href="/"><FaLinkedinIn /></a></li>
              <li><a href="/"><FaInstagram /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;