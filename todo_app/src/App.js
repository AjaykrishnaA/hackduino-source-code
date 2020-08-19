import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
  //this code here... fires when app.js loads
  db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
    setTodos(snapshot.docs.map(doc => doc.data().text))
  })
  }, [])
  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      text : input,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setTodos([...todos, input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1>Hello Ajay krishna A,</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo:</InputLabel>
          <input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} type='submit' onClick={addTodo} variant="contained" color="primary">Add To Do</Button>
        {/* <button type='submit' onClick={addTodo}>Add To Do</button> */}
      </form>
      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
          //<li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
