import React from 'react'
import './Welcome.css';

export default function Welcome() {
    return (
        <div className='welcome'>
            <img className='welcome-image' src='/standby.jpeg'></img>
            <span className='span-make-sure'>Make sure that your phone is connected.</span>
        </div>
    )
}
