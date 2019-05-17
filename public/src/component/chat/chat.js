import React, { useState } from 'react';
import openSocket from 'socket.io-client';
import { Widget, addResponseMessage} from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import './chat.css';

//TODO TIRAR ESSA CONEXAO DAQUI!!!!!!!!! ela deve ser alocada em uma classe unica -> Cainã

const socket = openSocket('http://localhost:3001/', {transports: ['websocket']});
socket.on("chat", (user, mensagem) => {  addResponseMessage(mensagem) });

const Chat = (props) => {
    const [ usage, setUsage ] = useState(false);

    const user = { 
      Nome: 'anddre',
      Senha: 'test',
      Email: 'email',
      CPF: 'cpf',
      Endereco: 'endereco'
    }
    const handleNewUserMessage = (newMessage) => {
        if(usage === false){
          socket.emit("join", props.user);
          setUsage(true);
        }
        socket.emit("cadastro", user);
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