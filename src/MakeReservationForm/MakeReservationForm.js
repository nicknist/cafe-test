import React, { Component } from 'react';

class MakeReservationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      guestNumber: ''
    }
  }

  changeInput = (key, value) => {
    this.setState({ [key]: value })
  }

  render() {
    return (
      <div className='res-form'>
        <input name='name' placeholder='Name' onChange={(e) => this.changeInput(e.target.name, e.target.value)}/>
        <input type='date' name='date' placeholder='date' onChange={(e) => this.changeInput(e.target.name, e.target.value)}/>
        <input type='time' name='time' placeholder='time' onChange={(e) => this.changeInput(e.target.name, e.target.value)} />
        <input name='guestNumber' type='number' placeholder='Number of Guests' onChange={(e) => this.changeInput(e.target.name, e.target.value)} />
        <button>Make Reservation</button>
      </div>
    )
  }
}

export default MakeReservationForm;
