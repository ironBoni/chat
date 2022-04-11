import React, { useEffect, useState } from 'react'
import MessageField from '../MessageField/MessageField';
import UserImage from '../UserImage/UserImage';
import './Conversation.css';
import { chats } from '../../Data/data';
import { Modal } from 'react-bootstrap';

const Conversation = (props) => {
    const [msg, setMsg] = useState("");
    const [msgList, setMsgList] = useState([]);
    var audioPieces = [];
    const [showAudioModal, setShowAudioModal] = useState(false);
    const [showFileModal, setShowFileModal] = useState(false);
    const [fileSrc, setFileSrc] = useState("");

    const [stream, setStream] = useState({
        canAccess: false,
        recorder: null,
        errors: ""
    });

    const [recordInfo, setRecordInfo] = useState({
        isRecordActive: false,
        isAvailable: false,
        audioUrl: ""
    });

    const { chosenChat } = props;
    var myUsername = localStorage.getItem('username');
    var canAddRecord = false;
    var recorder;
    useEffect(() => {
        var shouldBreak = false;
        chats.forEach(chatData => {
            if (chatData.participicants.includes(myUsername)
                && chatData.participicants.includes(chosenChat.username)) {
                setMsgList(chatData.messages);
                shouldBreak = true;
                return;
            }
            if (shouldBreak) {
                return;
            };
        })
    });

    const sendMessage = () => {
        const newMessages = [...msgList];
        var message;
        var msgListInDb;
        // get last message
        chats.forEach(chatData => {
            chatData.participicants.forEach(participicant => {
                if (participicant == chosenChat.username && chatData.participicants.includes(myUsername)) {
                    message = Math.max.apply(Math, chatData.messages.map((msg => {
                        msgListInDb = chatData.messages;
                        return msg.id;
                    })));
                    return;
                }
            })
        });

        var newMsg = {
            id: message.id + 1,
            type: "text",
            text: msg,
            senderUsername: myUsername,
            writtenIn: new Date()
        };

        newMessages.push(newMsg);
        msgListInDb.push(newMsg)
        setMsgList(newMessages);
        setMsg("");
    };

    const onSend = (e) => {
        sendMessage();
    }

    const onEnter = (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    }

    var updateAudioInGuiMessages = function () {
        const audioUrl = URL.createObjectURL(new Blob(audioPieces, { 'type': 'audio/webm' }));

        setRecordInfo({
            isRecordActive: false,
            isAvailable: true,
            audioUrl
        });

        var newMessages = [...msgList];
        var newId;
        var msgListInDb;
        // get last message - for audio
        chats.forEach(chatData => {
            chatData.participicants.forEach(participicant => {
                if (participicant == chosenChat.username && chatData.participicants.includes(myUsername)) {
                    newId = Math.max.apply(Math, chatData.messages.map((msg => {
                        msgListInDb = chatData.messages;
                        return msg.id;
                    })));
                    return;
                }
            })
        });

        newId += 1;
        var newMsg = {
            id: newId,
            type: "audio",
            text: audioUrl,
            senderUsername: myUsername,
            writtenIn: new Date()
        };

        if ((msgListInDb.filter(msg => msg.text === newMsg.text).length === 0)
            && canAddRecord) {
            newMessages.push(newMsg);
            setMsgList(newMessages);
            msgListInDb.push(newMsg);
            canAddRecord = false;
        }
    }

    const setModalFileToShow = (e) => {
        setShowFileModal(true);
    }

    const startRecord = (e) => {
        if (!recordInfo.isRecordActive) {
            audioPieces = [];
            setShowAudioModal(true);
            navigator.mediaDevices.getUserMedia({ audio: true }).then((m) => {
                try {
                    var audioRecorder = new MediaRecorder(m, {
                        mimeType: "audio/webm"
                    });
                    setStream({
                        ...stream,
                        access: true,
                        recorder: audioRecorder
                    });
                    audioRecorder.start();
                } catch (error) {
                }
                canAddRecord = true;
                audioRecorder.ondataavailable = function (event) {
                    var newPieces = [...audioPieces];
                    newPieces.push(event.data);
                    audioPieces = newPieces;
                    updateAudioInGuiMessages();
                }

                audioRecorder.onstop = updateAudioInGuiMessages;
            });
        }
    }

    const stopRecord = (e) => {
        setShowAudioModal(false);
        stream.recorder.stop();
    }

    var uploadFile = (e) => {
        console.log(document.getElementById('chooser').files)
    }

    return (
        <div className="col-md-8">
            <div className='conversation-container'>
                <div className='user-title'>
                    <UserImage src={chosenChat.profileImage} />
                    {chosenChat.name}
                </div>
                <div className='message-container'>
                    {msgList?.map((msg, key) => (
                        <MessageField type={msg.type} text={msg.text} senderUsername={msg.senderUsername} key={key}>
                        </MessageField>
                    ))}
                </div>
            </div>
            <div className='chat-box'>
                <div className='search-container'>
                    <button className='click-button'
                        onClick={startRecord}>
                        <img className='button-image' src="/images/record.png"></img></button>
                    <button className='click-button'
                        onClick={setModalFileToShow}>
                        <img className='button-image' src="/images/attach.jpg"></img></button>
                    {/*Record Audio Modal*/}
                    <Modal show={showAudioModal} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Recording...</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><button className='stop-button' onClick={stopRecord}><img src='/images/stop-button.png' className='stop-button-image'>
                        </img></button></Modal.Body>
                    </Modal>

                    {/*Upload File Modal*/}
                    <Modal show={showFileModal} centered dialogClassName="file-modal">
                        <Modal.Header closeButton>
                            <Modal.Title>Upload file</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {/*Here the file modal should appear*/}
                            <input type="file" id="chooser" onChange={uploadFile}></input>
                        </Modal.Body>
                    </Modal>

                    <input className='search-textbox' placeholder='Search in chats'
                        value={msg} onChange={(event) => setMsg(event.target.value)}
                        onKeyDown={onEnter}></input>
                </div>
                <button className='click-button' onClick={onSend}><img src='/images/send.png' className='button-image'></img></button>
            </div>
        </div>
    )
}

export default Conversation;