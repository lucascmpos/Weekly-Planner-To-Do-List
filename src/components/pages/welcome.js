import React, { Fragment, useState } from "react";
import "./welcome.css";
import Button from "../Buttons/Button";
import loginImage from "../../assets/login.png";
import logoImage from "../../assets/uol.png";
import { useNavigate } from "react-router-dom";

const Welcome = (props) => {
  const [user, setUser] = useState({
    firstname1: "",
    lastname1: "",
    birthdate1: "",
    country1: "",
    city1: "",
    email1: "",
    password1: "",
    password2: "",
  });

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

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
        mensagem: "User successfully registered!",
      });

      localStorage.setItem("userData", JSON.stringify(user));

      setUser({
        firstname1: "",
        lastname1: "",
        birthdate1: "",
        country1: "",
        city1: "",
        email1: "",
        password1: "",
        password2: "",
      });

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      setStatus({
        type: "error",
        mensagem: "User register not successfully",
      });

      setTimeout(() => {
        navigate("/welcome");
      }, 2000);
    }
  };

  function validate() {
    if (!user.firstname1)
      return setStatus({
        type: "error",
        mensagem: "Need to fill in the first name field!",
      });
    if (!user.lastname1)
      return setStatus({
        type: "error",
        mensagem: "Need to fill in the last name field!",
      });
    if (!user.birthdate1)
      return setStatus({
        type: "error",
        mensagem: "Need to fill in the birth field!",
      });
    if (!user.country1)
      return setStatus({
        type: "error",
        mensagem: "Need to fill in the country field!",
      });
    if (!user.city1)
      return setStatus({
        type: "error",
        mensagem: "Need to fill in the city field!",
      });
    if (!user.email1)
      return setStatus({
        type: "error",
        mensagem: "You must fill in the email field!",
      });
    if (!user.password1)
      return setStatus({
        type: "error",
        mensagem: "Need to fill in the password field!",
      });
    if (!user.password2)
      return setStatus({
        type: "error",
        mensagem: "Need to fill in the field to confirm the password!",
      });

    return true;
  }

  return (
    <Fragment>
      <body>
        <section className="forms">
          <header className="welcome">
            <h1> Welcome, </h1> <h2> Please register to continue </h2>
          </header>
          <p style={{ color: status.type == "success" ? "green" : "red" }}>
            {status.mensagem}
          </p>

          <form className="inputs" onSubmit={addUser}>
            <div className="wrapper">
              <label className="labelfirstname">
                <span> first name </span>
                <input
                  className="first"
                  type="text"
                  name="firstname1"
                  placeholder=" Your first name"
                  value={user.firstname1}
                  onChange={valueInput}
                />
              </label>
              <label>
                <span> last name </span>
                <input
                  className="last"
                  type="text"
                  name="lastname1"
                  placeholder=" Your last name"
                  value={user.lastname1}
                  onChange={valueInput}
                />
              </label>
              <label>
                <span> birth date </span>
                <input
                  className="birth"
                  type="date"
                  name="birthdate1"
                  placeholder=" MM/DD/YY"
                  onChange={valueInput}
                  value={user.birthdate1}
                />
              </label>
              <label>
                <span> Country </span>
                <input
                  className="country"
                  type="text"
                  name="country1"
                  placeholder="Your Country"
                  onChange={valueInput}
                  value={user.country1}
                />
              </label>
              <label>
                <span> City </span>
                <input
                  className="city"
                  type="text"
                  name="city1"
                  placeholder="Your City"
                  onChange={valueInput}
                  value={user.city1}
                />
              </label>
              <label>
                <span> e-mail </span>
                <input
                  className="email"
                  type="text"
                  name="email1"
                  placeholder="A valid e-mail here"
                  onChange={valueInput}
                  value={user.email1}
                />
              </label>
              <label>
                <span> password </span>
                <input
                  className="pass1"
                  type="password"
                  name="password1"
                  placeholder="Your password"
                  onChange={valueInput}
                  value={user.password1}
                />
              </label>
              <label>
                <span> password </span>
                <input
                  className="pass2"
                  type="password"
                  name="password2"
                  placeholder="Confirm your password"
                  onChange={valueInput}
                  value={user.password2}
                />
              </label>
            </div>
            <Button
              id="registerButton"
              name="Register Now"
              className="button"
            />
          </form>
        </section>
        <div className="imagens">
          <img src={loginImage} alt="Imagem 1" className="main-image" />
          <img src={logoImage} alt="Imagem 2" className="logo" />
        </div>
      </body>
    </Fragment>
  );
};

export default Welcome;
