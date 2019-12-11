import React, { Component } from 'react';
import './App.css';
import DisplayContainer from '../DisplayContainer/DisplayContainer';
import MakeReservationForm from '../MakeReservationForm/MakeReservationForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      idNumber: 10
    }
  }

  addReservation = (newReservation) => {
    this.postReservation(newReservation);
    let newRes = {...newReservation}
    newRes.idNumber = this.state.idNumber;
    let newID = this.state.idNumber + 1
    this.setState({
      reservations: [...this.state.reservations, newRes],
      idNumber: newID
    })
  }

  postReservation = (newReservation) => {
    let newRes = {
      name: newReservation.name,
      date: newReservation.date,
      time: newReservation.time,
      number: newReservation.guestNumber
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(newRes),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch('http://localhost:3001/api/v1/reservations', options)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  deleteReservation = (reservation) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(`http://localhost:3001/api/v1/reservations/${reservation.id}`, options)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
        .then(res => res.json())
        .then(data => this.setState({ reservations: data }))
        .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className='app-title'>Turing Cafe Reservations</h1>
        </header>
        <main>
          <div className='resy-form'>
            <MakeReservationForm addReservation={this.addReservation}/>
          </div>
          <DisplayContainer
            className='resy-container' reservations={this.state.reservations}
            deleteReservation={this.deleteReservation}
          />
        </main>
      </div>
    )
  }
}

export default App;
