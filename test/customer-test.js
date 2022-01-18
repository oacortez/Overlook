import chai from 'chai';
const expect = chai.expect;

import Customer from '../src/classes/Customer';

import customersData from '../src/test-data/customer-data';


describe('Customer', () => {
  let customer1;

  beforeEach(() => {
    customer1 = new Customer(customersData[0])
  });

  it('Should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('Should be an instance of customer', () => {
    expect(customer1).to.be.an.instanceof(Customer);
  });

  it('Should have a name', () => {
    expect(customer1.name).to.equal(customersData[0].name);
  });

  it('Should have a id', () => {
    expect(customer1.id).to.equal(customersData[0].id);
  });

  it('Should start no bookings', () => {
    expect(customer1.bookings).to.be.an('array');
  });

  it('Should start with a zero value', () => {
    expect(customer1.totalSpent).to.equal(0);
  });
});