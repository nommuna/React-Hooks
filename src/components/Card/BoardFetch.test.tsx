import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, render} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BoardFetch from './BoardFetch';
import axios from 'axios';
jest.mock('axios');

Enzyme.configure({ adapter: new Adapter() });

describe('<BoardFetch />', () => {
    it('should have fetched data once', async () => {
        // @ts-ignore
        axios.get.mockImplementation(() => Promise.resolve({ data: {} }));
        mount(<BoardFetch/>);
        expect(axios.get).toHaveBeenCalledTimes(1);
    });
});