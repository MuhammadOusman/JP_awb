import React from 'react';
import styles from './Header.module.css'; 

function Header() {
  return (
    <header className={`${styles.header} text-center mb-4`}>
      <h1 className={styles.title}>My To-Do List</h1>
    </header>
  );
}

export default Header;