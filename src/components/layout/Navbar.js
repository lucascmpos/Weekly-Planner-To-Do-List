import React from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <ul className="list">
        <li onClick={props.weekCheck.monday} className="mondayCard">
          <p>Monday</p>
        </li>

        <li  onClick={props.weekCheck.tuesday} className="tuesdayCard">
          <p>Tuesday</p>
        </li>

        <li onClick={props.weekCheck.wednesday} className="wednesdayCard">
          <p>Wednesday</p>
        </li>
        <li onClick={props.weekCheck.thursday} className="thursdayCard">
          <p>Thursday</p>
        </li>
        <li onClick={props.weekCheck.friday} className="fridayCard">
          <p>Friday</p>
        </li>
        <li onClick={props.weekCheck.saturday} className="saturdayCard">
          <p>Saturday</p>
        </li>
        <li onClick={props.weekCheck.sunday} className="sundayCard">
          <p>Sunday</p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
