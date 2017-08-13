import React from 'react';

const Chat = () => {

  return (
    <div>
      <ul id="messages"></ul>
      <form action="">
        <input id="m" autocomplete="off" /><button>Send</button>
      </form>
    </div>
  );
}

export default Chat;
