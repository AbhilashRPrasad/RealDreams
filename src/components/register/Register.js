import React from "react";
import Navbar from "../navbar/Navbar";
import "./Register.css";
function Register() {
  return (
    <div>
      <Navbar />
      <div className="register">
        <div className="title">Registration Form</div>
        <form>
          <div className="user-details">
            <div className="input-box">
              <span className="details">Full Name</span>
              <input type="text" name="fullname" autoComplete="off" required />
            </div>
            <div className="input-box">
              <span className="details">Father Name</span>
              <input
                type="text"
                name="fathername"
                autoComplete="off"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Date of Birth</span>
              <input
                type="date"
                name="dateofbirth"
                autoComplete="off"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Address as per Aadhar</span>
              <input type="text" name="address" autoComplete="off" required />
            </div>
            <div className="input-box">
              <span className="details">Create Password</span>
              <input
                type="password"
                name="password"
                autoComplete="off"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Confirm Password</span>
              <input
                type="password"
                name="password"
                autoComplete="off"
                required
              />
            </div>
          </div>
          <div className="interest-details">
            <input type="radio" name="interest" id="dot-1" />
            <input type="radio" name="interest" id="dot-2" />
            <input type="radio" name="interest" id="dot-3" />
            <span className="interset-title">Interested in</span>
            <div className="category">
              <label htmlFor="dot-1">
                <span className="dot one"></span>
                <span className="interest">Buy </span>
              </label>
              <label htmlFor="dot-2">
                <span className="dot two"></span>
                <span className="interest">Sell </span>
              </label>
              <label htmlFor="dot-3">
                <span className="dot three"></span>
                <span className="interest">Loan</span>
              </label>
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
