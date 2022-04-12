import React, { useState, useEffect } from 'react'
import './ChatList.css';
import Contact from '../Contact/Contact'
import { users, chats } from '../../Data/data'
import { Modal } from 'react-bootstrap';
import LightContact from '../LightContact/LightContact'

const ChatList = (props) => {
    var username = localStorage.getItem('username');
    var newContacts = [];
    // goes over the chat and find the contacts he talked with.
    chats.forEach(chat => {
        if (chat.participicants.includes(username)) {
            let contactUser = chat.participicants.filter(p => p !== username)[0];
            let contactData = users.filter((user) => user.username === contactUser)[0];
            newContacts.push(contactData)
        }
    })


    const [usersList, setUsersList] = useState(users);
    const [contanctsLst, setContactLst] = useState(newContacts);
    const [userImage, setUserImage] = useState('');
    const [nickName, setNickname] = useState('');
    const [showImageModal, setShowImageModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);

    useEffect(() => {
        var username = localStorage.getItem('username');
        var userData = users.filter((user) => user.username === username)[0];

        setUserImage(userData.profileImage);
        setNickname(userData.nickname);
    })

    return (
        <div className='col-3 border-right'>
            <div className='settings-tray'>
                <button className='click-button' onClick={() => setShowImageModal(true)}>
                    <img className='user-image' src={userImage}></img></button>
                <span className='nickname'>{nickName}</span>
                <Modal show={showImageModal} centered onHide={() => setShowImageModal(false)}>
                    <Modal.Header closeButton className='header'>
                        {nickName}
                    </Modal.Header>
                    <Modal.Body><img src={userImage} className='big-image'></img></Modal.Body>
                </Modal>
                <span className="settings-tray--right float-right">
                    <i className="bi bi-person-plus">
                        <button className='click-button' onClick={() => setShowAddModal(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-person-plus" viewBox="0 0 16 16">
                                <path
                                    d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                                <path fillRule="evenodd"
                                    d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"></path>
                            </svg>
                        </button>
                        <Modal show={showAddModal} centered onHide={() => setShowAddModal(false)}>
                            <Modal.Header closeButton className='header'>
                                Please choose user to add:
                            </Modal.Header>
                            <Modal.Body>{
                                usersList.map((user, key) => {
                                    if (user.username != username) {
                                        var isFriendOfHim = false;
                                        for (const chatData of chats) {
                                            if (chatData.participicants.includes(user.username) &&
                                                chatData.participicants.includes(username))
                                                isFriendOfHim = true;
                                        }
                                        if (!isFriendOfHim)
                                            return <LightContact userInfo={user} setChosenChat={props.setChosenChat} key={key}
                                                    setContactList = {setContactLst} contactsList = {contanctsLst}
                                                    setShowModal = {setShowAddModal}/>
                                    }
                                })
                            }</Modal.Body>
                        </Modal>
                    </i>
                </span>
            </div>
            <div className="search-box">
                <div className='search-container'>
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                        </svg>
                    </i>
                    <input type="text" placeholder="Search here"></input>
                </div>
            </div>

            <div className='contact-list flex-grow-1'>
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