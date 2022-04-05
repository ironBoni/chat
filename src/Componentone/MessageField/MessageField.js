import React from 'react'
import './MessageField.css'

export default function MessageField(props) {
    return (
        <div className={props.senderId === 0 ? 'message-div' : 'message-div-end'}>
            <div className={props.senderId === 0 ? 'message' : 'message-not-mine'}>
                {props.text}
            </div>
        </div>
    )
}
