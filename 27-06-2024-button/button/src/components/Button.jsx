import React from 'react';

//tre proprietà (props): label, onClick e className
const Button = ({ label, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

//elemento button che ho reinderezzato con la classe specifica (className) e l'evento onClick 

export default Button;