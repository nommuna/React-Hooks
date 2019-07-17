import React from 'react';
import ReactDOM from 'react-dom';
import Bar from './Bar';
import {shallow, mount, render} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Bar> component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Bar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have Dashboard as title', () => {
    //const wrapper = shallow(<Bar />);
    const wrapper = shallow(<Bar/>);
    expect(wrapper.text()).toContain('Dashboard');
  });
});
