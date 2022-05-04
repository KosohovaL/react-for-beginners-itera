import React from 'react';
import DisplayData from './jsondata/DisplayData';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello! Json data:</p>
        <DisplayData />
      </header>
    </div>
  );
}

export default App;
