import React, { useState } from 'react';
import styles from './TodoItem.module.css';

function TodoItem({ todo, onDeleteTodo, onToggleComplete, onUpdateTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        if (editedText.trim()) {
            onUpdateTodo(todo.id, editedText);
            setIsEditing(false);
        } else {
            alert('Todo cannot be empty!');
        }
    };

    const handleCancelEdit = () => {
        setEditedText(todo.text);
        setIsEditing(false);
    };

    return (
        <li className={`${styles.todoItem} d-flex align-items-center justify-content-between p-3 mb-3`}>
            {isEditing ? (
                <div className="flex-grow-1 me-2 d-flex align-items-center">
                    <input
                        type="text"
                        className={`form-control ${styles.editInput}`}
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                handleSave();
                            }
                        }}
                    />
                    <button onClick={handleSave} className={`btn btn-sm ${styles.saveButton} ms-2`}>
                        Save
                    </button>
                    <button onClick={handleCancelEdit} className={`btn btn-sm ${styles.cancelButton} ms-1`}>
                        Cancel
                    </button>
                </div>
            ) : (
                <>
                    <span
                        className={`${styles.todoText} ${todo.completed ? styles.completed : ''} flex-grow-1`}
                        onClick={() => onToggleComplete(todo.id)}
                    >
                        {todo.text}
                    </span>
                    <div className={styles.buttons}>
                        <button onClick={handleEdit} className={`btn btn-sm ${styles.editButton} me-2`}>
                            Edit
                        </button>
                        <button onClick={() => onDeleteTodo(todo.id)} className={`btn btn-sm ${styles.deleteButton}`}>
                            Delete
                        </button>
                    </div>
                </>
            )}
        </li>
    );
}

export default TodoItem;
