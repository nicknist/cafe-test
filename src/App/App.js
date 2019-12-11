import React, { Component } from 'react';
import './App.css';
import DisplayContainer from '../DisplayContainer/DisplayContainer';
import MakeReservationForm from '../MakeReservationForm/MakeReservationForm';
import { postReservation, getReservations, deleteReservationFromServer } from '../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      idNumber: 10
    }
  }

  addReservation = (newReservation) => {
    postReservation(newReservation)
      .catch(err => console.log(err));
    let newRes = {...newReservation}
    newRes.idNumber = this.state.idNumber;
    let newID = this.state.idNumber + 1
    this.setState({
      reservations: [...this.state.reservations, newRes],
      idNumber: newID
    })
  }

  deleteReservation = (reservation) => {
    deleteReservationFromServer(reservation)
      .then(data => console.log(data))
      .catch(err => console.log(err))
    let index = this.state.reservations.indexOf(reservation);
    let copyRes = [...this.state.reservations];
    copyRes.splice(index, 1);
    this.setState({ reservations: copyRes })
  }

  componentDidMount() {
    getReservations()
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
