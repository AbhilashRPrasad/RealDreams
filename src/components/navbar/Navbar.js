import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";
import { Button } from "@mui/material";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="navbar">
      <div className="container">
        <h1>
          <span>
            <BsFillHouseFill />
            Real
          </span>
          Dreams
        </h1>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/buy">Buy Property</NavLink>
          </li>
          <li>
            <NavLink to="/register">Sell Property</NavLink>
          </li>
          <li>
            <NavLink to="/loan">Loans</NavLink>
          </li>
          {/* <li>
            <select name="" id="">
              <option value="1">Loans</option>
              <option value="2"> for Property</option>
              <option value="2">for Business</option>
            </select>
          </li> */}

          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact us</NavLink>
          </li>
        </ul>
        <Button variant="outlined">
          <Link to="/login">Log in</Link>
        </Button>
        <Button variant="contained">
          <Link to="/register" style={{ color: "white" }}>
            Register
          </Link>
        </Button>
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <FaRegTimesCircle className="icon" />
          ) : (
            <HiOutlineMenuAlt4 className="icon" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
