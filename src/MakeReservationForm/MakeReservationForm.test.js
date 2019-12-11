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

  it('should change the name when the input is updated', () => {
    let mockEvent = {
      target: {
        name: 'Ben',
        value: 'Change'
      }
    }
    wrapper.instance().changeInput = jest.fn()
    wrapper.find('#name').simulate('change', mockEvent);

    expect(wrapper.instance().changeInput).toHaveBeenCalledWith('Ben', 'Change');
  })

  it('should change the date when input is updated', () => {
    let mockEvent = {
      target: {
        name: 'Date',
        value: 'December 3rd'
      }
    }
    wrapper.instance().changeInput = jest.fn();
    wrapper.find('#date').simulate('change', mockEvent);

    expect(wrapper.instance().changeInput).toHaveBeenCalledWith('Date', 'December 3rd');
  })

  it('should change the time when input is updated', () => {
    let mockEvent = {
      target: {
        name: 'time',
        value: 'none'
      }
    }
    wrapper.instance().changeInput = jest.fn();
    wrapper.find('#time').simulate('change', mockEvent);

    expect(wrapper.instance().changeInput).toHaveBeenCalledWith('time', 'none')
  })

  it('should change the guestNumber when the input is updated', () => {
    let mockEvent = {
      target: {
        name: 'guestNumber',
        value: 10
      }
    }
    wrapper.instance().changeInput = jest.fn();
    wrapper.find('#guestNumber').simulate('change', mockEvent);

    expect(wrapper.instance().changeInput).toHaveBeenCalledWith('guestNumber', 10);
  })
})
