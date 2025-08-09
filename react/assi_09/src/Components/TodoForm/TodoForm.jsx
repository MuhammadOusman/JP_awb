import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import styles from './TodoForm.module.css';

const TodoForm = () => {
  const [value, setValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    try {
      await addDoc(collection(db, 'todos'), {
        text: value,
        completed: false,
        createdAt: serverTimestamp()
      });
      setValue('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.todoForm}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new todo..."
        className={styles.todoInput}
      />
      <button type="submit" className={styles.todoButton}>
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
