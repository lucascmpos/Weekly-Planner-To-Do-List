/* eslint-disable eqeqeq */
import React, { useState } from "react";
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
  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });


  const navigate = useNavigate();

  const dataUser = localStorage.getItem("userData");
  const userDados = JSON.parse(dataUser);

  const isValid = () => {
    return (
      username == userDados.firstname1 + userDados.lastname1 &&
      password == userDados.password1
    );
  };

  const loginUser = async (e) => {
    e.preventDefault();

    if(!username){
    setStatus({
      type: "error",
      mensagem: "user name needs to be filled",
    });
  return;}
    if(!password){
    setStatus({
      type: "error",
      mensagem: "password needs to be filled",
    });
    return;}
    if (isValid()) {
      setStatus({
        type: "success",
        mensagem: "User logged in successfully!",
      });

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } else {
      setStatus({
        type: "error",
        mensagem: "Wow, invalid username or password. Please, try again!",
      });
    }
  };



  return (
    <body>
      <section className="forms">
        <header className="welcome">
          <h1>Welcome,</h1>
          <h2>To continue browsing safely, log in to the network.</h2>
        </header>
        <form onSubmit={loginUser} className="inputs">
          <div className="wrapper">
            <span className="log">Login</span>
            <label className="username">
              <input
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
            <p style={{ color: status.type == "success" ? "green" : "orange" }}>
            {status.mensagem}
          </p>
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
