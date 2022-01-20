import React from 'react';
import { ITodo } from '../interfaces';

interface Props {
    todo: ITodo
}

const Todo = ({todo}:Props) => {
    
    return (
        <div>
            <p>{todo.todoName}</p>
            <p>{todo.days}</p>
        </div>
    );
}
      
export default Todo;