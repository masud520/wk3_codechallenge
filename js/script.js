// Execute the code when the DOM has fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Call the 'getMovies' function to fetch and display movie data
    getMovies();
});

// Function to fetch movie data
function getMovies() {
    fetch("https://my-json-server.typicode.com/masud520/wk3_codechallenge/films")
        .then(res => res.json())
        .then(data => {
            // Call the 'displayMovieDetails' function to display movie titles
            displayMovieDetails(data);
        });
}

// Function to display movie titles in a list
function displayMovieDetails(data) {
    for (let details of data) {
        console.log(details);
        // Get the 'films' list element
        let list = document.getElementById("films");
        // Create a list item element
        let li = document.createElement('li');
        li.textContent = details.title;
        // Add a click event listener to display film details when clicked
        li.addEventListener("click", () => displayFilmDetails(details));
        // Append the list item to the 'films' list
        list.appendChild(li);
    }
}

// Function to display film details
function displayFilmDetails(details) {
    // Get the 'purchaseTickets' element
    let purchaseTickets = document.getElementById("purchaseTickets");
    // Populate the 'purchaseTickets' element with film details
    purchaseTickets.innerHTML = `
    <ul id="films">
      <img src="${details.poster}">
      <p>${details.title}</p>
      <p>Description: ${details.description}</p>
      <p>Runtime: ${details.runtime}</p>
      <p>Showtime: ${details.showtime}</p>
      <p id="me">available tickets: ${details.capacity - details.tickets_sold}
      <button id="buyTicket">Buy Ticket</button>
      <p id="soldOutMessage" style="color: brown;"></p>
    </ul>
    `;

    // Get the 'buyTicket' button and 'availableTickets' element
    let buyTicketButton = document.getElementById("buyTicket");
    let availableTickets = document.getElementById("availableTickets");

    // Add a click event listener to buy tickets
    buyTicketButton.addEventListener("click", () => {
        if (details.tickets_sold < details.capacity) {
            details.tickets_sold++;
            availableTickets.textContent = `Available tickets: ${details.capacity - details.tickets_sold}`;
        } else if (details.tickets_sold === details.capacity) {
            soldOutMessage.textContent = "Sold out!";
        }
    });
}
