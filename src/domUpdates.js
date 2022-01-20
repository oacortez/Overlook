import hotel from './scripts';
import {bookRoom} from './scripts';

// let cardBtns; 
const profileView = document.querySelector('#profileView');
const welcomeMessage = document.querySelector('#welcomeMessage');
const errorLoginMessage = document.querySelector('#errorLoginMessage');
const loginForm = document.querySelector('#loginForm');
const availableRoomsView = document.querySelector('#availableRoomsView');



const show = elements => elements.forEach(element => element.classList.remove('hidden'));
const hide = elements => elements.forEach(element => element.classList.add('hidden'));


const domUpdates = {
  displayWelcomeMessage(customer, totalSpent, homeView, profileView) {
    welcomeMessage.innerText = `Welcome ${customer}, Your total amount spent on rooms: $${totalSpent}`;
    show([homeView])
    hide([loginForm, errorLoginMessage, profileView])
  },

  displayLoginerror() {
    show([errorLoginMessage])
  },

  displayAllUsersBookings(currentCustomerBookings, image, homeView, profileView, availableRoomsView) {
    profileView.innerHTML = '';
    currentCustomerBookings.forEach(booking => {
      profileView.innerHTML += `
      <article class="customerCard">
      <img src=${image} alt="Beautiful scenery of a room with a mountain view behind the windows">
      <h3>Booking Details</h3>
      <p>Trip Date: ${booking.date}</p>
      <p>Room Number: ${booking.roomNumber}</p>
      </article>
      `
    })
    show([profileView]);
    hide([homeView, availableRoomsView]);
  },

  displayAllAvailableRooms(availableRooms, availableRoomsView, homeView) {
    if(availableRooms.length > 0) {
    availableRoomsView.innerHTML = '';
    availableRooms.forEach(room => {
    availableRoomsView.innerHTML += `
    <article class="available-room-card">
      <h3>Room Details</h3>
      <p>Room Type: ${room.roomType}</p>
      <p>Bed Size: ${room.bedSize}</p>
      <p>Bidet: ${room.bidet}</p>
      <p>Room Number: ${room.number}</p>
      <p>Cost Per Night: ${room.costPerNight}</p>
      <button value=${room.number} class="cardBtns">Submit</button>
    </article>
    `
    })
    }
    if(availableRooms.length < 1 ) {
      availableRoomsView.innerHTML = '';
      availableRoomsView.innerHTML += `<p class="card-err-msg">We are so sorry, but we do not have any availablity rooms for that room type on that date. Please make another selection!</p>`
    }
    show([availableRoomsView]);
    hide([homeView])
  },

  displayBookingMessage(availableRoomsView) {
    availableRoomsView.innerHTML = '';
    availableRoomsView.innerHTML += `<p class="card-err-msg">You have successfully booked a room!</p>`
  },

  displayErrorBookingMessage(availableRoomsView, errMessage) {
    availableRoomsView.innerHTML = '';
    availableRoomsView.innerHTML += `<p class="card-err-msg">${errMessage}</p>`
  }
}


export default domUpdates;
