import React, { useState } from 'react';
import styles from './TodoForm.module.css';

function TodoForm({ onAddTodo }) {
    const [inputText, setInputText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText.trim()) {
            onAddTodo(inputText);
            setInputText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={`${styles.todoForm} input-group mb-4`}>
            <input
                type="text"
                className={`form-control ${styles.inputField}`}
                placeholder="Write a new task..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <button type="submit" className={`btn ${styles.addButton}`}>
                Add Task
            </button>
        </form>
    );
}

export default TodoForm;
