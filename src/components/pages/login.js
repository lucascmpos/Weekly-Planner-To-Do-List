import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";
import "../Buttons/button.css";
import Button from "../Buttons/Button";
import loginImage from "../../assets/login.png";
import logoImage from "../../assets/uol.png";
import iconImage from "../../assets/icon-user.png";
import passImage from "../../assets/icon-password.png";

const Login = (props) => {
  const [loginAnim, setLoginAnim] = useState("");
  const [passAnim, setPassAnim] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  const userDados = localStorage.getItem('userData')

  if(userDados === username && userDados === password ){
    navigate("/dashboard");
  }
  else{
    navigate("/login");
  }

  return (
    <body>
      <section className="forms">
        <header className="welcome">
          <h1>Welcome,</h1>
          <h2>To continue browsing safely, log in to the network.</h2>
        </header>
        <form  className="inputs">
          <div className="wrapper">
            <span className="log">Login</span>
            <label className="username">
              <input
                required
                id="username"
                type="text"
                name="username"
                className="input2"
                placeholder="user name"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
                onFocus={() => {
                  setLoginAnim(true);
                }}
                onBlur={() => {
                  setLoginAnim(false);
                }}
              />
              <img
                src={iconImage}
                alt="icone"
                id="icon"
                className={loginAnim ? "onFocus" : ""}
              />
            </label>
            <label className="password">
              <input
                required
                id="password"
                type="password"
                name="password"
                className="input2"
                placeholder="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                onFocus={() => {
                  setPassAnim(true);
                }}
                onBlur={() => {
                  setPassAnim(false);
                }}
              />
              <img
                src={passImage}
                alt="senha"
                className={passAnim ? "onFocus" : ""}
              />
            </label>
          </div>
          <Button name="Log in" className="button" />
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
