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
  
  // Include the following information on screen -->

  // Name
  // Phone Number
  // Pickup Location
  // Dropoff Location
  // Number of passengers in their party
  // Whether or not they would like a luxury "Noober Purple" car
  
  // Retrieve the ride details from the Chrome editor, store it in memory

    let firstName = ride.passengerDetails.first
    let lastName = ride.passengerDetails.last
    let phoneNumber = ride.passengerDetails.phoneNumber
    let pickupLocation = ride.pickupLocation.address
    let pickupCity = ride.pickupLocation.city 
    let pickupState = ride.pickupLocation.state 
    let pickupZip = ride.pickupLocation.zip 
    let dropoffLocation = ride.dropoffLocation.address 
    let dropoffCity = ride.dropoffLocation.city  
    let dropoffState = ride.dropoffLocation.state 
    let dropoffZip = ride.dropoffLocation.zip
    let purpleRequested = ride.purpleRequested
    let passengerCount = ride.numberOfPassengers
  
// Use ride details to determine ride type

    let rideType
      if (ride.purpleRequested == true) {
        rideType = 'Noober Purple'
      } else if (ride.numberofpassengers > 3) {
        rideType = 'Noober XL'
      } else {
        rideType = 'Noober X'
      }

// Copy ride details to screen
console.log(`Noober X Passenger: ${firstName} ${lastName} - ${phoneNumber}. 
  Pickup at ${pickupLocation}, ${pickupCity}, ${pickupState} ${pickupZip}. 
  Drop off ${dropoffLocation}, ${dropoffCity}, ${dropoffState} ${dropoffZip}.`)

  // 🔥 YOUR CODE ENDS HERE 🔥
})

