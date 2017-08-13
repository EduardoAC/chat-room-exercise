import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ChatLog from '../ChatLog/ChatLog';
import ChatInput from '../ChatInput/ChatInput';

class ChatContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { logMessages: [] };
  }
  componentDidMount() {
    this.handleMessageEvent();
  }

  handleMessageEvent () {
    const { socket } = this.props;
    socket.on('message', (msg) => {
      this.setState({ logMessages: [].concat(this.state.logMessages,[ msg ]) });
    });
  }

  render() {
    const { logMessages } = this.state;
    const { socket } = this.props;
    return (
      <div>
        <ChatLog messages={logMessages}/>
        <ChatInput socket={socket} />
      </div>
    );
  };
}

ChatContainer.propTypes = {
  socket: PropTypes.shape({}).isRequired,
}

export default ChatContainer;
