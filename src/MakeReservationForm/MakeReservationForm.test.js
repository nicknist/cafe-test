import React from 'react';
import ReactDOM from 'react-dom';
import MakeReservationForm from './MakeReservationForm';
import { shallow } from 'enzyme';

describe('MakeReservationForm', () => {
  let wrapper;
  let mockAddReservation;

  beforeEach(() => {
    mockAddReservation = jest.fn();
    wrapper = shallow(<MakeReservationForm addReservation={mockAddReservation}/>);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should run addReservation with state when button is clicked', () => {
    wrapper.find('button').simulate('click');
    expect(mockAddReservation).toHaveBeenCalledWith(wrapper.state());
  })

  it('should update state when changeInpu is run', () => {
    expect(wrapper.state('name')).toEqual('');

    wrapper.instance().changeInput('name', 'Uncle Robbie')

    expect(wrapper.state('name')).toEqual('Uncle Robbie');
  })
})
