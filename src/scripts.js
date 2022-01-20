import {customersData, roomsData, bookingsData, userData, postData} from './api-calls';
import './css/base.scss';
import Hotel from './classes/Hotel';
import domUpdates from './domUpdates';
import image from './images/hotel-room.png';

// Query Selectors:
const homeView = document.querySelector('#homeView');
const availableRoomsView = document.querySelector('#availableRoomsView');
const title = document.querySelector('#title');
const roomTypeTags = document.querySelector('#filterRoom');
const calendar = document.querySelector('#dateCalander');
const userNameInput = document.querySelector('#userNameInput');
const passwordInput = document.querySelector('#passwordInput');


// Buttons || icons:
const myProfileBtn = document.getElementById('myProfileBtn');
const submitRequestBtn = document.querySelector('#submitRequestBtn');
const loginBtn = document.querySelector('#loginButton');
const homeBtn = document.querySelector('#homeBtn');


let hotel; 
let calendarDate;

const getAllData = (userID) => {
  Promise.all([customersData(), roomsData(), bookingsData(), userData(userID)])
  .then(data => {
    hotel = new Hotel(data[0].customers, data[2].bookings, data[1].rooms)
    hotel.getAllUserBookings(data[3])
    hotel.getTotalPrice()
    loadCustomerInfo()
  })
}




// Functions: 

const bookRoom = event => {
  let data = { 
    userID: parseInt(hotel.currentCustomer.id),
    date: calendarDate,
    roomNumber: parseInt(event.target.value)
  }
  postData(data)
    .then(data => {
      getAllData(hotel.currentCustomer.id)
      domUpdates.displayBookingMessage(availableRoomsView);
    })
    .catch(err => {
      domUpdates.displayErrorBookingMessage(availableRoomsView, err.message);
    })
}

const createBtns = () => {
  const cardBtns = document.querySelectorAll('.cardBtns'); 
  cardBtns.forEach(button => {
    button.addEventListener('click', event => {
      console.log("I been clicked");
      bookRoom(event)
    })
  });
}

const loadCustomerInfo = () => {
  domUpdates.displayWelcomeMessage(hotel.currentCustomer.name, hotel.currentCustomer.totalSpent, homeView, profileView);
}

const loadProfileBookings = () => {
  domUpdates.displayAllUsersBookings(hotel.currentCustomer.bookings, image, homeView, profileView, availableRoomsView);
}

const filterRooms = () => {
  calendarDate = calendar.value.split('-').join('/');
  hotel.filterRoomByDate(calendar.value.split('-').join('/'));
  hotel.filterByRoomType(roomTypeTags.value);
  domUpdates.displayAllAvailableRooms(hotel.roomsByTag, availableRoomsView, homeView);
  createBtns();
}

const findUserId = () => {
  return parseInt(userNameInput.value.substring(8));
}

const findUserPassword = (event) => {
  event.preventDefault()
  if(passwordInput.value === "overlook2021" && findUserId() < 51) {
    getAllData(findUserId());
  } else {
    domUpdates.displayLoginerror();
  }
}

// Event Listeners:

loginBtn.addEventListener('click', findUserPassword);
myProfileBtn.addEventListener('click', loadProfileBookings);
submitRequestBtn.addEventListener('click', filterRooms);
homeBtn.addEventListener('click', loadCustomerInfo);


export default hotel;
export {bookRoom};