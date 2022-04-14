import React, { useState, useEffect } from 'react'
import './Contact.css';
import { chats } from "../../Data/data";

const Contact = (props) => {
    const { userInfo, setChosenChat } = props;
    const [lastMsg, setLastMsg] = useState('');
    const [lastMsgTime, setLastMsgTime] = useState('');
    var myUsername = localStorage.getItem('username');

    useEffect(() => {
        updateLastMessage();
    });

    useEffect(() => {
        updateLastMessage();
    }, [props.notifyMessageSent]);
    

    function updateLastMessage(){
        chats.forEach(chatData => {
            chatData.participicants.forEach(participicant => {
                if (participicant == userInfo.username && chatData.participicants.includes(myUsername)) {
                    var maxDate = new Date(1970, 1, 1);
                    var message;

                    chatData.messages.forEach((msg => {
                        if (msg.writtenIn > maxDate) {
                            message = msg;
                            maxDate = msg.writtenIn;
                        }
                    }));

                    if (message == undefined)
                        return;
                    console.log(message)

                    setLastMsg(message.text);
                    setLastMsgTime(message.writtenIn.toLocaleDateString() + " " +
                        message.writtenIn.toLocaleTimeString().substring(0, 5));
                    return;
                }
            })
        })
    
}

    return (
        <div className='contact' onClick={() => setChosenChat(userInfo)}>
            <img className='profile-image' src={userInfo.profileImage}></img>
            <div className='text'>
                <h6 className='contact-name'>{userInfo.nickname}</h6>
                <p className='contact-message'>{lastMsg}</p>
            </div>
            <span className='time small float-right'>{lastMsgTime}</span>
        </div>
    )
}

export default Contact;