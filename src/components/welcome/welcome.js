import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./welcome.css";
import Button from "../Button/Button";
import loginImage from "../../assets/login.png";
import logoImage from "../../assets/uol.png";

const Welcome = (props) => {
  return (
    <Fragment>
      <body>
        <section className="forms">
          <header className="welcome">
            <h1>Welcome,</h1>
            <h2>Please register to continue</h2>
          </header>
          <form className="inputs" action="./login">
            <div className="wrapper">
            <label className="labelfirstname">
              <span>first name</span>
              <input
                type="text"
                name="firstname1"
                placeholder=" Your first name"
              />
            </label>
            <label>
              <span>last name</span>
              <input
                type="text"
                name="lastname1"
                placeholder=" Your last name"
              />
            </label>

            <label>
              <span>birth date</span>
              <input
                type="date"
                name="birthdate1"
                placeholder=" MM/DD/YY"
                className="birth"
              />
            </label>

            <label>
              <span> Country</span>
              <input type="text" name="country1" placeholder=" Your Country" />
            </label>

            <label>
              <span>City</span>
              <input type="text" name="city1" placeholder=" Your City" />
            </label>

            <label>
              <span>e-mail</span>
              <input
                type="text"
                name="email1"
                placeholder="A valid e-mail here"
              />
            </label>

            <label>
              <span>password</span>
              <input
                type="password"
                name="password1"
                placeholder="Your password"
              />
            </label>

            <label>
              <span>password</span>
              <input
                required
                type="password"
                name="password2"
                placeholder="Confirm your password"
              />
            </label>
            </div>
            <Button name="Register Now"  />
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
