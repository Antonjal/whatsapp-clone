import './App.css';
import Chat from "./Chat";
import Sidebar from './Sidebar.js';
import Pusher from 'pusher-js';
import axios from "./axios";
function App() {

  const [messages, setMessages] =  useState([])

  useEffect(() => {
      axios.get('https://whatsapp-mern-clone.onrender.com/messages/sync')
        .then(response => {
          setMessages(response.data);
        })
    }, []);
import React, {useEffect, useState} from "react";

  useEffect(() => {
    const pusher = new Pusher('0a3c26149df588744c42', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])
  console.log(messages);

  return (
    <div className="app">
      <div className="app__body">
      <Sidebar />
      <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
