import React, { useState } from "react";
import styles from "./Cayman.module.css";
import { Container } from "react-bootstrap";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/Images/logo.png";

const Cayman = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className={styles.wrapper}>
      <Container fluid>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          {showMenu ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`${styles.nav1} ${showMenu ? styles.showMenu : ""}`}>
          <span>SAVE MORE ON APP</span>
          <span>SELL ON DARAZ</span>
          <span>HELP & SUPPORT</span>
          <span>LOGIN</span>
          <span>SIGN UP</span>
          <span className={styles.urdu}>زبان تبدیل کریں</span>
        </div>

        <div className={styles.stickyWrapper}>
          <div className={styles.nav2}>
            <img src={logo} alt="Daraz Logo" className={styles.logo} />
            <div className={styles.center}>
              <input
                type="text"
                placeholder="Search in Daraz"
                className={styles.searchInput}
              />
              <div className={styles.searchBtn}>
                <FaSearch />
              </div>
              <div className={styles.cartBox}>
                <FaShoppingCart className={styles.cartIcon} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cayman;


