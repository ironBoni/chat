import React, { useEffect, useState } from 'react'
import MessageField from '../MessageField/MessageField';
import UserImage from '../UserImage/UserImage';
import './Conversation.css';
import { chats, video_extensions, audio_extensions, image_extensions } from '../../Data/data';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Conversation = (props) => {
    const [msg, setMsg] = useState("");
    const [msgList, setMsgList] = useState([]);
    var audioPieces = [];
    var navigatePages = useNavigate();
    const [showAudioModal, setShowAudioModal] = useState(false);
    const [showFileModal, setShowFileModal] = useState(false);
    var isRecordActive = false;
    const [sTop, setSTop] = useState(0)
    const [voiceRecorder, setVoiceRecorder] = useState(null);

    const [showPictureModal, setShowPictureModal] = useState(false);

    const updateScroll = () => {
        var chat = document.getElementById('chat');
        chat.scrollTop = chat.scrollHeight;
        setSTop(2000);
    }

    const { chosenChat } = props;
    var myUsername = localStorage.getItem('username');
    var canAddRecord = false;

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
        setTimeout(updateScroll, 250);
    });

    const sendMessage = () => {
        if (msg) {
            const newMessages = [...msgList];
            var msgListInDb;
            // get last message
            chats.forEach(chatData => {
                chatData.participicants.forEach(participicant => {
                    if (participicant === chosenChat.username && chatData.participicants.includes(myUsername)) {
                        msgListInDb = chatData.messages;
                        return;
                    }
                })
            });


            var newMsg = {
                id: Math.floor(1000 * Math.random() + 200),
                type: "text",
                text: msg,
                senderUsername: myUsername,
                writtenIn: new Date()
            };

            newMessages.push(newMsg);
            msgListInDb.push(newMsg)
            setMsgList(newMessages);
            setMsg("");
            updateScroll();
            //props.setNotifyMessageSent(props.notifyMessageSent + 1);
        }

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

        isRecordActive = false;

        var newMessages = [...msgList];
        var newId;
        var msgListInDb;
        // get last message - for audio
        chats.forEach(chatData => {
            chatData.participicants.forEach(participicant => {
                if (participicant === chosenChat.username && chatData.participicants.includes(myUsername)) {
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
        if (!isRecordActive) {
            audioPieces = [];
            setShowAudioModal(true);
            navigator.mediaDevices.getUserMedia({ audio: true }).then((m) => {
                try {
                    var audioRecorder = new MediaRecorder(m, {
                        mimeType: "audio/webm"
                    });
                    setVoiceRecorder(audioRecorder);
                    audioRecorder.start();
                } catch (e) {
                }
                canAddRecord = true;
                audioRecorder.ondataavailable = function (event) {
                    var newPieces = [...audioPieces];
                    newPieces.push(event.data);
                    audioPieces = newPieces;
                }

                audioRecorder.onstop = updateAudioInGuiMessages;
            });
        }
    }

    const stopRecord = (e) => {
        setShowAudioModal(false);
        voiceRecorder.stop();
    }

    var makeShowPictueModal = (e) => {
        setShowPictureModal(true);
        try {
            navigator.mediaDevices.getUserMedia(
                { audio: false, video: true }).then(camStream => {
                    window.userStream = camStream;
                    var video = document.getElementById('userCameraVideo');
                    video.srcObject = camStream;
                });

        } catch (e) {
            console.log(e.toString());
        }
    }

    var takeUserPicture = (e) => {
        var canvas = document.getElementById('image-canvas');
        var video = document.getElementById('userCameraVideo');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        let imageTaken = canvas.toDataURL('image/png');
        addImageToDB(imageTaken);
        setShowPictureModal(false);
        video.pause();
        window.userStream.getVideoTracks().forEach(t => {
            try {
                t.stop()
            }
            catch {
                t.enabled = false;
            }
        });
    }

    var uploadClicked = (e) => {
        setShowFileModal(false);
        uploadFile(e);
    }

    var getTypeByFileName = (fileName) => {
        var suffix = fileName.split('.')[1].toLowerCase();
        if (audio_extensions.includes(suffix)) {
            return "audio";
        }

        if (image_extensions.includes(suffix)) {
            return "image";
        }

        if (video_extensions.includes(suffix)) {
            return "video";
        }
        return "file";
    }

    var uploadFile = (e) => {
        var input = document.getElementById('chooser')
        var fileReader = new FileReader()
        fileReader.readAsDataURL(input.files[0])
        fileReader.onload = (event) => {
            var fileSrc = event.target.result
            const newMessages = [...msgList];
            var message;
            var msgListInDb;
            // get last message
            chats.forEach(chatData => {
                chatData.participicants.forEach(participicant => {
                    if (participicant === chosenChat.username && chatData.participicants.includes(myUsername)) {
                        message = Math.max.apply(Math, chatData.messages.map((msg => {
                            msgListInDb = chatData.messages;
                            return msg.id;
                        })));
                        return;
                    }
                })
            });

            var fileName = input.files[0].name

            var newMsg = {
                id: message.id + 1,
                type: getTypeByFileName(fileName),
                text: fileSrc,
                senderUsername: myUsername,
                writtenIn: new Date(),
                fileName: fileName
            };

            newMessages.push(newMsg);
            msgListInDb.push(newMsg)
            setMsgList(newMessages);

        };
    }

    const addImageToDB = (imageTaken) => {
        const newMessages = [...msgList];
        var message, msgListInDb;
        // get last message
        chats.forEach(chatData => {
            chatData.participicants.forEach(participicant => {
                if (participicant === chosenChat.username && chatData.participicants.includes(myUsername)) {
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
            type: 'image',
            text: imageTaken,
            senderUsername: myUsername,
            writtenIn: new Date(),
        };

        newMessages.push(newMsg);
        msgListInDb.push(newMsg)
        setMsgList(newMessages);
        updateScroll();
    };

    return (
        <div className="col-9 conversation">
            <div className='conversation-container'>
                <div className='user-title'>
                    <UserImage src={chosenChat.profileImage} headOf={chosenChat.nickname} />
                    <div className='user-nickname'>{chosenChat.nickname}</div>
                    <div className='logout'>
                        <button className="image-logout-button" onClick={() => navigatePages("/", { replace: true })}>
                            <img src="/images/logout.png" className="image-logout" alt='logout'></img>
                        </button>
                    </div>
                </div>
                <div className='message-container' id="chat" scolltop={sTop}>
                    {msgList?.map((msg, key) => (
                        <MessageField type={msg.type} text={msg.text} senderUsername={msg.senderUsername} key={key}
                            fileName={msg.fileName}>
                        </MessageField>
                    ))}
                </div>
                <div className='chat-box'>
                    <div className='search-container'>
                        {/*Take a picture*/}
                        <button className='click-button'
                            onClick={makeShowPictueModal}>
                            <img className='button-image' src="/images/take-photo.png" alt='button'></img></button>
                        {/*Take Picture Modal*/}
                        <Modal show={showPictureModal} centered onHide={() => setShowPictureModal(false)} id="modalPicture"
                            contentClassName='picture-modal-class' dialogClassName='picture-modal-width'>
                            <Modal.Header closeButton>
                                <Modal.Title>Take a picture...</Modal.Title>
                            </Modal.Header>
                            <Modal.Body id="modalPictureBody">
                                <div className='take-picture'>
                                    <div className='centered-div'>
                                        <video id="userCameraVideo" className='user-camera-open centered-div' autoPlay></video>
                                    </div>
                                    <div className='bottom-div'>
                                        <button className='picture-button' onClick={takeUserPicture}>
                                            <img src='/images/take-photo.png' alt='take'
                                                className='picture-button-image centered-div'>
                                            </img></button>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal>

                        <button className='click-button'
                            onClick={startRecord}>
                            <img className='button-image' src="/images/record.png" alt='button'></img></button>
                        <button className='click-button'
                            onClick={setModalFileToShow}>
                            <img className='button-image' src="/images/attach.jpg" alt='button'></img></button>
                        {/*Record Audio Modal*/}
                        <Modal show={showAudioModal} centered onHide={() => setShowAudioModal(false)} id="modalAudio">
                            <Modal.Header closeButton>
                                <Modal.Title>Recording...</Modal.Title>
                            </Modal.Header>
                            <Modal.Body id="modalAudioBody"><button className='stop-button' onClick={stopRecord}>
                                <img src='/images/stop-button.png' className='stop-button-image' alt='stop-button'>
                                </img></button></Modal.Body>
                        </Modal>

                        {/*Upload File Modal*/}
                        <Modal show={showFileModal} centered dialogClassName="file-modal" onHide={() => setShowFileModal(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title>Upload file</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {/*Here the file modal should appear*/}
                                <input type="file" id="chooser"></input>
                            </Modal.Body>
                            <Modal.Footer>
                                <button className='btn btn-primary' onClick={uploadClicked}>Upload</button>
                            </Modal.Footer>
                        </Modal>

                        <input className='search-textbox' placeholder='Search in chats'
                            value={msg} onChange={(event) => setMsg(event.target.value)}
                            onKeyDown={onEnter}></input>
                        <button className='click-button' onClick={onSend}><img src='/images/send.jpg' className='button-image' alt='button'></img></button>
                    </div>
                </div>
                <canvas id="image-canvas"></canvas>
            </div>

        </div>
    )
}

export default Conversation;