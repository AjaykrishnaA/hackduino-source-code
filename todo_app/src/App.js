import React, { useState} from 'react';
import { Button } from '@material-ui/core';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Coding','Listening to lectures']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1>Hello, Ajay krishna A</h1>
      <form>
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <Button type='submit' onClick={addTodo} variant="contained" color="primary">Add To Do</Button>
      {/* <button type='submit' onClick={addTodo}>Add To Do</button> */}
      </form>
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
