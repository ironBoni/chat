import React, { useState, useEffect } from 'react'
import './LightContact.css';
import { chats } from "../../Data/data";

const LightContact = (props) => {
    const { userInfo, setChosenChat } = props;
    const [lastMsg, setLastMsg] = useState('');
    const [lastMsgTime, setLastMsgTime] = useState('');
    var myUsername = localStorage.getItem('username');

    useEffect(() => {
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
                    setLastMsg(message.text);
                    setLastMsgTime(message.writtenIn.toLocaleDateString() + " " +
                        message.writtenIn.toLocaleTimeString().substring(0, 5));
                    return;
                }
            })
        })
    });

    const addUserAsFriend = (userInfo) => {
        chats.push({
            chatId: Math.floor(1000*Math.random() + 200),
            participicants: [userInfo.username, myUsername],
            messages: []    
        });
        var newContacts = [...props.contactsList];
        newContacts.push(userInfo);
        props.setContactList(newContacts);    
        props.setShowModal(false);
    };

    return (
        <div className='contact' onClick={() => addUserAsFriend(userInfo)}>
            <img className='profile-image' src={userInfo.profileImage}></img>
            <div className='text'>
                <h6 className='contact-name'>{userInfo.nickname}</h6>
                <p className='contact-message'>username: {userInfo.username}</p>
            </div>
        </div>
    )
}

export default LightContact;