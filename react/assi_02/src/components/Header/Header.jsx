import React, { useState } from 'react';
import styles from './Header.module.css';
import { FaSearch, FaBars, FaTimes, FaAngleDown } from 'react-icons/fa';
import logo from '../../assets/images/echooling-logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          <a href="/"><img src={logo} alt="Echooling Logo" /></a>
         
        </div>
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          <ul>
            <li className={`${styles.dropdown} ${styles.menuActive}`}>
              <a href="/">Home <FaAngleDown className={styles.arrowIcon} /></a>
              <ul className={styles.subMenu}>
                <li className={styles.menuActive}><a href="/">Home One</a></li>
                <li><a href="/home-2">Home Two</a></li>
                <li><a href="/home-3">Home Three</a></li>
              </ul>
            </li>
            <li className={styles.dropdown}>
              <a href="/">Pages <FaAngleDown className={styles.arrowIcon} /></a>
              <ul className={styles.subMenu}>
                
                <li><a href="/home-2">About</a></li>
                <li><a href="/home-3">Instructor</a></li>
                <li><a href="/home-3">Profile</a></li>
                <li><a href="/home-3">Login</a></li>
                <li><a href="/home-3">Signup</a></li>
                <li><a href="/home-3">Events</a></li>
              </ul>
            </li>
            <li className={styles.dropdown}>
              <a href="/">Courses <FaAngleDown className={styles.arrowIcon} /></a>
              <ul className={styles.subMenu}>
                <li className={styles.menuActive}><a href="/">Home One</a></li>
                <li><a href="/home-2">Home Two</a></li>
                <li><a href="/home-3">Home Three</a></li>
              </ul>
            </li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div className={styles.searchbarPart}>
            <input type="text" className={styles.formInput} placeholder="Search Course" />
            <a className={styles.formButton} href="/course"><FaSearch /></a>
          </div>
        </nav>
        <div className={styles.mobileMenuToggle} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};
export default Header;