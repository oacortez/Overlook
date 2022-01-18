class Booking {
  constructor(bookingsData) {
    this.id = bookingsData.id;
    this.userID = bookingsData.userID;
    this.date =  bookingsData.date;
    this.roomNumber = bookingsData.roomNumber;
    this.roomServiceCharges = bookingsData.roomServiceCharges || [];
  }
}

export default Booking;