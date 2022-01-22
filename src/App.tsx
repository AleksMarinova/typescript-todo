import React, { FC,ChangeEvent, useState } from 'react';
import { ITodo } from './interfaces';
import Todo from './components/Todo';
import { nanoid } from 'nanoid';
import './App.css';

const App:FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [days, setDays] = useState<number>(0);
  const [done, setDone] = useState<boolean>(false);
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleChange = (event:ChangeEvent<HTMLInputElement>):void => {
    if (event.target.name==='todo'){
      setTodo(event.target.value);
    }
    if (event.target.name==='days'){
      setDays(Number(event.target.value));
    }
  }

  const addTodo = ():void => {
     const newTodo = {
        todoName: todo,
        days: days,
        done: done
     };
      setTodos([...todos, newTodo]);
      setTodo('');
      setDays(0);
  }

  const deleteTodo = (todoToDelete: string):void => {
      setTodos(todos.filter((todo)=>{
        return todo.todoName !== todoToDelete;
      }))
  }

  const toggleDone = (todoToToggleName: string):void => {
      setTodos(todos.map((todo)=>{
        if (todo.todoName === todoToToggleName){
          todo.done = !todo.done;
        }
        return todo;
      }))
  }

const editTodo=(todoToEditName: string, newTodoToEditName: string, newTodoToEditDays: number) => {
  setTodos(todos.map((todo)=>{
    if (todo.todoName === todoToEditName){
      todo.todoName = newTodoToEditName;
      todo.days = newTodoToEditDays;
    }
    return todo;
  }))
}

  return (
    <div className="App">
      <div className="app-input">
        <input type="text" 
               placeholder="What needs to be done?" 
               name='todo'
               value={todo}
               onChange={handleChange}/>
        <input type="number" 
                name='days'
                value={days}
                placeholder="Days for completion" 
                onChange={handleChange}/>
        <button onClick={addTodo}>Add</button>
      </div>
      <div className='todo-list'>
          
            {
              todos.map((todo:ITodo, index:number) => {
                return <Todo key={nanoid()} todo={todo} deleteTodo={deleteTodo} toggleDone={toggleDone} editTodo={editTodo}/>
              })
            }
        
      </div>
    </div>
  );
}

export default App;
