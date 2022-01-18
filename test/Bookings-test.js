import chai from 'chai';
const expect = chai.expect;

import Booking from '../src/classes/Bookings';

import bookingsData from '../src/test-data/booking-data';

describe('Booking', () => {
  let booking1;

  beforeEach(() => {
    booking1 = new Booking(bookingsData[0]);
    // console.log(bookingsData);
  });

  it('Should be a function', () => {
    expect(Booking).to.be.a('function');
  });

  it('Should be an instance of room', () => {
    expect(booking1).to.be.an.instanceof(Booking);
  });

  it('Should have a booking id', () => {
    expect(booking1.id).to.equal(bookingsData[0].id);
  });

  it('Should have a user id', () => {
    expect(booking1.userID).to.equal(bookingsData[0].userID);
  });

  it('Should have a date', () => {
    expect(booking1.date).to.equal(bookingsData[0].date);
  });

  it('Should have a room number', () => {
    expect(booking1.roomNumber).to.equal(bookingsData[0].roomNumber);
  });

  it('Should have a room service charge', () => {
    expect(booking1.roomServiceCharges).to.equal(bookingsData[0].roomServiceCharges);
  });

  it('Should room service charges should default to a array', () => {
    expect(booking1.roomServiceCharges).to.be.an('array');
  });
});