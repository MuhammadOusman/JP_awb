import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import TodoItem from './../TodoItem/TodoItem';
import styles from './TodoList.module.css';

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'todos'), orderBy('createdAt'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const todosData = [];
            querySnapshot.forEach((doc) => {
                todosData.push({ id: doc.id, ...doc.data() });
            });
            setTodos(todosData);
        });

        return () => unsubscribe();
    }, []);

    return (
        <ul className={`${styles.todoList} list-unstyled`}>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                />
            ))}
        </ul>
    );
}

export default TodoList;
