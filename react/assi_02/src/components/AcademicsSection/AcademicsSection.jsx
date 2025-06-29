import React from 'react';
import styles from './AcademicsSection.module.css';
import AcademicCard from './AcademicCard/AcademicCard';
import scienceImg from '../../assets/images/academic-1.png';
import innovativeImg from '../../assets/images/academic-2.png';
import cloudStorageImg from '../../assets/images/academic-3.png';
import onlineEducationImg from '../../assets/images/academic-4.png';

const AcademicsSection = () => {
  const academicData = [
    { id: 1, img: scienceImg, title: "Let’s Talk Science" },
    { id: 2, img: innovativeImg, title: "Innovative Courses" },
    { id: 3, img: cloudStorageImg, title: "Cloud Storage" },
    { id: 4, img: onlineEducationImg, title: "Online Education" },
  ];
  return (
    <section className={`${styles.academicsSection} pt---100 pb---70`}>
      <div className="container">
        <div className="section-title"><h2>Academics</h2></div>
        <div className={styles.cardGrid}>
          {academicData.map(card => (<AcademicCard key={card.id} img={card.img} title={card.title} />))}
        </div>
      </div>
    </section>
  );
};
export default AcademicsSection;