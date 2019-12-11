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
  fetch('http://localhost:3001/api/v1/reservations', options)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
