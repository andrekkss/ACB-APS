import React, { useState } from 'react';
import openSocket from 'socket.io-client';
import { Widget, addResponseMessage} from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import './chat.css';

const socket = openSocket(`http://${process.env.REACT_APP_IP}:3001/`, {transports: ['websocket']});
socket.on("chat", (user, mensagem) => {  addResponseMessage(mensagem) });

const Chat = (props) => {
    const [ usage, setUsage ] = useState(false);

    const handleNewUserMessage = (newMessage) => {
        if(usage === false){
          socket.emit("join", props.user);
          setUsage(true);
        }
        socket.emit("send", newMessage);
    }
    
    return (
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title={`Bem vindo ${props.user}`}
        subtitle=''
        senderPlaceHolder='Digite a mensagem...'
      />
    );
}
export default Chat;