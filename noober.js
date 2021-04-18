// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  
  <!-- Include the following information on screen -->

  <!-- Name
  Phone Number
  Pickup Location
  Dropoff Location
  Number of passengers in their party
  Whether or not they would like a luxury "Noober Purple" car -->
  
  <!-- Retrieve the ride details from the Chrome editor, store it in memory -->
  
  <div>
    let FirstName = ride.passengerDetails.first
    let LastName = ride.passengerDetails.last
    let PhoneNumber = ride.passengerDetails.phoneNumber
    let PickupLocation = ride.pickuplocation.address
    let PickupCity = ride.pickuplocation.city 
    let PickupState = ride.pickuplocation.state 
    let PickupZip = ride.pickuplocation.zip 
    let DropoffLocation = ride.dropofflocation.address 
    let DropoffCity = ride.dropofflocation.city  
    let DropoffState = ride.dropofflocation.state 
    let DropoffZip = ride.dropofflocation.zip 
  </div>  
  
  <!-- Copy ride details to screen -->
  console.log

  // 🔥 YOUR CODE ENDS HERE 🔥
})

