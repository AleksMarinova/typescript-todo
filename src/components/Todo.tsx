import React from 'react';
import { ITodo } from '../interfaces';

interface Props {
    todo: ITodo, 
    deleteTodo(todoToDelete: string): void
}

const Todo = ({todo, deleteTodo}:Props) => {
    
    return (
        <div className="todo">
            <div className="content">
                <p>Todo: {todo.todoName}</p>
                <p>Deadline in {todo.days} days.</p>
            </div>
            <button onClick={() => deleteTodo(todo.todoName) }>delete</button>
        </div>
    );
}
      
export default Todo;