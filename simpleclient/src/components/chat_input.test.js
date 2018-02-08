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
    // There's a StackOverflow question that may relate to this:
    /* It says:
    In their documentation Enzyme is using Chai assertion, so if you want to use 
    expect(***).to.have.length(***) you need to install chai-enzyme and use its 
    expect. It will, therefore, lead to issues with expect(***).toMatchSnapshot() 
    if you use Jest snapshots, but this article will help you to solve it, so you can do both.
    (the link to the article is broken)
    Here's a link about snapshot testing: https://facebook.github.io/jest/docs/en/snapshot-testing.html
    */
    expect(wrapper.find('.chat-input')).toHaveLength(1);
  });
  if('has a button', () => {
    //weird that this works fine, but the test above fails. Something funny
    //about find of a component by name, versus find of a class, when using jest?
    expect(wrapper.find(Button)).to.have.length(1);
  });
});