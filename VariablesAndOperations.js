//create a variable to hold the quantity of available plane seats left on a flight
var availablePlaneSeats = 25;
		
//create a variable to hold the cost of groceries at checkout
var groceriesTotalCost = 15.25;

//create a variable to hold a person's middle initial
var middleInitial = 'D';

//create a variable to hold true if it's hot outside and false if it's cold outside
var hotOutside = false;

//create a variable to hold a customer's first name
var customerFirstName = 'David';

//create a variable to hold a street address
var streetAddress = '8309 Casa Negra Ct NW';

//print all variables to the console
console.log(availablePlaneSeats);
console.log(groceriesTotalCost);
console.log(middleInitial);
console.log(hotOutside);
console.log(customerFirstName);
console.log(streetAddress);


//a customer booked 2 plane seats, remove 2 seats from the available seats variable
availablePlaneSeats -= 2; 
console.log(availablePlaneSeats);


//impulse candy bar purchase, add 2.15 to the grocery total
groceriesTotalCost += 2.15;
console.log(groceriesTotalCost);


//birth certificate was printed incorrectly, change the middle initial to something else
middleInitial = 'A';
console.log(middleInitial);

//the season has changed, update the hot outside variable to be opposite of what it was
hotOutside = !hotOutside;
console.log(hotOutside);
// ! is for creating opposite of a previous boolean

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
var fullName = customerFirstName + " " + middleInitial + " " + 'Diaz Aguirre'
console.log(fullName)

//print a line to the console that introduces the customer and says they live at the address variable
console.log("Hi! My name is " + fullName + " and I can confirm that I live at " + streetAddress + ".")