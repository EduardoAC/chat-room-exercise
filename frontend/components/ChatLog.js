import React from 'react';
import PropTypes from 'prop-types';

import '../styles/ChatLog.css';

const ChatLog = ({ messages }) => {
  const messageLog = (messages) ? messages.map((msg) => (
    <li
      key={msg}
      className="chat-message-log__message"
    >
      {msg}
    </li>
  )) : null;
  return (<ul className="chat-message-log">{messageLog}</ul>);
};

ChatLog.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string),
}

export default ChatLog;
