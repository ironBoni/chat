import React, { useState, useEffect } from 'react'
import './Contact.css';
import { chats } from "../../Data/data";

const Contact = (props) => {
     const { userInfo, setChosenChat } = props;
     const [lastMsg, setLastMsg] = useState('');
     const [lastMsgTime, setLastMsgTime] = useState('');
     var myUsername = localStorage.getItem('username');

     useEffect(() => {
     chats.forEach(chatData => {
        chatData.participicants.forEach(participicant => {
            if(participicant == userInfo.username && chatData.participicants.includes(myUsername)) {
                Math.max.apply(Math, chatData.messages.map((msg => {
                    setLastMsg(msg.text);
                    setLastMsgTime(msg.writtenIn.toLocaleDateString() + " "+ 
                    msg.writtenIn.toLocaleTimeString().substring(0, 5));
                    return;
                })));
                return;
            }
        })
     })});

    return (
        <div className='contact' onClick={() => setChosenChat(userInfo)}>
            <img className='user-image' src={userInfo.profileImage}></img>
            <span className='contact-name'>{userInfo.name}</span>
            <span className='contact-message'>{lastMsg}</span>
            <span className='time-sent'>{lastMsgTime}</span>
        </div>
    )
}

export default Contact;