import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from '../redux/TodoSlice';

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    if (editText.trim()) {
      dispatch(editTodo({ id: todo.id, newText: editText }));
      setIsEditing(false);
    }
  };

  return (
    <li className='wrapper__content-todoItem'>
      {isEditing ? (
        <div>
          <input className='todoItem__inp'
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button className='todoItem__position-content' onClick={handleEdit}>Save</button>
          <button className='todoItem__position-content todoItem__position-between' onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div >
          <span >{todo.text}</span>
          <button className='todoItem__position' onClick={() => setIsEditing(true)}>Edit</button>
          <button className='todoItem__position todoItem__position-delete' onClick={handleDelete}>Delete</button>
        </div>
      )}

    </li>
  );
};

export default TodoItem;
