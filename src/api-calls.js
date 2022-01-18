const fetchData = (api) =>
  fetch(`http://localhost:3001/api/v1/${api}`)
  .then(response => response.json())

  const customersData = () => fetchData('customers');
  const roomsData = () => fetchData('rooms');
  const bookingsData = () => fetchData('bookings');

  const userData = (id) => {
    return fetchData(`customers/${id}`);
  }

  const postData = (data) => {
    return fetch('http://localhost:3001/api/v1/bookings', {
      method: 'POST', 
      body: JSON.stringify(data), 
      headers: {
        'Content-Type': 'application/json'
      }
      .then(response => {
        if(!response.ok){
          console.log(response.json())
          throw "response"
        }
        return response.json()
      })
    })
  }
  
  export {customersData, roomsData, bookingsData, userData, postData}