import "./LogInForm.css";
import validate from "./validateUser";
import useForm from "../SignInPage/UseForme";
import React, { useState } from "react";
const LogInForm = ({submitFormUser}) => {
  
  const { handleChange, values,handleSubmit,errors } = useForm(submitFormUser,validate)


  return (
    <form id="LogIn" className="input-form" onSubmit={handleSubmit}>
      <input type="text"
       className="input-field"
        placeholder="User Name"
        name="username"
        value={values.username}
        onChange={handleChange}
        ></input>
        {<p className="error" >{errors.username}</p>}
      <input type="password"
       className="input-field"
        placeholder="Enter Password" 
        name="password" 
        value={values.password}
        onChange={handleChange} 
        ></input>
        {<p className="error" >{errors.password}</p>}
      <input type="checkbox" className="check-box"></input><span>Remember Me</span>
      <button type="submit" className="submit-btn" >Log In</button>
    </form>
  );
}
export default LogInForm;