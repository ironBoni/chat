import React, { useState } from 'react'
import './Chat.css';
import ChatList from '../ChatList/ChatList'
import Conversation from '../Conversation/Conversation'
import Welcome from '../Welcome/Welcome';
import { contacts } from '../../Data/data';

const Chat = () => {
    const [chosenChat, setChosenChat] = useState();
    return (
        <div className="container-chat">
            <ChatList setChosenChat={setChosenChat} />
            {chosenChat ?
                <Conversation chosenChat={chosenChat}/>
                : <Welcome />}
        </div>
    )
}

export default Chat;