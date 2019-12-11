import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { getReservations } from '../apiCalls';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state with the addReservation function', () => {
    const defaultState = {
      reservations: [],
      idNumber: 10
    }
    const expected = {
      reservations: [{name: 'newReservation', idNumber: 10}, {name: 'anotherNewOne', idNumber: 11}],
      idNumber: 12
    }
    expect(wrapper.state()).toEqual(defaultState);

    wrapper.instance().addReservation({name: 'newReservation'});
    wrapper.instance().addReservation({name: 'anotherNewOne'});

    expect(wrapper.state()).toEqual(expected);
  })

})
