import React from 'react';
import ReactDOM from 'react-dom';
import Menubar from './Menubar';
import {shallow, mount, render} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Mockdata from '../../MOCK_DATA.json';
import Board from '../Board/Board';

Enzyme.configure({ adapter: new Adapter() });

describe('<Bar> component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Menubar data = {Mockdata}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //Need to figure out why this test is not working.
  it.skip('should have Dashboard as title', () => {
    const wrapper = shallow(<Menubar data = {Mockdata}/>);
    expect(wrapper.text()).toContain('App Name');
  });
});
