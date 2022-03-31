import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
import img from "../../imgs/webIcon.png";

const SignIn = () => {
  const [users, setUsers] = useState({name:"",paswor:"",DisplayName:""});

  const getValue = (event)=>{
    console.log(event.target.value)
    const name= event.target.name;
    const value= event.target.value;
    setUsers({[name]:value});
    
  }


const submitForm = (event)=>{
  event.prevenDefault()
  console.log("goooood")
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
            <input type="username" className="form-control" id="UserName" onChange={getValue} name="username"/>
          </div>
          <div className="mb-3">
            <label htmlFor="passwordId" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="passwordId" onChange={getValue} name='password'/>
          </div>
        </div>
        
        <div class="grid" >
          <button class="g-col-2" type="submit" className="btn btn-primary" onClick={submitForm}>
            Submit
          </button>
          <button class="g-col-2" type="submit" className="btn btn-primary ">
            Register
          </button>
        </div>

      </form>
    </div>

  );
};

export default SignIn;
