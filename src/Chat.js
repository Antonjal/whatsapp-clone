import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import MicIcon from '@mui/icons-material/Mic';

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>
                        Room Name
                    </h3>
                    <p>
                        Last seen at...
                    </p>
                </div>
                <div className="chat__headerRight">
                   <IconButton>
                        <SearchIcon/>
                   </IconButton>
                   <IconButton>
                        <AttachFileIcon />
                   </IconButton>
                   <IconButton>
                        <MoreVertIcon/>
                   </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">
                        Alex
                    </span>
                    This is a message
                    <span className="chat__timeStamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message chat__receiver">
                    <span className="chat__name">
                        Susi
                    </span>
                    This is a message
                    <span className="chat__timeStamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">
                        Alex
                    </span>
                    This is a message
                    <span className="chat__timeStamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>
            <div className="chat__footer">
                <EmojiEmotionsOutlinedIcon />
                <form>
                    <input placeholder="Type a message" type="text" />
                    <button type="submit">
                        Send a message
                    </button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat