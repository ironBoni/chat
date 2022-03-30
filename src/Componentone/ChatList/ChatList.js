import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './ChatList.css';
import Contact from '../Contact/Contact'

const ChatList = () => {
    const [name, setName] = useState('');

    return (
        <div className='container'>
            <div className='profile'>
                <img className='user-image' src="/profile/noam.jpg">
                </img>
            </div>

            <div className="search-box">
                <div className='search-container'>
                    <img className="search-icon" src={"/search-icon.png"}>
                    </img>
                    <input className='search-textbox' placeholder='Search in chats'></input>
                </div>
            </div>
            <Contact/>
            <Contact/>
            <Contact/>
        </div>
    )
}

export default ChatList;