#**TITLE: WK_CODECHLLENGE JS**
#Wk3 flatdando movie website
##**DESCRIPTIONS**
-Implement a 'mini' web application using JavaScript.

##**insructions**
As a user, I can:

-See the first movie's details, including its **poster, title, runtime, showtime, and available tickets** when the page loads. The number of available tickets will need to be derived by subtracting the number of `tickets_sold` from the theater's `capacity`. You will need to make a GET request to the following endpoint to retrieve the film data:
-See a menu of all movies on the left side of the page in the `ul#films` element when the page loads. (_optional_: you can style each film in the list by adding the classes `film item` to each `li` element.) There is a placeholder `li` in the `ul#films` element that is hardcoded in the HTML — feel free to remove that element by editing the HTML file directly, or use JavaScript to remove the placeholder element before populating the list. You will need to make a GET request to the following endpoint to retrieve the film data:
-Buy a ticket for a movie. After clicking the "Buy Ticket" button, I should see the number of available tickets decreasing on the frontend. I should not be able to buy a ticket if the showing is sold out (if there are 0 tickets available). **No persistence is needed for this feature**.
-Extra Bonus
-These extra bonus deliverables involve using `fetch` to update data on the `json-server` backend by using `POST`, `PATCH`, and `DELETE` requests. These are meant for an extra, extra challenge and won't affect your grade. **Make sure to commit your work to save your progress before attempting the extra bonus deliverables!**

- When a ticket is purchased, persist the updated number of `tickets_sold` on the server. Remember, the frontend shows the number of available tickets based on the `tickets_sold` and the `capacity`, so only the `tickets_sold` should be updated on the backend when a ticket is purchased. You will need to make a request that follows this structure:

##**AUTHOR**
MASUD ABDI
##**LICENCE**
-MIT


 

