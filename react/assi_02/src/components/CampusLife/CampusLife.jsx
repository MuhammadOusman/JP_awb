import React, { useState } from 'react';
import styles from './CampusLife.module.css';
import AccordionItem from './AccordionItem/AccordionItem';
import campusImg from '../../assets/images/campus-life.png';
import shapeImg from '../../assets/images/campus-shape.png';
import icon1 from '../../assets/images/icon-1.svg';
import icon2 from '../../assets/images/icon-2.svg';
import icon3 from '../../assets/images/icon-3.svg';
import { FaArrowRight } from 'react-icons/fa';

const CampusLife = () => {
  const accordionData = [
    { id: 1, icon: icon1, title: 'Do More, Stress Less', description: 'Why I say old chap that is spiffing he legged it in my flat easy peasy.' },
    { id: 2, icon: icon2, title: 'The Business Intelligence', description: 'Why I say old chap that is spiffing he legged it in my flat easy peasy.' },
    { id: 3, icon: icon3, title: 'System Administration', description: 'Why I say old chap that is spiffing he legged it in my flat easy peasy.' },
  ];
  return (
    <section className={`${styles.campusLife} pt---100 pb---110`}>
      <div className="container">
        <div className="section-title"><h2>Campus Life</h2></div>
        <div className={styles.row}>
          <div className={styles.accordionCol}>
            <div className={styles.aboutContent}>
              <ul>{accordionData.map(item => (<AccordionItem key={item.id} icon={item.icon} title={item.title} description={item.description} />))}</ul>
            </div>
          </div>
          <div className={styles.imageCol}>
            <div className={styles.aboutImage}><img src={campusImg} alt="Campus Life" /><img className={styles.shape1} src={shapeImg} alt="Shape" /></div>
          </div>
        </div>
        <div className={styles.bottomLink}><a className="arrow-link" href="/about"> More about Campus Life <FaArrowRight /></a></div>
      </div>
    </section>
  );
};
export default CampusLife;