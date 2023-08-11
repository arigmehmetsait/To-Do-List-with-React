import React, { useState } from 'react'
import { useTodoLayerValue } from './context/TodoContext'
import TodoList from './components/TodoList';
import './App.css'

export const App = () => {
  const [{ todos }, dispatch] = useTodoLayerValue()
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
  
    event.preventDefault()

    if(!content && content.length < 1) return;

    const newTodo = {
      id: Math.floor(Math.random()*5646),
      content,
      isCompleted: false
    };
    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });

    setContent('');
  };

  return (
    <div className='container'>
      <h1 style={{color: 'white', marginBottom:0}}>To Do List</h1>
      <form onSubmit={handleSubmit} className='todo-form'>
        <input type='text' className='todo-input' onChange={(event) => setContent(event.target.value)} value={content} />
        <button className='todo-button' >Ekle</button>
      </form>

      <TodoList todos={todos} />
    </div>
  )
};

export default App