import React from 'react';
import ReactDOM from 'react-dom';
import Reservation from './Reservation';
import { shallow } from 'enzyme';

describe('Reservation', () => {
  let wrapper;
  let mockDeleteReservation;
  let mockReservation;

  beforeEach(() => {
    mockReservation = {name: '1', time: '2'};
    mockDeleteReservation = jest.fn();
    wrapper = shallow(<Reservation reservation={mockReservation} deleteReservation={mockDeleteReservation}/>);
  })

  it('should match the snapshot when loading', () => {
    let unLoaded = shallow(<Reservation />)
    expect(unLoaded).toMatchSnapshot();
  })

  it('should match snapshot when it has reservations', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should run deleteReservation when cancel button is clicked', () => {
    wrapper.find('button').simulate('click');

    expect(mockDeleteReservation).toHaveBeenCalledWith(mockReservation)
  })
})
