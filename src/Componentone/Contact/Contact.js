import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');

    return (
        <div className='contact'>
            <img className='user-image' src="/profile/noam.jpg"></img>
            <span className='contact-name'>Noam Cohen</span>
            <span className='message'>I like tennis</span>
            <span className='time-sent'>10:30</span>
        </div>
    )
}

export default Contact;