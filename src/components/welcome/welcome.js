import React, { Fragment } from "react";
import { Link } from 'react-router-dom'
import './welcome.css';
import Button from "../buttonRegister/button";
import loginImage from '../../assets/login.png';
import logoImage from '../../assets/uol.png'

const Welcome = props => {
    return <Fragment>
        <body>
        <section className="forms">
        <header className="welcome">
            <h1>Welcome,</h1>
            <h2>Please register to continue</h2>
        </header>
        <div className="inputs">
            <form className="firstname">
            <label className="labelfirstname">
                first name
                <input type="text" name="firstname1" placeholder=" Your first name" />
            </label>
            </form>

            <form className="lastname">
            <label>
                last name
                <input type="text" name="lastname1" placeholder=" Your last name"  />
            </label>
            </form>

            <form className="birthdate">
            <label>
                birth date
                <input type="date" name="birthdate1" placeholder=" MM/DD/YY" className="birth"  />
            </label>
            </form>

            <form className="country">
            <label>
                Country
                <input type="text" name="country1" placeholder=" Your Country"  />
            </label>
            </form>

            <form className="city">
            <label>
                City
                <input type="text" name="city1" placeholder=" Your City"  />
            </label>
            </form>

            <form className="email">
            <label>
                e-mail
                <input type="text" name="email1" placeholder="A valid e-mail here"  />
            </label>
            </form>

            <form className="password">
            <label>
                password
                <input type="password" name="password1" placeholder="Your password"  />
            </label>
            </form>

            <form className="confpassword">
            <label>
                password
                <input type="password" name="password2" placeholder="Confirm your password" />
            </label>
            </form>
            </div>
            <Link to ="login" style={{ textDecoration: 'none' }}>
            <Button />
            </Link>
        </section>
        <div className="imagens">
        <div className="logo">
            <img src={logoImage} alt="Imagem 2"/>
        </div>
        <div className="main-image">
            <img src={loginImage} alt="Imagem 1"/> 
        </div>
        </div>
        </body>
</Fragment>
};


export default Welcome