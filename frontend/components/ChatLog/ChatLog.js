import React from 'react';
import PropTypes from 'prop-types';

const ChatLog = ({ messages }) => {
  const messageLog = (messages) ? messages.map((msg) => (
    <li key={msg}>{msg}</li>
  )) : null;
  return (<ul>{messageLog}</ul>);
};

ChatLog.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string),
}

export default ChatLog;
