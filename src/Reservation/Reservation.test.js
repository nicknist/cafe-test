import React from 'react';
import ReactDOM from 'react-dom';
import Reservation from './Reservation';
import { shallow } from 'enzyme';

describe('Reservation', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Reservation />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
