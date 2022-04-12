import React, { useState } from 'react'
import './MessageField.css'
import { Modal } from 'react-bootstrap';

export default function MessageField(props) {
    var myUsername = localStorage.getItem('username');
    const [showImageModal, setShowImageModal] = useState(false);

    var content;
    if (props.type === "text")
        content = props.text

    else if (props.type === "audio") {
        content = (<audio className='audio' controls src={props.text} />)
    }
    else if (props.type == "image") {
        content = (<button className='click-button' onClick={() => setShowImageModal(true)}>
            <img src={props.text} className="photo"></img></button>)
    } else if (props.type == "video") {
        content = (<video className="video-message" controls src={props.text}></video>)
    }
    else {
        content = ((<a href={props.text} download={props.fileName} className='link'>
            <div className='file-div'>
                <img src='/images/file-icon.png' className='file-image'></img>
                <div className='name-div'>{props.fileName}</div>
                <div className='file-ext'>{props.fileName.split('.')[1].toUpperCase()}</div>
            </div></a>))
    }
    return (
        <div>
            <div className={props.senderUsername === myUsername ? 'message-div' : 'message-div-end'}>
                <div id="main-div" className={props.senderUsername === myUsername ? 'message' : 'message-not-mine'}>
                    {content}
                </div>
            </div>
            <Modal show={showImageModal} centered onHide={() => setShowImageModal(false)}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body><img src={props.text} className='big-image'></img></Modal.Body>
            </Modal>
        </div>
    )
}