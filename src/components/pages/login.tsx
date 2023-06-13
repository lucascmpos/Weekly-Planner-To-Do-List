import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./login.css";
import "../layout/Buttons/button.css";

import Button from "../layout/Buttons/Button";

import loginImage from "../../assets/login.png";
import logoImage from "../../assets/uol.png";
import logoutImage from "../../assets/Vector.png";
import iconImage from "../../assets/icon-user.png";
import passImage from "../../assets/icon-password.png";

interface StatusProps {
  type: string;
  mensagem: string;
}

const Login: React.FC = () => {
  const [loginAnim, setLoginAnim] = useState(false);
  const [passAnim, setPassAnim] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<StatusProps>({
    type: "",
    mensagem: "",
  });

  const history = useHistory();

  const loginFormAPI = {
    email: username,
    password: password,
  };

  const loginUser = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username) {
      setStatus({
        type: "error",
        mensagem: "user name needs to be filled",
      });
      return;
    }
    if (!password) {
      setStatus({
        type: "error",
        mensagem: "password needs to be filled",
      });
      return;
    }

    setIsLoading(true);

    fetch("https://latam-challenge-2.deta.dev/api/v1/users/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginFormAPI),
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((body) => {
            localStorage.setItem("token", body.token);
            localStorage.setItem("city", body.user.city);
            console.log(body);
          });
          setStatus({
            type: "success",
            mensagem: "User logged in successfully!",
          });
          setTimeout(() => {
            setIsLoading(false);
            history.push("/dashboard");
          }, 2000);
        } else {
          setStatus({
            type: "error",
            mensagem: "Wow, invalid username or password. Please, try again!",
          });
          setIsLoading(false);
          console.log("errologin");
        }
      })
      .catch((error) => {
        console.log(error);
        setStatus({
          type: "error",
          mensagem: "Error during login, please try again later.",
        });
        setIsLoading(false);
      });
  };

  return (
    <div className="body">
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
            <p
              className="stats"
              style={{ color: status.type === "success" ? "green" : "orange" }}
            >
              {status.mensagem}
            </p>
          </div>
          {isLoading && <div className="loading"></div>}
          <Button name="Log in" className="button" />
        </form>
        <div className="toWelcome">
          <Link to="/welcome" style={{ textDecoration: "none" }}>
            <img src={logoutImage} alt="Imagem 10" className="toWelcomeImage" />
            <p className="registered">
              Not registered? go to registration page clicking here.{" "}
            </p>
          </Link>
        </div>
      </section>
      <div className="imagens">
        <div className="logo">
          <a href="https://compass.uol/pt/home/">
            <img src={logoImage} alt="Imagem 2" className="logoLogin" />
          </a>
        </div>
        <div className="main-image">
          <img src={loginImage} alt="Imagem 1" />
        </div>
      </div>
    </div>
  );
};

export default Login;
