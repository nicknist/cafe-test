import React from 'react';
import ReactDOM from 'react-dom';
import Reservation from './Reservation';
import { shallow } from 'enzyme';

describe('Reservation', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Reservation />);
  })

  it('should match the snapshot when loading', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should match snapshot when it has reservations', () => {
    let loadedComp = shallow(<Reservation reservation={{name: '1', time: '2'}}/>)
    expect(loadedComp).toMatchSnapshot();
  })
})
