import React from 'react';
import { ITodo } from '../interfaces';

interface Props {
    todo: ITodo, 
    deleteTodo(todoToDelete: string): void,
    toggleDone(todoToToggle: string): void
}

const Todo = ({todo, deleteTodo, toggleDone}:Props) => {
    
    return (
        <div className={todo.done ? 'todo done' : 'todo'}>
            <div className="content" onClick={(e)=>toggleDone(todo.todoName)} >
                <p>Todo: {todo.todoName}</p>
                <p>Deadline in {todo.days} days.</p>
            </div>
            <button onClick={(e) => deleteTodo(todo.todoName) }>delete</button>
            <button>edit</button>
        </div>
    );
}
      
export default Todo;