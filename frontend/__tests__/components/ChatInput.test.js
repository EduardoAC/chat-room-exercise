import React from 'react';
import { shallow } from 'enzyme';

import ChatInput from '../../components/ChatInput';

describe('<ChatInput />', () => {
  it('Component renders correctly', () => {
    const chatInputWrapper = shallow(<ChatInput socket={{}} />);
    expect(chatInputWrapper).toMatchSnapshot();
  });
});
