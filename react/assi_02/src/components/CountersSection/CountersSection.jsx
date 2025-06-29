import React, { useState, useEffect, useRef } from 'react';
import styles from './CountersSection.module.css';
import CounterItem from './CounterItem/CounterItem';

const CountersSection = () => {
  const counters = [
    { id: 1, count: 1478, title1: 'Successfully', title2: 'Trained', learners: 'Enrolled Learners' },
    { id: 2, count: 1731, title1: 'Successfully', title2: 'Trained', learners: 'Enrolled Learners' },
    { id: 3, count: 280, title1: 'Successfully', title2: 'Trained', learners: 'Enrolled Learners' },
    { id: 4, count: 1045, title1: 'Successfully', title2: 'Trained', learners: 'Enrolled Learners' },
  ];
  return (
    <section className={`${styles.countersSection} pb---110`}>
      <div className={`${styles.container} container`}>
        <div className={styles.row}>
          <div className={styles.countersGrid}>
            {counters.map(counter => (<CounterItem key={counter.id} count={counter.count} title1={counter.title1} title2={counter.title2} learners={counter.learners} />))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CountersSection;