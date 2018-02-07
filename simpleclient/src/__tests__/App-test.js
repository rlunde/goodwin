import React from 'react';
import { shallow, mount, render} from 'enzyme';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });
import App from '../App';

describe('A suite', function() {
  const wrapper = shallow(<App />).find('.goodwin-app');
  //console.log(wrapper.debug());
  it('should contain a footer element', function() {
    expect(wrapper.contains(<footer>
        <h3>Goodwin 0.0.1</h3>
      </footer>)).toBe(true);
  });

  it('should be selectable by class "goodwin-app"', function() {
    expect(wrapper.hasClass('goodwin-app')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<App />).find('.goodwin-app').length).toBe(1);
  });

});