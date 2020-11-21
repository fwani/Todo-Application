import React from 'react';
import styles from './TodoList.module.css'
import TodoListItem from './TodoListItem';

const TodoList = ({todos, onRemove, onToggle}) => {
    return (
        <div className={styles.TodoList}>
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
    );
};

export default TodoList;