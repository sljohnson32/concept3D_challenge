/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../components/App';

const mockFunc = jest.fn();


describe('App', () => {

  it('renders without crashing', () => {
    shallow(<App fetchAllLocations={mockFunc} />);
  });
});
