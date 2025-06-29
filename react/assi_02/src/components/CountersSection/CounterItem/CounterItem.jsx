import React, { useState, useEffect, useRef } from 'react';
import styles from './CounterItem.module.css';

const CounterItem = ({ count, title1, title2, learners }) => {
  const [currentCount, setCurrentCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          let start = 0;
          const duration = 2000;
          const increment = count / (duration / 16);
          const animateCount = () => {
            start += increment;
            if (start < count) { setCurrentCount(Math.ceil(start)); requestAnimationFrame(animateCount); }
            else { setCurrentCount(count); hasAnimated.current = true; }
          };
          animateCount();
        }
      },
      { threshold: 0.5, }
    );
    if (ref.current) { observer.observe(ref.current); }
    return () => { if (ref.current) { observer.unobserve(ref.current); } };
  }, [count]);

  return (
    <div className={styles.countContent} ref={ref}>
      <p className={styles.paragraph}>{title1} <br />{title2}</p>
      <h3 className={styles.title}><span className="counter">{currentCount}</span></h3>
      <p className={styles.paragraph2}>{learners}</p>
    </div>
  );
};
export default CounterItem;