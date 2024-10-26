import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';
import { Todo } from './todoTypes';
import { AppDispatch } from '../../app/store';

const TodoForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === '') return;
    
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
    };

    dispatch(addTodo(newTodo));
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
