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
    })
      .then(response => {
        if(!response.ok){
          console.log(response.json())
          throw new Error('Sorry something went wrong')
        } else {
          return response.json()
        }
      }
    )
  }

  /**
   const postIngredient = (data) => {

return fetch(`http://localhost:3001/api/v1/users`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then(response => {
    return myErrorHandlingFunc(response)
  })
}
//Insdie script.js👇🏼
const myErrorHandlingFunc = (res) => {
    if(!res.ok){
      throw newError(res.message) 
    }
    return response.json()
}
.catch(error => ShowError(error))
    
const showError = (error) => {
    // add this error as a text to an html element 
document.querySelector(".myHtmlElement").innerText += error
    }
}
   */
  
export {customersData, roomsData, bookingsData, userData, postData}