import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="row justify-content-md-center mainDiv">
            <div className="row-fluid" >
                <div className="col-md-offset-4 col-md-4" id="box">
                    <h2>Login</h2>
                    <hr></hr>
                    <form className="form-horizontal" action=" " method="" id="contact_form">
                        <fieldset>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                        <input name="first_name" placeholder="Username" className="form-control" type="text"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                        <input name="email" placeholder="Password" className="form-control" type="text"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">

                                <div className="col-md-12">
                                    <button type="submit" className="btn btn-md btn-danger pull-right">Login </button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn;