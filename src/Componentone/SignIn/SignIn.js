import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
import img from "../../imgs/webIcon.png";
import { render } from "@testing-library/react";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

  }


  login() {
    document.getElementById("LogIn").style.left = "50px"
    document.getElementById("Register").style.left = "450px"
    document.getElementById("btn").style.left = "0"
  }
  register() {

    document.getElementById("LogIn").style.left = "-400px"
    document.getElementById("Register").style.left = "50px"
    document.getElementById("btn").style.left = "110px"
  }



  render() {


    return (
      <div className="hero">
        
        <div className="form-box">
        <div className="brand_logo_container d-flex justify-content-center">
          <img className="logo" src={img}></img>
        </div>
          <div className="button-box d-flex justify-content-center">
            <div id="btn"></div>
            <button type="button" className="toggle-btn" onClick={this.login}>Log In</button>
            <button type="button" className="toggle-btn" onClick={this.register}>Register</button>
          </div>
          <form id="LogIn" className="input-form">
            <input type="text" className="input-field" placeholder="User Name" required></input>
            <input type="password" className="input-field" placeholder="Enter Password" required></input>
            <input type="checkbox" className="check-box"></input><span>Remember Me</span>
            <button type="submit" className="submit-btn">Log In</button>
          </form>
          <form id="Register" className="input-form">
            <input type="text" className="input-field" placeholder="User Name" required></input>
            <input type="password" className="input-field" placeholder="Enter Password" required></input>
            <input type="password" className="input-field" placeholder="Confurm Password" required></input>
            <div >

              <input type="checkbox" className="check-box"></input><span>I agree</span>
              <button type="submit" className="pic-btn">Uplod Picture</button>
            </div>


            <button type="submit" className="submit-btn">Register</button>
          </form>


        </div>
      </div>

    )

  }

};


export default SignIn;
