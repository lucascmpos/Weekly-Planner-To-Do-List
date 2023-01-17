import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import loginImage from "../../assets/login.png";
import logoImage from "../../assets/uol.png";
import iconImage from "../../assets/icon-user.png";
import passImage from "../../assets/icon-password.png";

const Login = (props) => {
  const [input1, setInput1] = useState(false);
  const [input2, setInput2] = useState(false);

  return (
    <body>
      <section className="forms">
        <header className="welcome">
          <h1>Welcome,</h1>
          <h2>To continue browsing safely, log in to the network.</h2>
        </header>
        <form className="inputs">
          <div className="wrapper">
            <span className="log">Login</span>
            <label className="username">
              <input
                type="text"
                name="username1"
                className="input2"
                placeholder="user name"
                onFocus={() => {
                  setInput1(true);
                }}
                onBlur={() => {
                  setInput1(false);
                }}
              />
              <img
                src={iconImage}
                alt="icone"
                id="icon"
                className={input1 ? "onFocus" : ""}
              />
            </label>
            <label className="password">
              <input
                type="password"
                name="password3"
                className="input2"
                placeholder="password"
                onFocus={() => {
                  setInput2(true);
                }}
                onBlur={() => {
                  setInput2(false);
                }}
              />
              <img
                src={passImage}
                alt="senha"
                className={input2 ? "onFocus" : ""}
              />
            </label>
          </div>
          <Button name="Log in" />
        </form>
      </section>
      <div className="imagens">
        <div className="logo">
          <img src={logoImage} alt="Imagem 2" />
        </div>
        <div className="main-image">
          <img src={loginImage} alt="Imagem 1" />
        </div>
      </div>
    </body>
  );
};

export default Login;
