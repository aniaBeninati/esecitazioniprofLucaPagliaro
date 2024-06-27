import React from 'react';
import Button from './Button';
import './Keyboard.css';

const buttons = [ // qui riporto i pulsanti della tastiera, sono rappresentati come stringhe per i simboli speciali
    'AC', '+/-', '%', '/', 
    7, 8, 9, 'X', 
    4, 5, 6, '-', 
    1, 2, 3, '+', 
    'Reset', 0, '.', '='
];

const Keyboard = ({ onButtonClick }) => { //prop chiamata onButtonClick, per gestire l'evento del pulsante
    return (
        <div className="keyboard">
        {buttons.map((label, index) => (
            <Button key={index} label={label} onClick={onButtonClick} />
        ))}
        </div>
    );
};

export default Keyboard;


//l'evento onClick viene inoltrato alla funzione onButtonClick passata come prop al componente Button.