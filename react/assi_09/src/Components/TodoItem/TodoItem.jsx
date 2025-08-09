import React, { useState } from 'react';
import { db } from '../../firebase';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import styles from './TodoItem.module.css';

function TodoItem({ todo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);

const handleToggleComplete = async () => {
    try {
        const todoRef = doc(db, 'todos', todo.id);
        await updateDoc(todoRef, {
            completed: !todo.completed
        });
    } catch (error) {
        console.error('Error updating document: ', error);
    }
};

const handleDelete = async () => {
    try {
        await deleteDoc(doc(db, 'todos', todo.id));
    } catch (error) {
        console.error('Error deleting document: ', error);
    }
};

const handleEdit = () => {
    setIsEditing(true);
};

const handleSave = async () => {
    if (editedText.trim()) {
        try {
            const todoRef = doc(db, 'todos', todo.id);
            await updateDoc(todoRef, {
                text: editedText
            });
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating document: ', error);
        }
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
    onClick={handleToggleComplete}
>
    {todo.text}
</span>
<div className={styles.buttons}>
    <button onClick={handleEdit} className={`btn btn-sm ${styles.editButton} me-2`}>
        Edit
    </button>
    <button onClick={handleDelete} className={`btn btn-sm ${styles.deleteButton}`}>
        Delete
    </button>
</div>
                </>
            )}
        </li>
    );
}

export default TodoItem;
