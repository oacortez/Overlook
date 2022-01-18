class Customer { 
  constructor(customersInfo) {
    this.name = customersInfo.name;
    this.id = customersInfo.id;
    this.bookings = [];
    this.totalSpent = 0;
  }
}

export default Customer;