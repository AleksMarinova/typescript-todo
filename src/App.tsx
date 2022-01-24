import React, { FC } from 'react';
import Todos from './components/Todos';
import Login from './components/Login';
import Register from './components/Register';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const App:FC = () => {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Todos />} />
      </Routes>
    </div>
  );
}

export default App;
