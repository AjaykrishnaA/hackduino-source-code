import React, { useState, useEffect } from 'react';
import './App.css';
import { FormControl, Input, IconButton } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from "firebase" ;
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';





function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data(), }))
        )
    })
   
  }, [])

  useEffect(() => {
    setUsername(prompt("Enter your name:"));
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      username:username,
      text:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    setInput('');

  }

  return (
    <div className="App">
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qoOCEls-L11Ta0tSeGrv6AHaHa%26pid%3DApi&f=1" height="90px" width="90px" alt="Messenger Icon"></img>
      <h1> Fb-messenger-clone<span role="img" aria-label="Wow">🎉🤸‍♂️✌</span></h1>
  <h2>Welcome {username}</h2>
      <form className="app_form" >
        <FormControl className="app__formControl">
          <Input className="app__input" autoFocus placeholder='Enter a message:' value={input} onChange={event=> setInput(event.target.value)} />
          <IconButton className="app__iconButton" type='submit' variant="contained" color="primary" disabled={!input} onClick={sendMessage} >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      
      <FlipMove>
        {messages.map(message =>
          <Message key={message.id} user={username} message={message.message} />
        )}
      </FlipMove>
      
    </div>
  )
}

export default App;
