import './App.css';
import Chat from "./Chat";
import Sidebar from './Sidebar.js'; /* This imports the Sidebar component in the components folder*/
import Pusher from 'pusher-js';
import axios from "./axios";
import React, {useEffect, useState} from "react";

function App() {

  const [messages, setMessages] =  useState([])

  useEffect(() => {
      axios.get('/messages/sync')
        .then(response => {
          setMessages(response.data);
        })
    }, []);

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
