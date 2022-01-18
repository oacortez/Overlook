import {customersData, roomsData, bookingsData, userData, postData} from './api-calls';
import './css/base.scss';
import Hotel from '../classes/Hotel';

let hotel; 

const getAllData = (userID) => {
  Promise.all([customersData(), roomsData(), bookingsData(), userData(userID)])
  .then(data => {
    hotel = new Hotel(data[0], data[2], data[1])
  })
}