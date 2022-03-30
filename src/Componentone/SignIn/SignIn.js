import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
import img from "../../imgs/webIcon.png";

const SignIn = () => {
  const [users, setUsers] = useState("");
  const form={
    name :"",
    password:"",
    DisplayName:"",
  }
  const getName = (event)=>{
      form.name=event.target.value
  }
  const getPasword = (event)=>{
    form.password=event.target.value
}
const getDiaplay = (event)=>{
  form.DisplayName=event.target.value
}

const submitForm = (event)=>{
  setUsers({users: form})
  console.log(useState)
}
console.log(users)
  return (
    <div className="form-content d-flex justify-content-center align-item-center">
      <form className="rounded p-4 p-sm-3">
        <div className="justify-content-center align-item-center">
          <img className="logo justify-content-center align-item-center" src={img}></img>
        </div>
        <div>
          <div className="mb-3">
            <label htmlFor="UserName" className="form-label">
              User name
            </label>
            <input type="username" className="form-control" id="UserName" onChange={getName}/>
          </div>
          <div className="mb-3">
            <label htmlFor="passwordId" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="passwordId" onChange={getPasword}/>
          </div>
          <div className="mb-3">
            <label htmlFor="DisplayNameId" className="form-label">
              Display name
            </label>
            <input type="password" className="form-control" id="DisplayNameId" onChange={getDiaplay}/>
          </div>
        </div>

        <div class="grid" >
          <button type="submit" className="btn btn-primary" onClick={submitForm}>
            Submit
          </button>
          <button type="submit" className="btn btn-primary ">
            Register
          </button>
        </div>

      </form>
    </div>

  );
};

export default SignIn;
