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

  let wrapper: any;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  // @ts-ignore
  useStateSpy.mockImplementation((init) => [init, setState]); 


  beforeEach(() => {
    wrapper = Enzyme.mount(<Menubar data={Mockdata[1]}/>);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should have called state function at least once', () => {
    //wrapper.find('#Title');
    expect(setState).toHaveBeenCalledTimes(1);
    //console.log(wrapper.debug());
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Menubar data = {Mockdata[0]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have a value when passed props', () => {
    wrapper = shallow(<Menubar data={Mockdata[1]}/>);
    //console.log(wrapper.find('#Title').debug());
    expect(wrapper.find('#Title')).toBeDefined();
  });

  it('should display the name when props is passed in', () => {
    wrapper = shallow(<Menubar data={Mockdata[1]}/>);
    //console.log(wrapper.find('#Title').debug());
    expect(wrapper.find('#Title').text()).toContain('Veribet');
  });

  it('should display nothing when empty props are passed in', () => {
    const Testdata = {
      Name: ""
    }
    wrapper = shallow(<Menubar data = {Testdata} />);
    //console.log(wrapper.debug());
    expect(wrapper.find('#Title').text()).toContain('');
  });


  
});
