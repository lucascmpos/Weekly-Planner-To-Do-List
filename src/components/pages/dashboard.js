/* eslint-disable eqeqeq */
// @ts-ignore
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../layout/Navbar";
import "./dashboard.css";

import logoutImage from "../../assets/Vector.png";
import logo2Image from "../../assets/uol2.png";
import backImage from "../../assets/background.png";

import Button from "../Buttons/Button";
import Weather from "../layout/Weather/Weather";

// @ts-ignore
const Dashboard = (props) => {
  const [renderMonday, setRenderMonday] = useState(false);
  const [renderTuesday, setRenderTuesday] = useState(false);
  const [renderWednesday, setRenderWednesday] = useState(false);
  const [renderThursday, setRenderThursday] = useState(false);
  const [renderFriday, setRenderFriday] = useState(false);
  const [renderSaturday, setRenderSaturday] = useState(false);
  const [renderSunday, setRenderSunday] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  const [addTask, setAddTask] = useState([]);

  const [taskInfo, setTaskInfo] = useState({
    id: "",
    descricao: "",
    dia: "",
    hora: "",
  });

  const attCard = (taskInfo) => {
    if (
      taskInfo.descricao === "" ||
      taskInfo.dia === "" ||
      taskInfo.hora === ""
    ) {
      setStatus({
        type: "error",
        mensagem: "Fields need to be filled in. Please try again.",
      });
    } else {
      setStatus({
        type: "",
        mensagem: "",
      });
      setAddTask((backTask) => [...backTask, taskInfo]);
      setTaskInfo({
        ...taskInfo,
        id: addTask.length + 1,
      });
      console.log(addTask);
    }
  };

  const remTask = (id) => {
    setAddTask(addTask.filter((desc) => desc.id !== id));
  };

  const remAllTask = () =>{
    setAddTask(addTask.filter((task) => task.day !== taskInfo.day));
  };

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

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function suffix(i) {
    var j = i % 10,
      k = i % 100;
    if (j == 1 && k != 11) {
      return i + "st";
    }
    if (j == 2 && k != 12) {
      return i + "nd";
    }
    if (j == 3 && k != 13) {
      return i + "rd";
    }
    return i + "th";
  }

  const [hora, setHora] = useState(
    new Date().toLocaleTimeString().slice(0, -3)
  );

  let dia = new Date().getDate();
  let ano = new Date().getFullYear();
  let novadata = new Date();
  let data = monthNames[novadata.getMonth()] + " " + suffix(dia) + ", " + ano;

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date().toLocaleTimeString().slice(0, -3));
    }, 60 * 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
    <div className="h">
      <header className="dash">
        <div className="weekly">
          <h1 className="title">Weekly Planer</h1>
          <p className="text">
            Use this planner to organize your daily issues.
          </p>
        </div>
        <div className="datas">
          <span className="hora">{hora}</span>
          <br></br>
          <span className="data">{data}</span>
        </div>
        <Weather />
        <a href="https://compass.uol/pt/home/">
          <img src={logo2Image} alt="Imagem 10" className="logo2" />
          </a>
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
          <Button onClick={remAllTask} type="button" className="delButton" name="- Delete all" />
        </form>
        <p style={{ color: status.type == "success" ? "green" : "orange" }}>
          {status.mensagem}
        </p>
        <div className="board">
          <Navbar weekCheck={weekCheck} />
          <div className="timeCard">
            <p className="timeText">Time</p>
          </div>
        </div>

        <div className="scroll">
          <div className="container">
          <img src={backImage} alt="backImage" className="backImage" />
            <div className="tasks">
              <>
                {renderMonday &&
                  addTask
                    .filter((addTask) => addTask.dia == "1")
                    .map((item, index) => (
                      <div className="inside" key={index}>
                        <div className="hourMonday">
                          <span className="spanHour">
                            {
                              item.hora
                            }
                            <br />
                          </span>
                        </div>
                        <div className="card">
                          <div className="lineMonday">
                            <span className="span">
                              {
                                item.descricao
                              }
                            </span>
                          </div>
                          <Button
                            onClick={() => remTask(item.id)}
                            type="button"
                            className="insideButton"
                            name="Delete"
                          />
                        </div>
                      </div>
                    ))}
              </>
              <>
                {renderTuesday &&
                  addTask
                    .filter((addTask) => addTask.dia == "2")
                    .map((item, index) => (
                      <div className="inside" key={index}>
                        <div className="hourTuesday">
                          <span className="spanHour">
                            {
                              item.hora
                            }
                            <br />
                          </span>
                        </div>
                        <div className="card">
                          <div className="lineTuesday">
                            <span className="span">
                              {
                                item.descricao
                              }
                            </span>
                          </div>
                          <Button
                            onClick={() => remTask(item.id)}
                            type="button"
                            className="insideButton"
                            name="Delete"
                          />
                        </div>
                      </div>
                    ))}
              </>
              <>
                {renderWednesday &&
                  addTask
                    // @ts-ignore
                    .filter((addTask) => addTask.dia == "3")
                    .map((item, index) => (
                      <div className="inside" key={index}>
                        <div className="hourWednesday">
                          <span className="spanHour">
                            {
                              item.hora
                            }
                            <br />
                          </span>
                        </div>
                        <div className="card">
                          <div className="lineWednesday">
                            <span className="span">
                              {
                                item.descricao
                              }
                            </span>
                          </div>
                          <Button
                            onClick={() => remTask(item.id)}
                            type="button"
                            className="insideButton"
                            name="Delete"
                          />
                        </div>
                      </div>
                    ))}
              </>
              <>
                {renderThursday &&
                  addTask
                    .filter((addTask) => addTask.dia == "4")
                    .map((item, index) => (
                      <div className="inside" key={index}>
                        <div className="hourThursday">
                          <span className="spanHour">
                            {
                              item.hora
                            }
                            <br />
                          </span>
                        </div>
                        <div className="card">
                          <div className="lineThursday">
                            <span className="span">
                              {
                                item.descricao
                              }
                            </span>
                          </div>
                          <Button
                            onClick={() => remTask(item.dia)}
                            type="button"
                            className="insideButton"
                            name="Delete"
                          />
                        </div>
                      </div>
                    ))}
              </>
              <>
                {renderFriday &&
                  addTask
                    .filter((addTask) => addTask.dia == "5")
                    .map((item, index) => (
                      <div className="inside" key={index}>
                        <div className="hourFriday">
                          <span className="spanHour">
                            {
                              item.hora
                            }
                            <br />
                          </span>
                        </div>
                        <div className="card">
                          <div className="lineFriday">
                            <span className="span">
                              {
                                item.descricao
                              }
                            </span>
                          </div>
                          <Button
                            onClick={() => remTask(item.id)}
                            type="button"
                            className="insideButton"
                            name="Delete"
                          />
                        </div>
                      </div>
                    ))}
              </>
              <>
                {renderSaturday &&
                  addTask
                    .filter((addTask) => addTask.dia == "6")
                    .map((item, index) => (
                      <div className="inside" key={index}>
                        <div className="hourSaturday">
                          <span className="spanHour">
                            {
                              item.hora
                            }
                            <br />
                          </span>
                        </div>
                        <div className="card">
                          <div className="lineSaturday">
                            <span className="span">
                              {
                                item.descricao
                              }
                            </span>
                          </div>
                          <Button
                            onClick={() => remTask(item.id)}
                            type="button"
                            className="insideButton"
                            name="Delete"
                          />
                        </div>
                      </div>
                    ))}
              </>
              <>
                {renderSunday &&
                  addTask
                    .filter((addTask) => addTask.dia == "7")
                    .map((item, index) => (
                      <div className="inside" key={index}>
                        <div className="hourSunday">
                          <span className="spanHour">
                            {
                              item.hora
                            }
                            <br />
                          </span>
                        </div>
                        <div className="card">
                          <div className="lineSunday">
                            <span className="span">
                              {
                                item.descricao
                              }
                            </span>
                          </div>
                          <Button
                            onClick={() => remTask(item.id)}
                            type="button"
                            className="insideButton"
                            name="Delete"
                          />
                        </div>
                      </div>
                    ))}
              </>
            </div>
          </div>
        </div>
      </main>
    </div>
    </div>
  );
};

export default Dashboard;
