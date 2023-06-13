import React, { MouseEventHandler } from "react";
import "./button.css";
import "./addButton.css";
import "./delButton.css";
import "./insideButton.css";


interface ButtonProps {
  type?: "button" | "submit" | "reset";
  className: string
  onClick?: MouseEventHandler<HTMLButtonElement>;
  name: string
}


const Button: React.FC<ButtonProps> = ({type, className, onClick, name}: ButtonProps) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
    >
      <span>{name}</span>
    </button>
  );
};

export default Button;
