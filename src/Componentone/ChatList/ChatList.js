import React, { useState, useEffect } from 'react'
import './ChatList.css';
import Contact from '../Contact/Contact'
import { contacts } from '../../Data/data'

const ChatList = (props) => {
    const [contanctsLst, setContactLst] = useState(contacts);
    const [userImage, setUserImage] = useState('');
    const [nickName, setNickname] = useState('');

    var shouldBreak = false;

    useEffect(() => {
        console.log(localStorage.getItem('username'))

        contacts.forEach((contact => {
            if (contact.username === localStorage.getItem('username')) {
                setUserImage(contact.profileImage);
                setNickname(contact.name);
                shouldBreak = true;
            }
            if (shouldBreak)
                return;
        }))
    })
    return (
        <div className='container'>
            <div className='profile'>
                <img className='user-image' src={userImage}></img>
                <div className='nickname'>{nickName}</div>
            </div>

            <div className="search-box">
                <div className='search-container'>
                    <img className="search-icon" src={"/search-icon.png"}>
                    </img>
                    <input className='search-textbox' placeholder='Search in chats'></input>
                </div>
            </div>
            <div>
                {
                    contanctsLst.map((user, key) => {
                        if (user.username != localStorage.getItem('username'))
                            return <Contact userInfo={user} setChosenChat={props.setChosenChat} key={key} />
                    })
                }
            </div>
        </div>
    )
}

export default ChatList;