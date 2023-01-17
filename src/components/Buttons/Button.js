import React from "react";
import './button.css';
import './addButton.css'
import './delButton.css'

const Button = props => {
    return (
        <button type={props.type} className={props.className}>
            <span>{props.name}</span>
        </button>
    );
};

export default Button