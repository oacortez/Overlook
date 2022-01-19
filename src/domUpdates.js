import hotel from './scripts';

const show = elements => elements.forEach(element => element.classList.remove('hidden'));
const hide = elements => elements.forEach(element => element.classList.add('hidden'));


const domUpdates = {
  displayWelcomeMessage(customer, totalSpent, homeView) {
    const welcomeMessage = document.querySelector('#welcomeMessage');
    welcomeMessage.innerText = `Welcome ${customer}, Your total amount spent on rooms: $${totalSpent}`;
    show([homeView])
  },

  displayAllUsersBookings(currentCustomerBookings, image, homeView) {
    const profileView = document.querySelector('#profileView');
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
    hide([homeView])
  },

  displayAllAvailableRooms(availableRooms, availableRoomsView, homeView) {
    if(availableRooms.length > 0) {
    const availableRoomsView = document.querySelector('#availableRoomsView');
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

      // Create a button to add functionality to add this room card to users
      //  array. ⬇️⬇️
      <button value=${room.number} class= ><i class="fa fa-plus-circle add-card-btn"></i></button>
    </article>
    `
    })
    }
    if(availableRooms.length < 1 ) {
      const availableRoomsView = document.querySelector('#availableRoomsView');
      availableRoomsView.innerHTML = '';
      availableRoomsView.innerHTML += `<p class="card-err-msg">We are so sorry, but we do not have any availablity rooms for that room type on that date. Please make another selection!</p>`
    }
    show([availableRoomsView]);
    hide([homeView])
  },

  addRoomCard() {

  }
}

export default domUpdates;
// Still need a section for my cards to display 
// Inside those cards I also need a plus icon when cards