import logo from './logo.svg';
import React, { useState } from "react"
import './App.css';

function App() {
  const [name ,setName] = useState("Mithila");
  const changeName = () => {
    setName("Koustubh");
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Use State Hook Practice
        </p>
       <div>
         <p>My Name is : {name}</p>
         <button onClick = {changeName}> ClickMe </button>
       </div>
      </header>
    </div>
  );
}

export default App;
