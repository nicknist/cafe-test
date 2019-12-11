import React from 'react';
import Reservation from '../Reservation/Reservation';

const DisplayContainer = ({ reservations, deleteReservation }) => {
  if (reservations.length === 0) {
    return <h1>Loading...</h1>
  }
  let reservationList = reservations.map(res => {
    return <Reservation deleteReservation={deleteReservation} key={res.name} className='single-res' reservation={res}/>
  })

  return (
    <div className='resy-container'>
      {reservationList}
    </div>
  )
}

export default DisplayContainer;
