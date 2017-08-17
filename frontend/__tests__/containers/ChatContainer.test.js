import React from 'react';
import { shallow, mount } from 'enzyme';

import ChatContainer from '../../containers/ChatContainer';

describe('<ChatContainer />', () => {
  it('Component renders correctly', () => {
    const chatInputWrapper = shallow(<ChatContainer socket={{}} />);
    expect(chatInputWrapper).toMatchSnapshot();
  });

  it('add message to the log when it arrives', () =>{
    let callbackFn;
    const socketMock = {
      on: (event, callback) => { callbackFn = callback; }
    }
    const chatContainer = mount(<ChatContainer socket={socketMock} />);
    callbackFn('hello');
    expect(chatContainer.state('logMessages')).toEqual(['hello']);
  });
});
