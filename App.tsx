import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import TodoForm from './features/todos/TodoForm';
import TodoList from './features/todos/TodoList';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo App with TypeScript</h1>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
