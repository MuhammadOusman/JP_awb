import React from 'react';
import Header from './Components/Header/Header';
import TodoForm from './Components/TodoForm/TodoForm';
import TodoList from './Components/TodoList/TodoList';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <div className={`${styles.notebook} container my-5 p-4 rounded shadow-lg`}>
        <Header />
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
