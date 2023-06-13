import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./welcome.css";

import Button from "../layout/Buttons/Button";

import loginImage from "../../assets/login.png";
import logoImage from "../../assets/uol.png";
import goToLogin from "../../assets/gotologin.png";

interface UserProps {
  firstName: string;
  lastName: string;
  birthDate: string | number;
  city: string;
  country: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface StatusProps {
  type: string;
  mensagem: string;
}

const Welcome: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserProps>({
    firstName: "",
    lastName: "",
    birthDate: "",
    city: "",
    country: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [status, setStatus] = useState<StatusProps>({
    type: "",
    mensagem: "",
  });

  const history = useHistory();

  const valueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const addUser = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setIsLoading(true);

      fetch("https://latam-challenge-2.deta.dev/api/v1/users/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => {
          if (response.ok) {
            setStatus({
              type: "success",
              mensagem: "User successfully registered!",
            });
            console.log("Cadastrado com sucesso", response);
            setTimeout(() => {
              setIsLoading(false);
              history.push("/login");
            }, 2000);
          } else {
            setStatus({
              type: "error",
              mensagem:
                "User with required email already exists. Please sign in or use another email to register!",
            });
            setIsLoading(false);
          }
        })
        .catch((error) => {
          console.log(error);
          setStatus({
            type: "error",
            mensagem: "Error during register, please try again later.",
          });
          setIsLoading(false);
        });
    } else {
      return;
    }

    const saveDataForm = true;

    if (saveDataForm) {
      setUser({
        firstName: user.firstName,
        lastName: user.lastName,
        birthDate: user.birthDate,
        city: user.city,
        country: user.country,
        email: user.email,
        password: user.password,
        confirmPassword: user.confirmPassword,
      });
    }
  };

  function validate(): boolean {
    if (!user.firstName) {
      setStatus({
        type: "error",
        mensagem: "Need to fill in the first name field!",
      });
      return false;
    }
    if (!user.lastName) {
      setStatus({
        type: "error",
        mensagem: "Need to fill in the last name field!",
      });
      return false;
    }
    if (!user.birthDate) {
      setStatus({
        type: "error",
        mensagem: "Need to fill in the birth field!",
      });
      return false;
    }
    if (!user.country) {
      setStatus({
        type: "error",
        mensagem: "Need to fill in the country field!",
      });
      return false;
    }
    if (!user.city) {
      setStatus({
        type: "error",
        mensagem: "Need to fill in the city field!",
      });
      return false;
    }
    if (!user.email) {
      setStatus({
        type: "error",
        mensagem: "You must fill in the email field!",
      });
      return false;
    }
    if (user.email.indexOf("@") === -1 || user.email.length < 6) {
      setStatus({
        type: "error",
        mensagem: "You must enter a valid email!",
      });
      return false;
    }
    if (!user.password) {
      setStatus({
        type: "error",
        mensagem: "Need to fill in the password field!",
      });
      return false;
    }
    if (!user.confirmPassword) {
      setStatus({
        type: "error",
        mensagem: "Need to fill in the field to confirm the password!",
      });
      return false;
    }
    if (user.password !== user.confirmPassword) {
      setStatus({
        type: "error",
        mensagem: "The password must be the same in both password fields",
      });
      return false;
    }
    if (user.password.length < 6 || user.confirmPassword.length < 6) {
      setStatus({
        type: "error",
        mensagem: "The passwords must contain at least 6 characters!",
      });
      return false;
    }

    return true;
  }

  return (
    <div className="body">
      <section className="forms">
        <header className="welcome">
          <h1> Welcome, </h1> <h2> Please register to continue </h2>
        </header>{" "}
        <form className="inputs" onSubmit={addUser}>
          <div className="wrapper">
            <label className="labelfirstname">
              <span> first name </span>{" "}
              <input
                className="first"
                type="text"
                name="firstName"
                placeholder=" Your first name"
                value={user.firstName}
                onChange={valueInput}
              />{" "}
            </label>{" "}
            <label>
              <span> last name </span>{" "}
              <input
                className="last"
                type="text"
                name="lastName"
                placeholder=" Your last name"
                value={user.lastName}
                onChange={valueInput}
              />{" "}
            </label>{" "}
            <label>
              <span> birth date </span>{" "}
              <input
                className="birth"
                type="date"
                name="birthDate"
                placeholder=" MM/DD/YY"
                onChange={valueInput}
                value={user.birthDate}
              />{" "}
            </label>{" "}
            <label>
              <span> Country </span>{" "}
              <input
                className="country"
                type="text"
                name="country"
                placeholder="Your Country"
                onChange={valueInput}
                value={user.country}
              />{" "}
            </label>{" "}
            <label className="cityLabel">
              <span> City </span>{" "}
              <input
                id="city-input"
                className="city"
                type="text"
                name="city"
                placeholder="Your City"
                onChange={valueInput}
                value={user.city}
              />{" "}
            </label>{" "}
            <label>
              <span> e - mail </span>{" "}
              <input
                className="email"
                type="text"
                name="email"
                placeholder="A valid e-mail here"
                onChange={valueInput}
                value={user.email}
              />{" "}
            </label>{" "}
            <label>
              <span> password </span>{" "}
              <input
                className="pass1"
                type="password"
                name="password"
                placeholder="Your password"
                onChange={valueInput}
                value={user.password}
              />{" "}
            </label>{" "}
            <label>
              <span> password </span>{" "}
              <input
                className="pass2"
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                onChange={valueInput}
                value={user.confirmPassword}
              />{" "}
            </label>{" "}
            <p
              style={{
                color: status.type === "success" ? "green" : "orange",
              }}
            >
              {" "}
              {status.mensagem}{" "}
            </p>{" "}
          </div>{" "}
          <Button name="Register Now" className="button" />
        </form>{" "}
        {isLoading && <div className="loadingWelcome"></div>}
        <div className="toWelcome">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <img src={goToLogin} alt="Imagem 10" className="toLoginImage" />
            <p className="registered">
              Already registered? go to the login page clicking here.{" "}
            </p>
          </Link>
        </div>
      </section>{" "}
      <div className="imagens">
        <a href="https://compass.uol/pt/home/">
          <img src={logoImage} alt="Imagem 2" className="logo" />
        </a>{" "}
        <img src={loginImage} alt="Imagem 1" className="main-image" />
      </div>{" "}
    </div>
  );
};

export default Welcome;
