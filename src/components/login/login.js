import React from "react";
import './login.css';
import { Link } from 'react-router-dom'
import ButtonLogin from "../buttonLogin/buttonLogin";
import loginImage from '../../assets/login.png';
import logoImage from '../../assets/uol.png'
import iconImage from '../../assets/icon-user.png'
import passImage from '../../assets/icon-password.png'

const Login = props => {


    return (
        <body>
            <section className="forms">
        <header className="header">
        <h1>Welcome,</h1>
        <h2>To continue browsing safely, log in to the network.</h2>
        </header>
        <div className="inputs">
            <p>Login</p>
        <form className="username">
            <input type="text" name="username1" className="input2" placeholder="user name" />
        </form>
        <div className="iconimg">
        <img src={iconImage} alt="icone" id="icon" className="icon"/>
        </div>
         <form className="password">
         
            <input type="password" name="password3" className="input2" placeholder="password" />
                  
         </form>
         <div className="passimg">
         <img src={passImage} alt="senha"/>  
         </div>

        </div>
        <div>
        <Link style={{textDecoration:'none'}} to>
        <ButtonLogin />
        </Link>
        </div>
        
        
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
    );
};


export default Login