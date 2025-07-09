import React from "react";
import pay1 from "../../assets/Images/pay1.png";
import pay2 from "../../assets/Images/pay2.png";
import pay3 from "../../assets/Images/pay3.png";
import pay4 from "../../assets/Images/pay4.png";
import pay5 from "../../assets/Images/pay5.png";
import pay6 from "../../assets/Images/pay6.png";
import pay7 from "../../assets/Images/pay7.png";
import pay8 from "../../assets/Images/pay8.png";
import verify1 from "../../assets/Images/verify1.png";
import styles from "./Aventador_Footer.module.css"; 

const Centenario_PaymentsVerified = () => {
  return (
    <div className={styles.footer2}>
      <div className={styles["foot2-div1"]}>
        <h5>Payment Methods</h5>
        <img src={pay1} alt="Payment method" />
        <img src={pay2} alt="Payment method" />
        <img src={pay3} alt="Payment method" />
        <img src={pay4} alt="Payment method" />
        <img src={pay5} alt="Payment method" />
        <img src={pay6} alt="Payment method" />
        <img src={pay7} alt="Payment method" />
        <img src={pay8} alt="Payment method" />
      </div>
      <div className={styles["foot2-div2"]}>
        <h5>Verified By</h5>
        <img src={verify1} alt="Verified By" />
      </div>
    </div>
  );
};

export default Centenario_PaymentsVerified;