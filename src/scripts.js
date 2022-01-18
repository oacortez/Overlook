import {customersData, roomsData, bookingsData, userData, postData} from './api-calls';
import './css/base.scss';
import Hotel from './classes/Hotel';
import domUpdates from './domUpdates';
import image from './images/hotel-room.png';

// Query Selectors:
const title = document.getElementById('title');
const roomTypeTags = document.getElementById('filterRoom');
const calendar = document.getElementById('dateCalander');


// Buttons || icons:
const homeBtn = document.querySelector('.home-btn');
const myProfileBtn = document.getElementById('myProfileBtn');
const signOutBtn = document.getElementById('signOutBtn');
const submitRequestBtn = document.getElementById('submitRequestBtn');

let hotel; 

const getAllData = (userID) => {
  Promise.all([customersData(), roomsData(), bookingsData(), userData(userID)])
  .then(data => {
    hotel = new Hotel(data[0].customers, data[2].bookings, data[1].rooms)
    hotel.getAllUserBookings(data[3])
    hotel.getTotalPrice()
    loadCustomerInfo()
    // console.log(hotel.currentCustomer.bookings);
  })
}

// Event Listeners:
window.addEventListener('load', () => {
  getAllData(1)
});


// Functions: 

const loadCustomerInfo = () => {
  domUpdates.displayWelcomeMessage(hotel.currentCustomer.name, hotel.currentCustomer.totalSpent);
  domUpdates.displayAllUsersBookings(hotel.currentCustomer.bookings, image);
}



export default hotel;