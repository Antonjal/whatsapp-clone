import React, {useState} from "react";
import './Chat.css'
import { Avatar, IconButton } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import MicIcon from '@mui/icons-material/Mic';
import axios from "./axios";

function Chat({ messages }) {
    const [input, setInput] =  useState("")
    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post("/messages/new", {
            message: input,
            name: "Anastasia",
            timestamp: "Just now!",
            received: false
        });
        
        setInput("");
};
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
                {messages.map((message) => (
                    <p className={`chat__message ${message.received && "chat__receiver"}`}>
                    <span className="chat__name">
                        {message.name}
                    </span>
                        {message.message}
                    <span className="chat__timeStamp">
                        {message.timestamp}
                    </span>
                </p>
                ))}
            </div>
            <div className="chat__footer">
                <EmojiEmotionsOutlinedIcon />
                <form>
                    <input value={input} onChange = {e => setInput(e.target.value)} placeholder="Type a message" type="text" />
                    <button onClick ={sendMessage} type="submit">
                        Send a message
                    </button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
