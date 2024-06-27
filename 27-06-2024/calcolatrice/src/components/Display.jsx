import React from 'react';
import './Display.css';

const Display = ({ value }) => { //accetta la prop 'value' // Mostra il valore passato come prop
    return (
        <div className="display">
        {value} 
        </div>
    );
};

export default Display;