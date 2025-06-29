import React from 'react';
import styles from './CourseCard.module.css';
import { FaUsers } from 'react-icons/fa';

const CourseCard = ({ img, category, lessons, title, students, price }) => {
  return (
    <div className={styles.courseItem}>
      <div className={styles.courseThumb}>
        <a href={`/course/${title.replace(/\s+/g, '-').toLowerCase()}`}><img src={img} alt={title} /></a>
      </div>
      <div className={styles.courseInner}>
        <ul className={styles.courseMeta}>
          <li>{category}</li><li>{lessons} Lessons</li>
        </ul>
        <h3 className={styles.courseTitle}><a href={`/course/${title.replace(/\s+/g, '-').toLowerCase()}`}>{title}</a></h3>
        <div className={styles.cardInfo}>
          <div className={styles.cardUsers}><FaUsers /><span>{students} Students</span></div>
          <div className={styles.cardPrice}>${price}</div>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;