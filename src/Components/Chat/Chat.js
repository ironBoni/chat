import React, { useState } from 'react'
import './Chat.css';
import ChatList from '../ChatList/ChatList'
import Conversation from '../Conversation/Conversation'
import Welcome from '../Welcome/Welcome';

const Chat = () => {
    const [notifyMessageSent, setNotifyMessageSent] = useState(0);

    const [chosenChat, setChosenChat] = useState();
    return (
        <div className="container-fluid">
            <div className='row no-gutters rounded-lg shadow main'>
                <ChatList setChosenChat={setChosenChat} notifyMessageSent={notifyMessageSent}
                    setNotifyMessageSent={setNotifyMessageSent} />
                {chosenChat ?
                    <Conversation chosenChat={chosenChat} notifyMessageSent={notifyMessageSent}
                        setNotifyMessageSent={setNotifyMessageSent} />
                    : <Welcome />}
            </div>
        </div>
    )
}

export default Chat;