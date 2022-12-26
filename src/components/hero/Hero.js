import React from "react";
import "./Hero.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "@mui/material";

function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <h1>Find the perfect place</h1>
        <p className="search-text">
          Search the largest selection of properies here
        </p>
        <form className="search">
          <div>
            <select className="select">
              <option value="mys">Mysuru</option>
              <option value="Blr">Bengaluru</option>
            </select>
          </div>
          <div>
            <input type="text" placeholder="Enter Keyword" />
          </div>
          <div className="radio">
            {/* <input type="radio" name="choose" checked />
            <label htmlFor="buy">Buy</label>
            <input type="radio" name="choose" />
            <label htmlFor="rent">Rent</label> */}
            <button type="submit">
              <AiOutlineSearch className="icon" />
            </button>
          </div>
        </form>
        <div className="prop-ad">
          <p>----Are you a property owner ?----</p>
          <Button variant="contained" color="success">
            Post Your Property Ad
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
