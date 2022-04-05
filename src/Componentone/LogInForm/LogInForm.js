import "./LogInForm.css";
import React, { useState } from "react";
const LogInForm = ({data}) => {
function tdd(){
  console.log(data)

}
  return (
    <form id="LogIn" className="input-form" >
      <input type="text" className="input-field" placeholder="User Name" name="usersName" required></input>
      <input type="password" className="input-field" placeholder="Enter Password" name="password" required></input>
      <input type="checkbox" className="check-box"></input><span>Remember Me</span>
      <button type="submit" className="submit-btn" onClick={tdd} >Log In</button>
    </form>
  );
}
export default LogInForm;