import React from 'react';
import ReactDOM from 'react-dom';
import DisplayContainer from './DisplayContainer';
import { shallow } from 'enzyme';

describe('DisplayContainer', () => {
  let wrapper;
  let mockReservations;
  let res1;
  let res2;

  beforeEach(() => {
    res1 = {
      name: 'Uncle Robbie',
      date: '12-11',
      time: '12:20',
      number: 200
    }
    res2 = {
      name: 'Dad Eric',
      date: '12-25',
      time: '4:00',
      number: 1
    }
    mockReservations = [res1, res2]
    wrapper = shallow(<DisplayContainer reservations={mockReservations}/>);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
