import React from 'react';
import ReactDOM from 'react-dom';
import MakeReservationForm from './MakeReservationForm';
import { shallow } from 'enzyme';

describe('MakeReservationForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MakeReservationForm />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
