import React, { useState } from 'react';
import styles from './AccordionItem.module.css';
import { FaArrowRight, FaPlus } from 'react-icons/fa';

const AccordionItem = ({ icon, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <li className={styles.accordionItem}>
      <div className={styles.header} onClick={toggleAccordion}>
        <div className={styles.icon}><img src={icon} alt="Icon" /></div>
        <div className={styles.text}><h4>{title}</h4></div>
        <button className={styles.toggleBtn}><FaPlus className={`${styles.plusIcon} ${isOpen ? styles.rotate : ''}`} /></button>
      </div>
      {isOpen && (<div className={styles.body}><p>{description}</p><a href="/" className={`arrow-link ${styles.readMore}`}>Learn More <FaArrowRight /></a></div>)}
    </li>
  );
};
export default AccordionItem;