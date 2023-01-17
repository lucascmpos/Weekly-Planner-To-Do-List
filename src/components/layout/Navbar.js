import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="list">
        <li className="item">
          <Link to="/monday">Monday</Link>
        </li>
        <li className="item">
        <Link to="/tuesday">Tuesday</Link>
        </li>
        <li className="item">
          <Link to="/wednesday">Wednesday</Link>
        </li>
        <li className="item">
          <Link to="/thursday">Thursday</Link>
        </li>
        <li className="item">
          <Link to="/friday">Friday</Link>
        </li>
        <li className="item">
          <Link to="/saturday">Saturday</Link>
        </li>
        <li className="item">
          <Link to="/sunday">Sunday</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
