import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="outDiv">
            <div className="form-floating mb-3">
                <h1 className="header">SignIn</h1>
                <table>
                    <div><input placeholder="" class="form-control" onChange={(event) => setName(event.target.value)}></input></div>
                    <div className="input-second"><input placeholder="" class="form-control" onChange={(event) => setName(event.room.value)}></input></div>
                </table>
            </div>
            <Link to={`/chat?name=${name}&room=${room}`} onClick={event => !(name && room) ? event.preventDefault() : null}>
                <button type="submit" className="btn btn-primary">Sign In</button>
            </Link>
        </div>
    )
}

export default SignIn;