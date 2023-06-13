import React, { Fragment, useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

import "./dashboard.css";

import Navbar from "../layout/Navbar/Navbar";
import Button from "../layout/Buttons/Button";
import Weather from "../layout/Weather/Weather";

import logoutImage from "../../assets/Vector.png";
import logo2Image from "../../assets/uol2.png";
import backImage from "../../assets/background.png";

interface StatusProps {
  type: string;
  mensagem: string;
}

interface TaskInfoProps {
  id?: string | number
  description?: string;
  dayOfWeek: string | number;
  hour?: string | number;
}

interface EventProps{
  _id: string | number
  dayOfWeek: string | number
  createdAt: string | number
  description: string
}

const Dashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [renderMonday, setRenderMonday] = useState(false);
  const [renderTuesday, setRenderTuesday] = useState(false);
  const [renderWednesday, setRenderWednesday] = useState(false);
  const [renderThursday, setRenderThursday] = useState(false);
  const [renderFriday, setRenderFriday] = useState(false);
  const [renderSaturday, setRenderSaturday] = useState(false);
  const [renderSunday, setRenderSunday] = useState(false);
  const [data, setData] = useState<EventProps[]>([]);

  const tokenAPI = localStorage.getItem("token");

  const prevent = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const [status, setStatus] = useState<StatusProps>({
    type: "",
    mensagem: "",
  });

  const [taskInfo, setTaskInfo] = useState<TaskInfoProps>({
    description: "",
    dayOfWeek: "",
  });

  const logOff = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("city");
  };

  const postEvent = (taskInfo: TaskInfoProps) => {
    if (
      taskInfo.description === "" ||
      taskInfo.dayOfWeek === "" ||
      taskInfo.hour === ""
    ) {
      setStatus({
        type: "error",
        mensagem: "Fields need to be filled in. Please try again.",
      });
      return;
    } else {
      setIsLoading(true);
      fetch("https://latam-challenge-2.deta.dev/api/v1/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenAPI}`,
        },
        body: JSON.stringify({
          description: taskInfo.description,
          dayOfWeek: taskInfo.dayOfWeek,
        }),
      }).then((response) => {
        if (response.ok) {
          setStatus({
            type: "",
            mensagem: "",
          });
          setIsLoading(false);
          response
            .json()
            .then((res) => {
              console.log(res);
              setTaskInfo(res);
              setData([...data, res]);
              setTaskInfo({
                ...taskInfo,
                id: data.length + 1,
              });
            })
            .catch((err) => {
              setStatus({
                type: "error",
                mensagem: "Erro no servidor...",
              });
              console.log("evento não adicionado", err);
            });
          console.log("evento adicionado");
        }
      });
    }
  };

  const getEvent = useCallback(() => {
    fetch("https://latam-challenge-2.deta.dev/api/v1/events", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenAPI}`,
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((body) => {
          setData(body.events);
          setIsLoading(false);
          console.log(data);
        });
      } else {
        console.log("evento não puxado ", response);
      }
    });
  }, [tokenAPI, data]);

  const delEventById = (id: string | number) => {
    setIsLoading(true);
    fetch(`https://latam-challenge-2.deta.dev/api/v1/events/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenAPI}`,
      },
    }).then((response) => {
      if (response.ok) {
        getEvent();
        setIsLoading(false);
      } else {
        console.log("evento não deletado ", response);
      }
    });
  };

  const delEventsByDay = (day: TaskInfoProps) => {
    console.log({
      dayOfWeek: day,
    });
    setIsLoading(true);
    fetch(`https://latam-challenge-2.deta.dev/api/v1/events?dayOfWeek=${day}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenAPI}`,
      },
    }).then((response) => {
      if (response.ok) {
        setIsLoading(false);
        getEvent();
        console.log("Deletado week");
      } else {
        console.log("eventos não deletado ", response);
      }
    });
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

  function getActualDay(event: TaskInfoProps) {
    if (event.dayOfWeek === "monday") return "monday";
    if (event.dayOfWeek === "tuesday") return "tuesday";
    if (event.dayOfWeek === "wednesday") return "wednesday";
    if (event.dayOfWeek === "thursday") return "thursday";
    if (event.dayOfWeek === "friday") return "friday";
    if (event.dayOfWeek === "saturday") return "saturday";
    if (event.dayOfWeek === "sunday") return "sunday";
  }

  const getDay = ():string => {
    if (renderMonday) return "monday";
    if (renderTuesday) return "tuesday";
    if (renderWednesday) return "wednesday";
    if (renderThursday) return "thursday";
    if (renderFriday) return "friday";
    if (renderSaturday) return "saturday";
    if (renderSunday) return "sunday";

    return ""
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

  function suffix(i: number) {
    var j = i % 10,
      k = i % 100;
    if (j === 1 && k !== 11) {
      return i + "st";
    }
    if (j === 2 && k !== 12) {
      return i + "nd";
    }
    if (j === 3 && k !== 13) {
      return i + "rd";
    }
    return i + "th";
  }

  const [hora, setHora] = useState(
    new Date().toLocaleTimeString().slice(0, -3)
  );

  let day = new Date().getDate();
  let ano = new Date().getFullYear();
  let novadata = new Date();
  let date = monthNames[novadata.getMonth()] + " " + suffix(day) + ", " + ano;

  useEffect(() => {
    getEvent();

    const interval = setInterval(() => {
      setHora(new Date().toLocaleTimeString().slice(0, -3));
    }, 60 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [getEvent]);

  return (
    <div className="body">
      <div className="divUnderBody">
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
            <span className="data">{date}</span>
          </div>
          <Weather />
          <a href="https://compass.uol/pt/home/">
            <img src={logo2Image} alt="Imagem 10" className="logo2" />
          </a>
          <div className="logout">
            <Link
              onClick={logOff}
              style={{ textDecoration: "none" }}
              to="/login"
            >
              <img src={logoutImage} alt="Imagem 10" className="logoutImage" />
              <h1 className="textLogout">Logout</h1>
            </Link>
          </div>
        </header>
        <main className="dashboard">
          <form onSubmit={prevent} className="action">
            <input
              onChange={(event) => {
                setTaskInfo({ ...taskInfo, description: event.target.value });
              }}
              className="task"
              type="text"
              placeholder="Task or issue"
            />
            <select
              onChange={(event) => {
                setTaskInfo({ ...taskInfo, dayOfWeek: event.target.value });
              }}
              required
              className="selectStatus"
            >
              <option disabled value="unselected"></option>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              <option value="saturday">Saturday</option>
              <option value="sunday">Sunday</option>
            </select>
            <input
              onChange={(event) => {
                setTaskInfo({ ...taskInfo, hour: event.target.value });
              }}
              className="time"
              type="time"
              min="00:00"
              max="23:59"
              required
            />
            {isLoading && <div className="loadingDashboard"></div>}
            <Button
              onClick={() => postEvent(taskInfo)}
              type="button"
              className="addButton"
              name="+ Add to calendar"
            />
            <Button
              onClick={() => delEventsByDay({ dayOfWeek: getDay()})}
              type="button"
              className="delButton"
              name="- Delete all"
            />
          </form>
          <p style={{ color: status.type === "success" ? "green" : "orange" }}>
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
                  {data
                    .filter((event: EventProps) => {
                      if (renderMonday) return event.dayOfWeek === "monday";
                      if (renderTuesday) return event.dayOfWeek === "tuesday";
                      if (renderWednesday) return event.dayOfWeek === "wednesday";
                      if (renderThursday) return event.dayOfWeek === "thursday";
                      if (renderFriday) return event.dayOfWeek === "friday";
                      if (renderSaturday) return event.dayOfWeek === "saturday";
                      if (renderSunday) return event.dayOfWeek === "sunday";
                      return true;
                    })
                    .map((item: any, index: number) => (
                      <div className={`inside`} key={index}>
                        <div className={`hour${getActualDay(item)}`}>
                          <span className="spanHour">
                            {item.createdAt.substring(11, 16)}
                            <br />
                          </span>
                        </div>
                        <div className="card">
                          <div className={`line${getActualDay(item)}`}>
                            <span className="span">{item.description}</span>
                          </div>
                          <Button
                            onClick={() => delEventById(item._id)}
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
