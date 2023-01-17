import React from "react";
import './button.css';

const Button = props => {
    return (
        <button type="submit" className="button">
            <span>{props.name}</span>
        </button>
    );
};

export default Button