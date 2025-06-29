import React from 'react';
import styles from './AcademicCard.module.css';
import { FaArrowRight } from 'react-icons/fa';

const AcademicCard = ({ img, title }) => {
  return (
    <div className={styles.itemInner}>
      <div className={styles.icon}><img src={img} alt={title} /></div>
      <div className={styles.content}>
        <h3 className={styles.title}><a href="/course">{title}</a></h3>
        <a className={`arrow-link ${styles.link}`} href="/course">Learn More <FaArrowRight /></a>
      </div>
    </div>
  );
};
export default AcademicCard;