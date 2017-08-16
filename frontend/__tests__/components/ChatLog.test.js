import React from 'react';
import { shallow } from 'enzyme';

import ChatLog from '../../components/ChatLog';

describe('<ChatLog />', () => {
  it('Component renders correctly', () => {
    const chatLogWrapper = shallow(<ChatLog messages={[]} />);
    expect(chatLogWrapper).toMatchSnapshot();
  });
});
