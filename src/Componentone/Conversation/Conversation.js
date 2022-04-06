import React, { useEffect, useState } from 'react'
import MessageField from '../MessageField/MessageField';
import UserImage from '../UserImage/UserImage';
import './Conversation.css';
import { chats } from '../../Data/data';

const Conversation = (props) => {
    const [msg, setMsg] = useState("");
    const [msgList, setMsgList] = useState([]);
    const { chosenChat } = props;
    const { userData } = props;
    var myUsername = localStorage.getItem('username');


    useEffect(() => {
        var shouldBreak = false;
        chats.forEach(chatData => {
            if (chatData.participicants.includes(myUsername)
                && chatData.participicants.includes(chosenChat.username)) {
                setMsgList(chatData.messages);
                shouldBreak = true;
                return;
            }
            if (shouldBreak) {
                return;
            };
        })
    });



    const onEnter = (e) => {
        if (e.key === "Enter") {
            const newMessages = [...msgList];
            var message;
            var msgListInDb;

            // calculates the id of the last msg
            chats.forEach(chatData => {
                chatData.participicants.forEach(participicant => {
                    if (participicant == chosenChat.username && chatData.participicants.includes(myUsername)) {
                        message = Math.max.apply(Math, chatData.messages.map((msg => {
                            msgListInDb = chatData.messages;
                            return msg.id;
                        })));
                        return;
                    }
                })
            });

            var newMsg = {
                id: message.id + 1,
                type: "text",
                text: msg,
                senderUsername: myUsername,
                writtenIn: new Date()
            };

            newMessages.push(newMsg);
            msgListInDb.push(newMsg)
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
                {msgList?.map((msg, key) => (
                    <MessageField text={msg.text} senderUsername={msg.senderUsername} key={key}>
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