import React from "react";
import qr from "../../assets/Images/qr.svg";
import apple from "../../assets/Images/apple.svg";
import playStore from "../../assets/Images/playStore.svg";
import shipping from "../../assets/Images/shipping.webp";
import voucher from "../../assets/Images/voucher.webp";
import orangeLogo from "../../assets/Images/orangeLogo.png";
import styles from "./Cybertruck_AppCard.module.css";

const Cybertruck_AppCard = () => {
  return (
    <div className={styles["card-container"]}>
      <div className={styles.logoImg}>
        <img src={orangeLogo} alt="Logo" />
        <h6>Try Daraz App</h6>
      </div>
      <div className={styles.cardBox}>
        <div className={styles["con-card-box-1"]}>
          <p className={styles.rating}>★ 4.8 Rated</p>
          <h5 className={styles.title}>Download the App now</h5>
          <div className={styles.benefits}>
            <div className={styles.conCardicon}>
              <img src={shipping} className="icon" alt="shippingIcon" />
              <img src={voucher} className="icon" alt="voucherIcon" />
            </div>
            <div className={styles.conCardiconP}>
              <p>Free Shipping</p>
              <p>Exclusive Vouchers</p>
            </div>
          </div>
        </div>
        <div className={styles.qrBox}>
          <img src={qr} alt="QR" />
          <div className={styles.storeLinks}>
            <button>
              <img src={apple} alt="App Store" />
              <p>App Store</p>
            </button>
            <button>
              <img src={playStore} alt="Google Play" />
              <p>Google Play</p>
            </button>
          </div>
        </div>
        <p className={styles.footerText}>Download the App Now!</p>
      </div>
    </div>
  );
};

export default Cybertruck_AppCard;