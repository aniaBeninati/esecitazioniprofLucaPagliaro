import React from 'react';
import './Button.css';

const Button = ({ label, onClick }) => { //le props 'label' e 'onClick'
    return (
        
        //la funzione onClick passando la label del bottone
        <button className="button" onClick={() => onClick(label)}>
        {label}
        </button>
    );
};

export default Button;