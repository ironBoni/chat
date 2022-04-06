import React, { useState } from 'react'
import './Contact.css';

const Contact = (props) => {
    const { userInfo, setChosenChat } = props;

    return (
        <div className='contact' onClick={() => setChosenChat(userInfo)}>
            <img className='profile-image' src={userInfo.profileImage}></img>
            <div className='text'>
                <h6 className='contact-name'>{userInfo.name}</h6>
                <p className='contact-message'>{userInfo?.lastMsg}</p>
            </div>
            <span className='time small'>{userInfo?.lastMsgTime}</span>
        </div>
    )
}

export default Contact;