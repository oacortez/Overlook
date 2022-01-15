class Room {
  constructor(roomsData) {
    this.number = roomsData.number;
    this.roomType = roomsData.roomType;
    this.bidet = roomsData.bidet || false;
    this.bedSize = roomsData.bedSize;
    this.numOfBeds = roomsData.numBeds;
    this.costPerNight = roomsData.costPerNight;
  }
}


export default Room;