import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

import ChatContainer from './containers/ChatContainer';

const socket = io();

ReactDOM.render(
  <ChatContainer socket={socket} />,
  document.getElementById('root')
);
