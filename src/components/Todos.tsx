import Todo from './Todo';
import { nanoid } from 'nanoid';
import { ITodo } from '../interfaces';
import {useState, ChangeEvent, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Logout from './Logout';

const Todos =()=>{
    const [user, setUser] = useState<string | null>(null);
    const [todo, setTodo] = useState<string>('');
    const [days, setDays] = useState<number>(0);
    const [todos, setTodos] = useState<ITodo[]>([]);
    const navigate = useNavigate();

    const getFromLocalStorage = ()=>{
      const username = localStorage.getItem('User');
      if(!username){
        navigate('/');
      }
      setUser(username);
     }

    useEffect(()=>{
      getFromLocalStorage();
    }, []);

    useEffect(()=>{
      if (typeof user === 'string'){
        const parsedUser = JSON.parse(user);
        setTodos(parsedUser.todos);
      }
    }, [user]);

  const handleChange = (event:ChangeEvent<HTMLInputElement>):void => {
    event.preventDefault();
    event.stopPropagation();
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
        done: false
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
        <>
        <h1>{`${user && JSON.parse(user).username}'s todos`}</h1>
        <Logout/>
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
                return <Todo key={nanoid()} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo}/>
              })
            }
        
      </div>
      </>
    )

}

export default Todos;