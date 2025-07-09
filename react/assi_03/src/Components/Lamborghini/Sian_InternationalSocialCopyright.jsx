import React from "react";
import { FaRegCopyright } from "react-icons/fa6";
import pak from "../../assets/Images/Pakistan.png";
import ban from "../../assets/Images/Bangladesh.png";
import sri from "../../assets/Images/Sri Lanka.png";
import myanmar from "../../assets/Images/Myanmar.png";
import nepal from "../../assets/Images/Nepal.png";
import facebook from "../../assets/Images/facebook.png";
import insta from "../../assets/Images/insta.png";
import x from "../../assets/Images/x.png";
import youtube from "../../assets/Images/youtube.png";
import blog from "../../assets/Images/blog.png";
import styles from "./Aventador_Footer.module.css"; 

const Sian_InternationalSocialCopyright = () => {
  return (
    <div className={styles.footer4}>
      <div className={styles.flagDiv}>
        <h5>Daraz International</h5>
        <p>
          <img src={pak} alt="Pakistan" /> Pakistan{" "}
          <img src={ban} alt="Bangladesh" /> Bangladesh{" "}
          <img src={sri} alt="Sri Lanka" /> Sri Lanka{" "}
          <img src={myanmar} alt="Myanmar" /> Myanmar{" "}
          <img src={nepal} alt="Nepal" /> Nepal
        </p>
      </div>
      <div className={styles.socialLinks}>
        <h5>Follow Us</h5>
        <img src={facebook} alt="Facebook" />
        <img src={x} alt="X" />
        <img src={insta} alt="Instagram" />
        <img src={youtube} alt="YouTube" />
        <img src={blog} alt="Blog" />
      </div>
      <div className={styles.copyright}>
        <FaRegCopyright /> Daraz 2025
      </div>
    </div>
  );
};

export default Sian_InternationalSocialCopyright;