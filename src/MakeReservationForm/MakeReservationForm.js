import React, { Component } from 'react';

class MakeReservationForm extends Component {
  constructor(props) {
    super(props);
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
        <input id='name' name='name' placeholder='Name' onChange={(e) => this.changeInput(e.target.name, e.target.value)}/>
        <input id='date' type='date' name='date' placeholder='date' onChange={(e) => this.changeInput(e.target.name, e.target.value)}/>
        <input id='time' type='time' name='time' placeholder='time' onChange={(e) => this.changeInput(e.target.name, e.target.value)} />
        <input id='guestNumber' name='guestNumber' type='number' placeholder='Number of Guests' onChange={(e) => this.changeInput(e.target.name, e.target.value)} />
        <button onClick={() => this.props.addReservation(this.state)}>Make Reservation</button>
      </div>
    )
  }
}

export default MakeReservationForm;
