import React from "react";
import { Link } from "react-router-dom";

import Container from "../Container";
import Navbar from "../Navbar";
import "./dashboard.css";
import logoutImage from "../../assets/Vector.png";
import logo2Image from "../../assets/uol2.png";
import Button from "../Buttons/Button";

function Dashboard(props) {
  return (
    <body className="h">
      <header className="dash">
        <div className="weekly">
          <h1 className="title">Weekly Planer</h1>
          <p className="text">
            Use this planner to organize your daily issues.
          </p>
        </div>
        <img src={logo2Image} alt="Imagem 10" className="logo2" />
        <div className="logout">
          <Link to="/login">
            <img src={logoutImage} alt="Imagem 10" className="logoutImage" />
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <h1 className="textLogout">Logout</h1>
          </Link>
        </div>
      </header>
      <main className="dashboard">
        <form className="action">
          <input className="task" type="text" placeholder="Task or issue" />
          <select required className="selectStatus">
            <option disabled selected value="unselected"></option>
            <option value="1">Monday</option>
            <option value="2">Tuesday</option>
            <option value="3">Wednesday</option>
            <option value="4">Thursday</option>
            <option value="5">Friday</option>
            <option value="6">Saturday</option>
            <option value="7">Sunday</option>
          </select>
          <input
            className="time"
            type="time"
            min="00:00"
            max="23:59"
            required
          />

          <Button
            type="submit"
            className="addButton"
            name="+ Add to calendar"
          />
          <Button type="reset" className="delButton" name="- Delete all" />
        </form>
        <div className="board">
          <Navbar />
          <div className="timeCard">
            <p className="timeText">Time</p>
          </div>
        </div>
      </main>
    </body>
  );
}

export default Dashboard;
