import React from 'react';
import openSocket from 'socket.io-client';
import { ThemeProvider } from '@livechat/ui-kit'

const socket = openSocket('http://localhost:3001/', {transports: ['websocket']});

const theme = {
    vars: {
        'primary-color': '#427fe1',
        'secondary-color': '#fbfbfb',
        'tertiary-color': '#fff',
        'avatar-border-color': 'blue',
    },
    AgentBar: {
        Avatar: {
            size: '42px',
        },
        css: {
            backgroundColor: 'var(--secondary-color)',
            borderColor: 'var(--avatar-border-color)',
        }
    },
    Message: {
        css: {
            fontWeight: 'bold',
        },
    },
    vars: {
            'primary-color': 'red',
    },
    Avatar: {
        size: '40px', // special Avatar's property, supported by this component
        css: { // css object with any CSS properties
            borderColor: 'blue',
        },
    },
    TextComposer: {
        css: {
            'color': '#000',
        },
    },
}

const Chat = () => {
    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        socket.emit("send", newMessage);
    }
    socket.emit("join", 'De');
    return (
     <div>
       
     </div>
    );
}
export default Chat;