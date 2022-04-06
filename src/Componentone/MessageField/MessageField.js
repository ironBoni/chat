import React from 'react'
import './MessageField.css'

export default function MessageField(props) {
    var myUsername = localStorage.getItem('username');
    return (
        <div className={props.senderUsername === myUsername ? 'message-div' : 'message-div-end'}>
            { props.type === "text" ? (<div className={props.senderUsername === myUsername ? 'message' : 'message-not-mine'}>
                {props.text}
            </div>) : <audio controls src={props.text} /> }
        </div>
    )
}
