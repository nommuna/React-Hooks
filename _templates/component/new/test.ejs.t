---
to: src/components/<%= Name %>/<%= Name %>.test.tsx
---
import React from 'react';
import ReactDOM from 'react-dom';
import <%= Name %> from './<%= Name %>';
import renderer from 'react-test-renderer';
import {shallow, mount, render} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<<%= Name %>> component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<<%= Name %> />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<<%= Name %> />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});