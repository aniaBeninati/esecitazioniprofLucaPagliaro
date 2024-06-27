import React, { useState } from 'react';
import Button from './Button';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);


  const increment = () => {
    setCount(count + 1);
  };

  
  const decrement = () => {
    setCount(count - 1);
  };

 
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h1>{count}</h1>
      <div className="buttons">
        <Button label="-" onClick={decrement} className="button button-decrement" />
        <Button label="Reset" onClick={reset} className="button button-reset" />
        <Button label="+" onClick={increment} className="button button-increment" />
      </div>
    </div>
  );
};

export default Counter;