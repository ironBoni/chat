import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './ChatList.css';

const ChatList = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div>
            <div className='profile'>
                <div className='user-image'>
                </div>
            </div>            
        </div>
    )
}

export default ChatList;