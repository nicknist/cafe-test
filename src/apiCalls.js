export const postReservation = (reservation) => {
  let newRes = {
    name: reservation.name,
    date: reservation.date,
    time: reservation.time,
    number: reservation.guestNumber
  }
  const options = {
    method: 'POST',
    body: JSON.stringify(newRes),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch('http://localhost:3001/api/v1/reservations', options)
    .then(res => {
      if (!res.ok) {
        throw Error('AHHH. IT DID NOT POST');
      }
      return res.json()
    })
    .then(data => data)
}

export const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
      .then(res => {
        if(!res.ok) {
          throw Error('OH NO. IT DID NOT WORK')
        }
        return res.json()
    })
}

export const deleteReservationFromServer = (reservation) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`http://localhost:3001/api/v1/reservations/${reservation.id}`, options)
    .then(res => {
      if(!res.ok) {
        throw Error('Did not delete reservation')
      }
      return res.json()
    })
}
