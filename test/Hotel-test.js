import chai from 'chai';
const expect = chai.expect;

import Hotel from '../src/classes/Hotel';

import bookingsData from '../src/test-data/booking-data';
import customersData from '../src/test-data/customer-data';
import roomsData from '../src/test-data/rooms-data';

describe('Hotel', () => {
  let hotel;

  beforeEach(() => {
    hotel = new Hotel(customersData, bookingsData, roomsData);
  });

  it('Should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

  it('Should be a instance of Hotel', () => {
    expect(hotel).to.be.an.instanceof(Hotel);
  });

  it('Should have customers', () => {
    expect(hotel.customer).to.equal(customersData)
  });

  it('Should have a list of rooms', () => {
    expect(hotel.rooms).to.equal(roomsData);
  });

  it('Should have a list of bookings', () => {
    expect(hotel.bookings).to.equal(bookingsData);
  });
});