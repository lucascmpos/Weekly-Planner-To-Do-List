import React from "react";
import Container from "./Container";
import { Link, NavLink } from "react-router-dom"

const Navbar = (props) => {
    return(
        <nav className="navbar">
            <Container>
            <ul className="list">
              <NavLink style={{ textDecoration: "none" }} to="/monday">
                <li className="mondayCard">
                  <p>Monday</p>
                </li>
              </NavLink>

              <NavLink style={{ textDecoration: "none" }} to="/tuesday">
                <li className="tuesdayCard">
                  <p>Tuesday</p>
                </li>
              </NavLink>

              <NavLink style={{ textDecoration: "none" }} to="/wednesday">
                <li className="wednesdayCard">
                  <p>Wednesday</p>
                </li>
              </NavLink>
              <NavLink style={{ textDecoration: "none" }} to="/thursday">
                <li className="thursdayCard">
                  <p>Thursday</p>
                </li>
              </NavLink>
              <NavLink style={{ textDecoration: "none" }} to="/friday">
                <li className="fridayCard">
                  <p>Friday</p>
                </li>
              </NavLink>
              <NavLink style={{ textDecoration: "none" }} to="/saturday">
                <li className="saturdayCard">
                  <p>Saturday</p>
                </li>
              </NavLink>
              <NavLink style={{ textDecoration: "none" }} to="/sunday">
                <li className="sundayCard">
                  <p>Sunday</p>
                </li>
              </NavLink>
            </ul>
            </Container>
          </nav>
    )
}

export default Navbar