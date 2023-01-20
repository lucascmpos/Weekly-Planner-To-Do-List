import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Navbar from "../layout/Navbar";
import "./dashboard.css";

import logoutImage from "../../assets/Vector.png";
import logo2Image from "../../assets/uol2.png";
import backImage from "../../assets/background.png";

import Button from "../Buttons/Button";
import Weather from "../layout/Weather/Weather";

const Dashboard = (props) => {
  const [renderMonday, setRenderMonday] = useState(false);
  const [renderTuesday, setRenderTuesday] = useState(false);
  const [renderWednesday, setRenderWednesday] = useState(false);
  const [renderThursday, setRenderThursday] = useState(false);
  const [renderFriday, setRenderFriday] = useState(false);
  const [renderSaturday, setRenderSaturday] = useState(false);
  const [renderSunday, setRenderSunday] = useState(false);

  const [addTask, setAddTask] = useState([]);

  const [taskInfo, setTaskInfo] = useState({
    // id: '',
    descricao: "",
    dia: "",
    hora: "",
  });


  const attCard = (taskInfo) => {
    // @ts-ignore
    setAddTask(backTask => [...backTask, taskInfo]);
  console.log(addTask)
  };

  // const callback = useCallback(() => {
  //   console.log("a");
  // }, []);

  const prevent = (event) => {
    event.preventDefault();
  };

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
    },
  };

  let horas = new Date().toLocaleDateString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const [hora, setHora] = useState(horas);

  useEffect(() => {
    const interval = setInterval(() => {
      horas = new Date().toLocaleDateString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setTimeout(horas);
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h">
      <header className="dash">
        <div className="weekly">
          <h1 className="title">Weekly Planer</h1>
          <p className="text">
            Use this planner to organize your daily issues.
          </p>
        </div>
        <div className="hora">{hora}</div>
        <Weather />
        <NavLink to="/welcome">
          <img src={logo2Image} alt="Imagem 10" className="logo2" />
        </NavLink>
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
        <form onSubmit={prevent} className="action">
          <input
            onChange={(event) => {
              setTaskInfo({ ...taskInfo, descricao: event.target.value });
            }}
            className="task"
            type="text"
            placeholder="Task or issue"
          />
          <select
            onChange={(event) => {
              setTaskInfo({ ...taskInfo, dia: event.target.value });
            }}
            required
            className="selectStatus"
          >
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
            onChange={(event) => {
              setTaskInfo({ ...taskInfo, hora: event.target.value });
            }}
            className="time"
            type="time"
            min="00:00"
            max="23:59"
            required
          />

          <Button
            onClick={() => attCard(taskInfo)}
            type="button"
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
          <img src={backImage} alt="backImage" className="backImage" />
          <>
            {renderMonday &&
              addTask.filter(addTask => addTask.dia === "1").map((item, index) => (
                <div className="inside" key={index}>
                  <div className="hour">
                    <span className="spanHour">
                      {item.hora}
                      <br />
                    </span>
                  </div>
                  <div className="card">
                    <div className="line">
                      <span className="span">{item.descricao}</span>
                    </div>
                  </div>
                </div>
              ))}
          </>
          <>
            {renderTuesday &&
               addTask.filter(addTask => addTask.dia === "2").map((item, index) => (
                <div className="inside" key={index}>
                  <div className="hour">
                    <span className="spanHour">
                      {item.hora}
                      <br />
                    </span>
                  </div>
                  <div className="card">
                    <div className="line">
                      <span className="span">{item.descricao}</span>
                    </div>
                  </div>
                </div>
              ))}
          </>
          <>
            {renderWednesday &&
              addTask.filter(addTask => addTask.dia === "3").map((item, index) => (
                <div className="inside" key={index}>
                  <div className="hour">
                    <span className="spanHour">
                      {item.hora}
                      <br />
                    </span>
                  </div>
                  <div className="card">
                    <div className="line">
                      <span className="span">{item.descricao}</span>
                    </div>
                  </div>
                </div>
              ))}
          </>
          <>
            {renderThursday &&
              addTask.filter(addTask => addTask.dia === "4").map((item, index) => (
                <div className="inside" key={index}>
                  <div className="hour">
                    <span className="spanHour">
                      {item.hora}
                      <br />
                    </span>
                  </div>
                  <div className="card">
                    <div className="line">
                      <span className="span">{item.descricao}</span>
                    </div>
                  </div>
                </div>
              ))}
          </>
          <>
            {renderFriday &&
              addTask.filter(addTask => addTask.dia === "5").map((item, index) => (
                <div className="inside" key={index}>
                  <div className="hour">
                    <span className="spanHour">
                      {item.hora}
                      <br />
                    </span>
                  </div>
                  <div className="card">
                    <div className="line">
                      <span className="span">{item.descricao}</span>
                    </div>
                  </div>
                </div>
              ))}
          </>
          <>
            {renderSaturday &&
              addTask.filter(addTask => addTask.dia === "6").map((item, index) => (
                <div className="inside" key={index}>
                  <div className="hour">
                    <span className="spanHour">
                      {item.hora}
                      <br />
                    </span>
                  </div>
                  <div className="card">
                    <div className="line">
                      <span className="span">{item.descricao}</span>
                    </div>
                  </div>
                </div>
              ))}
          </>
          <>
            {renderSunday &&
              addTask.filter(addTask => addTask.dia === "7").map((item, index) => (
                <div className="inside" key={index}>
                  <div className="hour">
                    <span className="spanHour">
                      {item.hora}
                      <br />
                    </span>
                  </div>
                  <div className="card">
                    <div className="line">
                      <span className="span">{item.descricao}</span>
                    </div>
                  </div>
                </div>
              ))}
          </>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
