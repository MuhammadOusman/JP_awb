import React from 'react';
import TodoItem from './../TodoItem/TodoItem';
import styles from './TodoList.module.css';

function TodoList({ todos, onDeleteTodo, onToggleComplete, onUpdateTodo }) {
    return (
        <ul className={`${styles.todoList} list-unstyled`}>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onDeleteTodo={onDeleteTodo}
                    onToggleComplete={onToggleComplete}
                    onUpdateTodo={onUpdateTodo}
                />
            ))}
        </ul>
    );
}

export default TodoList;
