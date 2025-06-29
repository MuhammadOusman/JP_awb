import React from 'react';
import styles from './EventCard.module.css';
import { FaMapPin, FaArrowRight } from 'react-icons/fa';

const EventCard = ({ day, month, year, time, title, location }) => {
  return (
    <div className={styles.eventCard}>
      <div className={styles.content}>
        <div className={styles.contentArea}>
          <div className={styles.date}><em>{day}</em> {month}, {year}</div>
          <div className={styles.time}>{time}</div>
          <h3 className={styles.title}><a href={`/event/${title.replace(/\s+/g, '-').toLowerCase()}`}>{title}</a></h3>
          <div className={styles.location}><FaMapPin /> {location}</div>
          <a className={`arrow-link ${styles.link}`} href={`/event/${title.replace(/\s+/g, '-').toLowerCase()}`}>Find Out More <FaArrowRight /></a>
        </div>
      </div>
    </div>
  );
};
export default EventCard;