import chai from 'chai';
const expect = chai.expect;

import Room from '../src/classes/Rooms';

import roomsData from '../src/test-data/rooms-data';

describe('Room', () => {
  let room1;

  beforeEach(() => {
    room1 = new Room(roomsData[0]);
  });

  it('Should be a function', () => {
    expect(Room).to.be.a('function');
  });

  it('Should be an instace of room', () => {
    expect(room1).to.be.an.instanceof(Room);
  });

  it('Should have a room number', () => {
    expect(room1.number).to.equal(roomsData[0].number);
  });

  it('Should have a room type', () => {
    expect(room1.roomType).to.equal(roomsData[0].roomType);
  });

  it('Should indicate if room has a bidet', () => {
    expect(room1.bidet).to.equal(roomsData[0].bidet)
  });

  it('Should indicate if room does not have a bidet', () => {
   room1.bidet = false;
    expect(room1.bidet).to.equal(false);
  });

  it('Should have a bed size', () => {
    expect(room1.bedSize).to.equal(roomsData[0].bedSize);
  });

  it('Should indicate number of beds', () => {
    expect(room1.numOfBeds).to.equal(roomsData[0].numBeds)
  });

  it('Should have a price per night', () => {
    expect(room1.costPerNight).to.equal(roomsData[0].costPerNight)
  });
});