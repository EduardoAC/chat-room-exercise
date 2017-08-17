import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/ChatInput.css';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { socket } = this.props;
    event.preventDefault();
    socket.emit('message',  this.state.message);
  }

  handleChange(event) {
    this.setState({message: event.target.value});
  }
  render() {
    const { message } = this.state;
    return (
      <form className="chat-message-form" onSubmit={this.handleSubmit}>
        <input
          className="chat-message-form__message"
          autoComplete="off"
          type="text"
          value={message}
          onChange={this.handleChange}
        />
        <input className="chat-message-form__submit" type="submit" value="Send" />
      </form>
    );
  }
}

ChatInput.propTypes = {
  socket: PropTypes.shape({}).isRequired,
}

export default ChatInput;
