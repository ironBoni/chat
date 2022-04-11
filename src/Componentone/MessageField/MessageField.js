import React from 'react'
import './MessageField.css'

export default function MessageField(props) {
    var myUsername = localStorage.getItem('username');
    var content;
    if (props.type === "text")
        content = props.text

    else if (props.type === "audio") {
        content = (<audio controls src={props.text} />)
    }
    else if (props.type == "image") {
        content = (<img src={props.text} className="photo"></img>)
    }
    else {
        content = ((<a href={props.text} download={props.fileName}>{props.fileName}</a>))
    }
    return (
        <div className={props.senderUsername === myUsername ? 'message-div' : 'message-div-end'}>
            <div className={props.senderUsername === myUsername ? 'message' : 'message-not-mine'}>
                {content}
            </div>
        </div>
    )
}
