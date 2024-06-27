import React, { useState } from 'react';
import Display from './components/Display';
import Keyboard from './components/Keyboard';
import './App.css';

const App = () => {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (label) => {
    
    setDisplayValue(label);
  };

  return (
    <div className="app">
      <div className="calculator">
        <Display value={displayValue} />
        <Keyboard onButtonClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default App;