import React from 'react';
import { shallow, mount } from 'enzyme';

import ChatInput from '../../components/ChatInput';

describe('<ChatInput />', () => {
  it('Component renders correctly', () => {
    const chatInputWrapper = shallow(<ChatInput socket={{}} />);
    expect(chatInputWrapper).toMatchSnapshot();
  });

  it('stores the message typed', () => {
    const chatInputWrapper = mount(<ChatInput socket={{ emit: jest.fn() }} />);
    const messageInputBox = chatInputWrapper.find('.chat-message-form__message');
    messageInputBox.simulate('change', { target: { value: 'HELLO' } });
    expect(chatInputWrapper.state().message).toBe('HELLO');
  });

  it('submits the right message', () => {
    const emitFn = jest.fn();
    const chatInputWrapper = mount(<ChatInput socket={{ emit: emitFn }} />);
    const messageInputBox = chatInputWrapper.find('.chat-message-form__message');
    messageInputBox.simulate('change', { target: { value: 'HELLO' } });
    const submitButton = chatInputWrapper.find('.chat-message-form__submit');
    submitButton.simulate('submit');
    expect(emitFn).toHaveBeenCalledTimes(1);
    expect(emitFn).toHaveBeenCalledWith('message', 'HELLO');
  })
});
