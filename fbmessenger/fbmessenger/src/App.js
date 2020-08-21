import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('')
  // console.log(input);
  return (
    <div className="App">
      <input value={input} onChange={event=> setInput(event.target.value)} />
      <button>Send</button>
    </div>
  );
}

export default App;
