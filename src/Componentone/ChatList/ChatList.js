import React, { useState } from 'react'
import './ChatList.css';
import Contact from '../Contact/Contact'
import { contacts } from '../../Data/data'
import $ from 'jquery'

const ChatList = (props) => {
    const [contanctsLst, setContactLst] = useState(contacts);

    return (
        
            <div className='col-md-4 border-right'>
                <div className='settings-tray'>
                    <img className='profile-image' src="/profile/noam.jpg" alt='Profile image'>
                    </img>
                    <span className="settings-tray--right float-right">
                        <i className="bi bi-person-plus">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"></path>
                            </svg>
                        </i>
                    </span>
                </div>
                <div className="search-box">
                    <div className='search-container'>
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                            </svg>
                        </i>
                        <input type="text" placeholder="Search here" ></input>

                    </div>
                </div>

                {
                    contanctsLst.map((user, key) => {
                        return <Contact userInfo={user} setChosenChat={props.setChosenChat} key={key} />
                    })
                }

            </div>
        
    )
}

export default ChatList;