import hotel from './scripts';

const show = elements => elements.forEach(element => element.classList.remove('hidden'));
const hide = elements => elements.forEach(element => element.classList.add('hidden'));


const domUpdates = {
  displayWelcomeMessage(customer, totalSpent) {
    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.innerText = `Welcome ${customer}, Your total amount spent on rooms: $${totalSpent}`;
  },

}

export default domUpdates;
// Still need a section for my cards to display 
// Inside those cards I also need a plus icon when cards