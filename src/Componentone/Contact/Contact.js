import React, { useState } from 'react'
import './Contact.css';

const Contact = (props) => {
     const { userInfo, setChosenChat } = props;

    return (
        <div className='contact' onClick={() => setChosenChat(userInfo)}>
            <img className='user-image' src={userInfo.profileImage}></img>
            <span className='contact-name'>{userInfo.name}</span>
            <span className='contact-message'>{userInfo?.lastMsg}</span>
            <span className='time-sent'>{userInfo?.lastMsgTime}</span>
        </div>
    )
}

export default Contact;