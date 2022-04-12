import React, { useState } from 'react'
import './Chat.css';
import ChatList from '../ChatList/ChatList'
import Conversation from '../Conversation/Conversation'
import Welcome from '../Welcome/Welcome';

const Chat = () => {
    const [chosenChat, setChosenChat] = useState();
    return (
        <div className="container-fluid">
        <div className='row no-gutters rounded-lg shadow'>
            <ChatList setChosenChat={setChosenChat} />   
            {chosenChat ?
                <Conversation chosenChat={chosenChat}/>
                : <Welcome />}
                </div>
        </div>
    )
}

export default Chat;