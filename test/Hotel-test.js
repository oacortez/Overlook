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
    expect(hotel.customer).to.deep.equal(customersData)
  });

  it('Should have a list of rooms', () => {
    expect(hotel.rooms).to.deep.equal(roomsData);
  });

  it('Should have a list of bookings', () => {
    expect(hotel.bookings).to.deep.equal(bookingsData);
  });

  it('Should start off as no available rooms', () => {
    expect(hotel.availableRooms).to.deep.equal([]);
  });

  it('Should filter all available rooms by a given date', () => {
    expect(hotel.filterRoomByDate('2020/04/22').length).to.equal(9);
  });

  it('Should start with no rooms with tags', () => {
    expect(hotel.roomsByTag).to.deep.equal([]);
  });

  it('Should be able to filter available rooms by room type', () => {
    hotel.filterRoomByDate('2020/04/22');
    hotel.filterByRoomType('suite');
    
    expect(hotel.roomsByTag.length).to.equal(2);
  });

  it('Should have currentCustomer', () => {
    expect(hotel.currentCustomer).to.equal(null);
  });

  it('Should get all customer bookings', () => {
    hotel.getAllUserBookings(customersData[0]);
    expect(hotel.currentCustomer.bookings.length).to.equal(1);
  });

  it('Should get total spent on rooms', () => {
    hotel.getAllUserBookings(customersData[0]);
    hotel.getTotalPrice()
    expect(hotel.currentCustomer.totalSpent).to.equal('358.40');
  });

  it('Should be able to book a room', () => {
    hotel.getAllUserBookings(customersData[0]);
    hotel.addBooking(roomsData[4]);
    expect(hotel.currentCustomer.bookings.length).to.equal(2);
    expect(hotel.bookings.length).to.equal(4);  
  });
});