import React from 'react';
import './style.css';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <>
      <div className="top"></div>
      <div className="todo-app">
        <TodoList />
      </div>
    </>
  );
}
