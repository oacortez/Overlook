class Hotel {
  constructor(customersData, bookingsData, roomsData) {
    this.customer = customersData;
    this.bookings = bookingsData;
    this.rooms = roomsData;
    this.avaiableRooms = [];
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
    // console.log(avaiableRooms)
    return this.avaiableRooms;
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