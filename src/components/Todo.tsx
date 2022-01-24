import React, { useState } from 'react';
import { ITodo } from '../interfaces';

interface Props {
    todo: ITodo, 
    deleteTodo(todoToDelete: string): void,
    editTodo(todoToEditName: string, newTodoToEditName: string, newTodoToEditDays: number): void
}

const Todo = ({todo, deleteTodo, editTodo}:Props) => {
    const [done, setDone] = useState<boolean>(false);
    const [editable, setEditable] = useState(false);
    const [newTodoName, setNewTodoName] = useState(todo.todoName);
    const [newTodoDays, setNewTodoDays] = useState(todo.days);

    const toggleDone = ():void => {
        setDone(!done);
    }

    const handleEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        setEditable(true);
        editTodo(todo.todoName, newTodoName, newTodoDays);
        setEditable(false);
    }

    const render = () => {
        if (editable===false) {
            return (
                <>
                 <div className="content" onClick={(e)=>toggleDone()} >
                <p>Todo: {todo.todoName}</p>
                <p>Deadline in {todo.days} days.</p>
                     </div>
                    <button onClick={(e) => deleteTodo(todo.todoName) }>delete</button>
                    <button  onClick={() => setEditable(true)}>edit</button>
                </>
            )
        }
        else {
            return (
                <>
                <div className="content">
                <input type="text" name="todo" value={newTodoName} onChange={(e)=>{setNewTodoName(e.target.value)}}/>
                <input type="number" name="days" value={newTodoDays} onChange={(e)=>{setNewTodoDays(Number(e.target.value))}}/>
                </div>
                <button onClick={(e) => handleEdit(e)}>save</button>
                <button onClick={(e) => setEditable(false)}>cancel</button>
                </>
               
            )
        }
    }

    return (
        <div className={done ? "todo done": "todo"}>
            {render()}
        </div>
    )

}

export default Todo;