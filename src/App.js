import React from 'react';
import './App.css';
import {InputComponent} from "./components/InputComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <InputComponent defaultValue={'type your name'}/>
      </header>
    </div>
  )
}

export default App;
