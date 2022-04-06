import React, { useState } from 'react'
import './ChatList.css';
import Contact from '../Contact/Contact'
import { contacts } from '../../Data/data'

const ChatList = (props) => {
    const [contanctsLst, setContactLst] = useState(contacts);

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