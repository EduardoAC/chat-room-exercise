import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <form onSubmit={this.handleSubmit}>
        <input
          autoComplete="off"
          type="text"
          value={message}
          onChange={this.handleChange}
        />
        <input type="submit" value="Send" />
      </form>
    );
  }
}

ChatInput.propTypes = {
  socket: PropTypes.shape({}).isRequired,
}

export default ChatInput;
