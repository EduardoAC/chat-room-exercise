import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import Chat from './components/chat/Chat';

const socket = io();

ReactDOM.render(
  <Chat />,
  document.getElementById('root')
);
