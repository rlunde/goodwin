import React from 'react';
import { shallow, mount, render} from 'enzyme';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });
import ChatInput from '../components/chat_input';

describe('test ChatInput', () => {
  const wrapper = shallow(<ChatInput />);
  //console.log(wrapper.debug());
  it('has a text area', () => {
    // the usual assertion fails, and I don't know why? it says property 'have' of undefined
    // expect(wrapper.find('.chat-input')).to.have.length(1);
    expect(wrapper.find('.chat-input')).toHaveLength(1);
  });
  if('has a button', () => {
    expect(wrapper.find(Button)).to.have.length(1);
  });
});