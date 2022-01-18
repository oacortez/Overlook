import Customer from './Customer';

class Hotel {
  constructor(customersData, bookingsData, roomsData) {
    this.customer = customersData;
    this.bookings = bookingsData;
    this.rooms = roomsData;
    this.avaiableRooms = [];
    this.currentCustomer = null;
  }

  filterRoomByDate(dateInput) {
    const roomNumbers = this.bookings.reduce((roomNum, booking) => {
      if(booking.date.includes(dateInput)) {
        roomNum.push(booking.roomNumber);
      }
      return roomNum;
    }, []);
    
    const openRooms = this.rooms.filter(room => roomNumbers.includes(room.number));
    this.avaiableRooms = openRooms;
    return this.avaiableRooms;
  }

  filterByRoomType(roomType) {
    if(roomType === 'all rooms') {
      return this.avaiableRooms;
    }
    return this.avaiableRooms.filter(room => room.roomType === roomType);
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
    }, 0);
    return this.currentCustomer;
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