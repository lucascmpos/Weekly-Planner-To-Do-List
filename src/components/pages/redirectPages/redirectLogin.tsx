import React from "react";
import { useHistory } from "react-router-dom";

import logoImage from "../../../assets/uol.png";
import "./redirectPages.css";

const RedirectLogin = () => {
  const history = useHistory();

  setTimeout(() => {
    history.push("/login");
  }, 3000);

  return (
    <body className="redirectBody">
      <a href="https://compass.uol/pt/home/">
        <img src={logoImage} alt="Imagem 1" />
      </a>
      <div className="redirectDiv">
        <h1 className="">You are not logged in.</h1>
        <p className="textRedirect">Redirecting to login page...</p>
        <div className="loadingRedirect"></div>
      </div>
    </body>
  );
};

export default RedirectLogin;
