import Customer from './Customer';
import Booking from './Bookings';

class Hotel {
  constructor(customersData, bookingsData, roomsData) {
    this.customer = customersData;
    this.bookings = bookingsData;
    this.rooms = roomsData;
    this.availableRooms = [];
    this.roomsByTag = [];
    this.currentCustomer = null;
  }

  filterRoomByDate(dateInput) {
    const roomNumbers = this.bookings.reduce((roomNum, booking) => {
      if(booking.date === dateInput) {
        roomNum.push(booking.roomNumber);
      }
      return roomNum;
    }, []);
    
    const openRooms = this.rooms.filter(room => roomNumbers.includes(room.number));
    this.availableRooms = openRooms;
    return this.availableRooms;
  }

  filterByRoomType(tag) {
    this.availableRooms.filter(room => {
      if(room.roomType === tag) {
        this.roomsByTag.push(room);
      }
    })
  }

  getAllUserBookings(customer) {
    this.currentCustomer = new Customer(customer);
    this.bookings.filter(booking =>  {
      if(this.currentCustomer.id === booking.userID) {
        this.currentCustomer.bookings.push(booking);
      }
    })
  }

  getTotalPrice() {
    this.currentCustomer.totalSpent = this.currentCustomer.bookings.reduce((total, booking)=> {
      this.rooms.forEach(room => {
        if(booking.roomNumber === room.number) {
          total += room.costPerNight;
        }
      });
     return total;
    }, 0).toFixed(2);
    return this.currentCustomer;
  }

  addBooking(room) {
    let booking = new Booking(room);
    this.bookings.push(booking);
    this.currentCustomer.bookings.push(booking);
    this.getTotalPrice();
  }
}

export default Hotel;

//WHAT WOULD GO HERE ?? WHAT TYPE OF DATA WOULD BE PASSED HERE?

  // WHAT PROPERTIES WOULD THIS HAVE ?
  // WOULD THIS INCLUDE ROOM AND BOOKING PROPERTIES ?
  // WOULD THIS TIE TO MY CUSTOMER CLASS ? 
  // WHAT METHODS DO I NEED TO THINK ABOUT ? 
  // WHAT WOULD THIS CLASS SERVE PURPOSE ? 
  
  // NOT SURE WHAT I NEED TO CREATE NOW. I HAVE ALL THE BOOKING,ROOM, AND CUSTOMER CLASS NOW
  // HOW WOULD ALL THESE CLASS TIE ? 

  // KINDA CONFUSED WHATS THE PURPOSE TO USE CLASSES.