import React from "react";
import './button.css';
import './addButton.css'
import './delButton.css'

const Button = props => {
    return (
        <button type={props.type} className={props.className} onClick={props.onClick}>
            <span>{props.name}</span>
        </button>
    );
};

export default Button;