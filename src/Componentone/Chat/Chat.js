import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Chat.css';
import ChatList from '../ChatList/ChatList'
import Conversation from '../Conversation/Conversation'

const Chat = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="container-chat">
            <ChatList/>
            <Conversation />
        </div>
    )
}

export default Chat;