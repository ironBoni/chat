import React, { useState } from "react";
import "./RegisterInForm.css"
import useForm from "../SignInPage/UseForme";
import validate from "./validateRegInfo";


const RegisterInForm = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors} = useForm(submitForm, validate)

 
  const handleImage = (event) => {

   
    
    const fileReader = new FileReader();
      console.log(fileReader.readyState )
    fileReader.onload = () => {

      if (fileReader.readyState === 2) {
        console.log("Converted Base64 version is ")
        
      }

      fileReader.readAsDataURL(event.target.file[0])
      console.log(event.target.file[0]);

  

    }
    console.log(values);
  }
  return (
    <form id="Register" className="input-form" name="Register" onSubmit={handleSubmit}>
      <input type="text"
        className="input-field"
        placeholder="User Name"
        name="username"
        value={values.username}
        onChange={handleChange}
      ></input>
      {<p className="error" >{errors.username}</p>}
      
      <input type="text"
        className="input-field"
        placeholder="nick name"
        name="nickname"
        value={values.nickname}
        onChange={handleChange}
      ></input>
      {<p className="error" >{errors.nickname}</p>}

      <input type="password"
        className="input-field"
        placeholder="Enter Password"
        name="password"
        value={values.password}
        onChange={handleChange}
      ></input>
      {<p className="error" >{errors.password}</p>}

      <input type="password"
        className="input-field"
        placeholder="Confurm Password"
        name="confPassword"
        value={values.confPassword}
        onChange={handleChange}
      ></input>
      {<p className="error" >{errors.confPassword}</p>}

      <input type="file"  name="image-upload"  onChange={handleImage}></input>
      

      {/* <button type="button" className="pic-btn">Uplod Picture</button> */}

      <button type="submit" className="submit-btn">Register</button>
    </form>
  );

}

export default RegisterInForm;