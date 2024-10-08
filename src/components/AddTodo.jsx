import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/TodoSlice';
import SearchBar from './SearchBar'
import './style.scss';
import TodoList from './TodoList';


const AddTodo = () => {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo(''); // Очищает поле ввода
    }
  };

  return (
    <div className='wrapper'>
      <div className="wrapper__content">
        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="30" viewBox="0 0 41 30" fill="none"><path d="M5.125 2C5.125 0.89543 6.04282 0 7.175 0H38.95C40.0822 0 41 0.895431 41 2V4C41 5.10457 40.0822 6 38.95 6H7.175C6.04282 6 5.125 5.10457 5.125 4V2Z" fill="#444444"></path><path d="M0 26C0 24.8954 0.917816 24 2.05 24H33.825C34.9572 24 35.875 24.8954 35.875 26V28C35.875 29.1046 34.9572 30 33.825 30H2.05C0.917816 30 0 29.1046 0 28V26Z" fill="#444444"></path><path d="M0 14C0 12.8954 0.917816 12 2.05 12H38.95C40.0822 12 41 12.8954 41 14V16C41 17.1046 40.0822 18 38.95 18H2.05C0.917817 18 0 17.1046 0 16V14Z" fill="#222222"></path></svg>
        <SearchBar />
        <input className='wrapper__content-inp'
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new task"
        />
        <button className='wrapper__content-btn' onClick={handleAddTodo}>Add Todo</button>
      </div>
      <TodoList />
    </div>
  );
};

export default AddTodo;
