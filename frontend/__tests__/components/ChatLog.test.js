import React from 'react';
import { shallow } from 'enzyme';

import ChatLog from '../../components/ChatLog';

describe('<ChatLog />', () => {
  it('Component renders correctly', () => {
    const chatLogWrapper = shallow(<ChatLog messages={[]} />);
    expect(chatLogWrapper).toMatchSnapshot();
  });

  it('should render the message', () => {
    const messages = ['hello'];
    const chatLogWrapper = shallow(<ChatLog messages={messages} />);
    const messageList = chatLogWrapper.find('li');
    expect(messageList).toHaveLength(1);
    // Since we verified that the content is one, we can access to the element
    // as dom element without extra functions like fitst() or at(0)
    expect(messageList.text()).toBe('hello');
  });

  it('should render all the messages passed in the right order', () => {
    const messages = ['hello', 'world', '!'];
    const chatLogWrapper = shallow(<ChatLog messages={messages} />);
    const messageList = chatLogWrapper.find('li');
    expect(messageList).toHaveLength(3);
    messages.forEach((value, index) => {
      expect(messageList.at(index).text()).toBe(value);
    });
  });

});
