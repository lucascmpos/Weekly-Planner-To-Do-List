import React, { Fragment, useState } from "react";
import "./welcome.css";
import Button from "../Buttons/Button";
import loginImage from "../../assets/login.png";
import logoImage from "../../assets/uol.png";
import { useNavigate } from "react-router-dom";

const Welcome = (props) => {
  const [user, setUser] = useState({});

  const [status, setStatus] = useState({});

  const navigate = useNavigate();

  const valueInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const addUser = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const saveDataForm = true;

    if (saveDataForm) {
      setStatus({
        type: "success",
        mensagem: "Usuário cadastrado com sucesso!",
      });

      localStorage.setItem("userData", JSON.stringify(user));

      setUser({});

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } else {
      setStatus({
        type: "error",
        mensagem: "Erro: Usuário não cadastrado com sucesso!",
      });

      setTimeout(() => {
        navigate("/welcome");
      }, 1000);
    }
  };

  function validate() {
    if (!user.firstname1)
      return setStatus({
        type: "error",
        mensagem: "Erro: Necessário preencher o campo first name!",
      });
    if (!user.lastname1)
      return setStatus({
        type: "error",
        mensagem: "Erro: Necessário preencher o campo last name!",
      });
    if (!user.birthdate1)
      return setStatus({
        type: "error",
        mensagem: "Erro: Necessário preencher o campo birth!",
      });
    if (!user.country1)
      return setStatus({
        type: "error",
        mensagem: "Erro: Necessário preencher o campo country!",
      });
    if (!user.city1)
      return setStatus({
        type: "error",
        mensagem: "Erro: Necessário preencher o campo city!",
      });
    if (!user.email1)
      return setStatus({
        type: "error",
        mensagem: "Erro: Necessário preencher o campo email!",
      });
    if (!user.password1)
      return setStatus({
        type: "error",
        mensagem: "Erro: Necessário preencher o campo senha!",
      });
    if (!user.password2)
      return setStatus({
        type: "error",
        mensagem: "Erro: Necessário preencher o campo de confirmar a senha!",
      });

    return true;
  }

  return (
    <Fragment>
      <body>
        <section className="forms">
          <header className="welcome">
            <h1> Welcome, </h1> <h2> Please register to continue </h2>{" "}
          </header>{" "}
          {status.type === "success" ? (
            <p
              style={{
                color: "green",
              }}
            >
              {" "}
              {status.mensagem}{" "}
            </p>
          ) : (
            ""
          )}{" "}
          {status.type === "error" ? (
            <p
              style={{
                color: "#ff0000",
              }}
            >
              {" "}
              {status.mensagem}{" "}
            </p>
          ) : (
            ""
          )}{" "}
          <form
            className="inputs"
            onSubmit={addUser}
          >
            <div className="wrapper">
              <label className="labelfirstname">
                <span> first name </span>{" "}
                <input
                  className="first"
                  type="text"
                  name="firstname1"
                  placeholder=" Your first name"
                  value={user.firstname1}
                  onChange={valueInput}
                />{" "}
              </label>{" "}
              <label>
                <span> last name </span>{" "}
                <input
                  className="last"
                  type="text"
                  name="lastname1"
                  placeholder=" Your last name"
                  value={user.lastname1}
                  onChange={valueInput}
                />{" "}
              </label>
              <label>
                <span> birth date </span>{" "}
                <input
                  className="birth"
                  type="date"
                  name="birthdate1"
                  placeholder=" MM/DD/YY"
                  onChange={valueInput}
                  value={user.birthdate1}
                />{" "}
              </label>
              <label>
                <span> Country </span>{" "}
                <input
                  className="country"
                  type="text"
                  name="country1"
                  placeholder="Your Country"
                  onChange={valueInput}
                  value={user.country1}
                />{" "}
              </label>
              <label>
                <span> City </span>{" "}
                <input
                  className="city"
                  type="text"
                  name="city1"
                  placeholder="Your City"
                  onChange={valueInput}
                  value={user.city1}
                />{" "}
              </label>
              <label>
                <span> e-mail </span>{" "}
                <input
                  className="email"
                  type="text"
                  name="email1"
                  placeholder="A valid e-mail here"
                  onChange={valueInput}
                  value={user.email1}
                />{" "}
              </label>
              <label>
                <span> password </span>{" "}
                <input
                  className="pass1"
                  type="password"
                  name="password1"
                  placeholder="Your password"
                  onChange={valueInput}
                  value={user.password1}
                />{" "}
              </label>
              <label>
                <span> password </span>{" "}
                <input
                  className="pass2"
                  type="password"
                  name="password2"
                  placeholder="Confirm your password"
                  onChange={valueInput}
                  value={user.password2}
                />{" "}
              </label>{" "}
            </div>{" "}
            <Button
              id="registerButton"
              name="Register Now"
              className="button"
            />
          </form>{" "}
        </section>{" "}
        <div className="imagens">
          <img src={loginImage} alt="Imagem 1" className="main-image" />
          <img src={logoImage} alt="Imagem 2" className="logo" />
        </div>{" "}
      </body>{" "}
    </Fragment>
  );
};

export default Welcome;
