import React from 'React';
import { postReservation, getReservations } from './apiCalls';

describe('API Calls', () => {
  describe('postReservation', () => {
    let mockResponse;
    let mockReservation;
    let mockOptions;

    beforeEach(() => {
      mockResponse = {
        name: 'Uncle Robbie',
        date: '12-24',
        time: '4:00',
        number: 1
      }
      mockReservation = {
        name: 'Uncle Robbie',
        date: '12-24',
        time: '4:00',
        guestNumber: 1
      }
      mockOptions = {
        method: 'POST',
        body: JSON.stringify(mockResponse),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    it('should make the fetch call with the correct url', () => {
      postReservation(mockReservation);

      expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/reservations', mockOptions)
    })

    it('should return the reservation that has been posted', () => {
      expect(postReservation(mockReservation)).resolves.toEqual(mockResponse);
    })

    it('should return the error message when response is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({ ok: false })
      })
      expect(postReservation(mockReservation)).rejects.toEqual(Error('AHHH. IT DID NOT POST'));
    })
  })

  describe('getReservations', () => {
    let mockReservations;

    beforeEach(() => {
      mockReservations = [
        {
          name: 'Uncle Robbie'
        },
        {
          name: 'Dad Eric'
        }
      ]
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockReservations)
        })
      })
    })
    it('should run with the correct url', () => {
      getReservations();

      expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/reservations')
    })

    it('should return all of the reservations', () => {
      expect(getReservations()).resolves.toEqual(mockReservations);
    })

    it('should throw an error when response is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })
      expect(getReservations()).rejects.toEqual(Error('OH NO. IT DID NOT WORK'));
    })
  })
})
