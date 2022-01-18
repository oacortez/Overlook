import hotel from './scripts';

const show = elements => elements.forEach(element => element.classList.remove('hidden'));
const hide = elements => elements.forEach(element => element.classList.add('hidden'));


const domUpdates = {
  displayWelcomeMessage(customer, totalSpent) {
    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.innerText = `Welcome ${customer}, Your total amount spent on rooms: $${totalSpent}`;
  },

  displayAllUsersBookings(currentCustomerBookings, image) {
    const profileView = document.getElementById('profileView');
    profileView.innerHTML = '';
    console.log(currentCustomerBookings);
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
  },

}

export default domUpdates;
// Still need a section for my cards to display 
// Inside those cards I also need a plus icon when cards