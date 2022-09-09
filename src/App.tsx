import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstTask from './components/FirstTask';
import SecondTask from './components/SecondTask';
import ThirdTask from './components/ThirdTask';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <FirstTask></FirstTask>
      <SecondTask></SecondTask>
      <ThirdTask></ThirdTask>
    </div>
  );
}

export default App;
