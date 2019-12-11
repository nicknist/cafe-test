import React, { Component } from 'react';
import './App.css';
import DisplayContainer from '../DisplayContainer/DisplayContainer';
import MakeReservationForm from '../MakeReservationForm/MakeReservationForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
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
            <MakeReservationForm />
          </div>
          <DisplayContainer className='resy-container' reservations={this.state.reservations}/>
        </main>
      </div>
    )
  }
}

export default App;
