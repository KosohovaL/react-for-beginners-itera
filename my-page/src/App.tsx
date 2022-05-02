import React from 'react';
import JsonDataDisplay from './jsondata/jsondata';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello! Json data:</p>
        <JsonDataDisplay />
      </header>
    </div>
  );
}

export default App;
