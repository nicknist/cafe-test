import React from 'react';

const Reservation = ({ reservation }) => {
  if(!reservation) {
    return <h1>Loading...</h1>
  }

  return (
    <div className='single-res'>
      <h2>{reservation.name}</h2>
      <p>{reservation.date}</p>
      <p>{reservation.time}pm</p>
      <p>Number of Guests: {reservation.number}</p>
      <button className='cancel'>Cancel</button>
    </div>
  )
}

export default Reservation;
