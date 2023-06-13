import React from "react";

import './Navbar.css';

interface NavbarProps{
  weekCheck: {
    monday?: () => void
    tuesday?: () => void
    wednesday: () => void
    thursday: () => void
    friday?: () => void
    saturday?: () => void
    sunday?: () => void
  }
}

const Navbar: React.FC<NavbarProps> = ({weekCheck}: NavbarProps) => {
  return (
    <nav className="navbar">
      <ul className="list">
        <li onClick={weekCheck.monday} className="mondayCard">
          <p>Monday</p>
        </li>

        <li  onClick={weekCheck.tuesday} className="tuesdayCard">
          <p>Tuesday</p>
        </li>

        <li onClick={weekCheck.wednesday} className="wednesdayCard">
          <p>Wednesday</p>
        </li>
        <li onClick={weekCheck.thursday} className="thursdayCard">
          <p>Thursday</p>
        </li>
        <li onClick={weekCheck.friday} className="fridayCard">
          <p>Friday</p>
        </li>
        <li onClick={weekCheck.saturday} className="saturdayCard">
          <p>Saturday</p>
        </li>
        <li onClick={weekCheck.sunday} className="sundayCard">
          <p>Sunday</p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
