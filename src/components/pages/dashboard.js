import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../layout/Navbar";
import "./dashboard.css";
import logoutImage from "../../assets/Vector.png";
import logo2Image from "../../assets/uol2.png";
import Button from "../Buttons/Button";
import Weather from "../layout/Weather";

const Dashboard = (props) => {
  const [renderMonday, setRenderMonday] = useState(false);
  const [renderTuesday, setRenderTuesday] = useState(false);
  const [renderWednesday, setRenderWednesday] = useState(false);
  const [renderThursday, setRenderThursday] = useState(false);
  const [renderFriday, setRenderFriday] = useState(false);
  const [renderSaturday, setRenderSaturday] = useState(false);
  const [renderSunday, setRenderSunday] = useState(false);

  const weekCheck = {
    monday: () => {
      setRenderMonday(true);
      setRenderTuesday(false);
      setRenderWednesday(false);
      setRenderThursday(false);
      setRenderFriday(false);
      setRenderSaturday(false);
      setRenderSunday(false);
    },
    tuesday: () => {
      setRenderMonday(false);
      setRenderTuesday(true);
      setRenderWednesday(false);
      setRenderThursday(false);
      setRenderFriday(false);
      setRenderSaturday(false);
      setRenderSunday(false);
    },
    wednesday: () => {
      setRenderMonday(false);
      setRenderTuesday(false);
      setRenderWednesday(true);
      setRenderThursday(false);
      setRenderFriday(false);
      setRenderSaturday(false);
      setRenderSunday(false);
    },
    thursday: () => {
      setRenderMonday(false);
      setRenderTuesday(false);
      setRenderWednesday(false);
      setRenderThursday(true);
      setRenderFriday(false);
      setRenderSaturday(false);
      setRenderSunday(false);
    },
    friday: () => {
      setRenderMonday(false);
      setRenderTuesday(false);
      setRenderWednesday(false);
      setRenderThursday(false);
      setRenderFriday(true);
      setRenderSaturday(false);
      setRenderSunday(false);
    },
    saturday: () => {
      setRenderMonday(false);
      setRenderTuesday(false);
      setRenderWednesday(false);
      setRenderThursday(false);
      setRenderFriday(false);
      setRenderSaturday(true);
      setRenderSunday(false);
    },
    sunday: () => {
      setRenderMonday(false);
      setRenderTuesday(false);
      setRenderWednesday(false);
      setRenderThursday(false);
      setRenderFriday(false);
      setRenderSaturday(false);
      setRenderSunday(true);
      }
  };

  const Monday = [
    {
      hora: "11h00",
      descricao: "Work on monday",
      id: "1",
    },
    {
      hora: "12h00",
      descricao: "Daily on monday",
      id: "2",
    },
  ];
  const Tuesday = [{
    hora: "12h00",
    descricao: "Work on tuesday",
    id: "1",
  },
  {
    hora: "13h00",
    descricao: "Daily on Tuesday",
    id: "2",
  },];
  const Wednesday = [{
    hora: "12h00",
    descricao: "Wednesday",
    id: "1",
  },
  {
    hora: "13h00",
    descricao: "b",
    id: "2",
  },];
  const Thursday = [{
    hora: "12h00",
    descricao: "Thursday",
    id: "1",
  },
  {
    hora: "13h00",
    descricao: "b",
    id: "2",
  },];
  const Friday = [{
    hora: "12h00",
    descricao: "Friday",
    id: "1",
  },
  {
    hora: "13h00",
    descricao: "b",
    id: "2",
  },];
  const Saturday = [{
    hora: "12h00",
    descricao: "Saturday",
    id: "1",
  },
  {
    hora: "13h00",
    descricao: "b",
    id: "2",
  },];
  const Sunday = [{
    hora: "12h00",
    descricao: "Sunday",
    id: "1",
  },
  {
    hora: "13h00",
    descricao: "b",
    id: "2",
  },];

  return (
    <div className="h">
      <header className="dash">
        <div className="weekly">
          <h1 className="title">Weekly Planer</h1>
          <p className="text">
            Use this planner to organize your daily issues.
          </p>
        </div>
        <Weather />
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
            <option disabled value="unselected"></option>
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
          <Navbar weekCheck={weekCheck} />
          <div className="timeCard">
            <p className="timeText">Time</p>
          </div>
        </div>
        <div className="tasks">
          <>
            {renderMonday &&
              Monday.map((item, index) => (
                <div key={index}>
                  <span>{item.hora}<br /></span>
                  <span>{item.descricao}</span>
                </div>
              ))}
          </>
          <>
            {renderTuesday &&
              Tuesday.map((item, index) => (
                <div key={index}>
                  <span>{item.hora}<br /></span>
                  <span>{item.descricao}</span>
                </div>
              ))}
          </>
          <>
            {renderWednesday &&
              Wednesday.map((item, index) => (
                <div key={index}>
                  <span>{item.hora}<br /></span>
                  <span>{item.descricao}</span>
                </div>
              ))}
          </>
          <>
            {renderThursday &&
              Thursday.map((item, index) => (
                <div key={index}>
                  <span>{item.hora}<br /></span>
                  <span>{item.descricao}</span>
                </div>
              ))}
          </>
          <>
            {renderFriday &&
              Friday.map((item, index) => (
                <div key={index}>
                  <span>{item.hora}<br /></span>
                  <span>{item.descricao}</span>
                </div>
              ))}
          </>
          <>
            {renderSaturday &&
              Saturday.map((item, index) => (
                <div key={index}>
                  <span>{item.hora}<br /></span>
                  <span>{item.descricao}</span>
                </div>
              ))}
          </>
          <>
            {renderSunday &&
              Sunday.map((item, index) => (
                <div key={index}>
                  <span>{item.hora}<br /></span>
                  <span>{item.descricao}</span>
                </div>
              ))}
          </>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
