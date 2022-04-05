import React, { useEffect, useState } from 'react'
import MessageField from '../MessageField/MessageField';
import UserImage from '../UserImage/UserImage';
import './Conversation.css';
import { messages } from '../../Data/data';

const Conversation = (props) => {
    const [msg, setMsg] = useState("");
    const [msgList, setMsgList] = useState(messages);
    const { chosenChat } = props;
    const { userData } = props;
    
    const onEnter = (e) => {
        if (e.key === "Enter") {
            const newMessages = [...msgList];
            newMessages.push({
                id: 0,
                type: "text",
                text: msg,
                senderId: 0,
                writtenIn: "09:56"
            })
            setMsgList(newMessages);
            setMsg("");
        }
    }
    return (
        <div className='conversation-container'>
            <div className='user-title'>
                <UserImage src={chosenChat.profileImage} />
                {chosenChat.name}
            </div>
            <div className='message-container'>
                {msgList?.map((msg) => (
                    <MessageField text={msg.text} senderId={msg.senderId}>
                    </MessageField>
                ))}
            </div>
            <div className='chat-box'>
                <div className='search-container'>
                    <img className='emoji' src="/images/emoji.jpeg"></img>
                    <input className='search-textbox' placeholder='Search in chats'
                        value={msg} onChange={(event) => setMsg(event.target.value)}
                        onKeyDown={onEnter}></input>
                </div>
            </div>
        </div>
    )
}

export default Conversation;