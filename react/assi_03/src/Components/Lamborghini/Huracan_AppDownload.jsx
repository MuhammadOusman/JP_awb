import React from "react";
import footLogo from "../../assets/Images/foot-logo.png";
import appStore from "../../assets/Images/appStore.png";
import googlePlay from "../../assets/Images/googlePlay.png";
import appGallery from "../../assets/Images/appGallery.png";
import styles from "./Aventador_Footer.module.css"; 
const Huracan_AppDownload = () => {
  return (
    <>
      <div className={styles.div3}>
        <img src={footLogo} alt="Logo" />
        <h5>Happy Shopping</h5>
        <h6>Download App</h6>
      </div>
      <div className={styles.div4}>
        <img src={appStore} alt="Available on App Store" />
        <img src={googlePlay} alt="Available on Google Play Store" />
        <img src={appGallery} alt="Available on App Gallery" />
      </div>
    </>
  );
};

export default Huracan_AppDownload;