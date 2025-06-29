import React from 'react';
import styles from './BlogCard.module.css';
import { FaUser } from 'react-icons/fa';

const BlogCard = ({ img, date, category, title, author }) => {
  return (
    <div className={styles.blogCard}>
      <div className={styles.blogThumb}>
        <a href={`/blog/${title.replace(/\s+/g, '-').toLowerCase()}`}><img src={img} alt={title} /></a>
        <em className={styles.bDate}>{date}</em>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.contentArea}>
          <span className={styles.cardDate}>{category}</span>
          <h3 className={styles.cardTitle}><a href={`/blog/${title.replace(/\s+/g, '-').toLowerCase()}`}>{title}</a></h3>
        </div>
        <div className={styles.cardInfo}>
          <div className={styles.cardAuthor}><FaUser /><span>{author}</span></div>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;