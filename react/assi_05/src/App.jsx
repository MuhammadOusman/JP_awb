import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import TodoForm from './Components/TodoForm/TodoForm';
import TodoList from './Components/TodoList/TodoList';
import styles from './App.module.css';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (text.trim() === '') {
      alert('Todo cannot be empty!');
      return;
    }
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const updateTodo = (id, newText) => {
    if (newText.trim() === '') {
      alert('Todo cannot be empty!');
      return;
    }
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className={styles.appContainer}>
      <div className={`${styles.notebook} container my-5 p-4 rounded shadow-lg`}>
        <Header />
        <TodoForm onAddTodo={addTodo} />
        {todos.length === 0 ? (
          <p className="text-center text-muted mt-4">No tasks yet! Add a new one above.</p>
        ) : (
          <TodoList
            todos={todos}
            onDeleteTodo={deleteTodo}
            onToggleComplete={toggleComplete}
            onUpdateTodo={updateTodo}
          />
        )}
      </div>
    </div>
  );
}

export default App;
