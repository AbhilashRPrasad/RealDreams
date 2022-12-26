import React from "react";
import "./Best.css";
import Apt1 from "../../assets/apt1.jpeg";
import Apt2 from "../../assets/apt2.jpeg";
import Apt3 from "../../assets/apt3.jpeg";
import { Button } from "@mui/material";

function Best() {
  return (
    <div className="best">
      <h1>Find Best Rated Properties</h1>
      <div>
        <p>
          <span className="bold">All</span>
        </p>
        <p>Commercial</p>
        <p>Residential</p>
        <p>Agricultural</p>
      </div>

      <div className="container">
        <img src={Apt1} alt="apt1" />
        <img src={Apt2} alt="apt2" />
        <img src={Apt3} alt="apt3" />
      </div>
      <Button variant="contained">View all</Button>
    </div>
  );
}

export default Best;
