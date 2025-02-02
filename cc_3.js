//Task 1
// Declare an array with at least five numerical values
let prices = [9.99, 18.49, 29.99, 27.75, 49.00];

// Add a new price to the array
prices.push(25.99);

// Remove the first price from the array
prices.shift();

// Display the updated prices array
console.log(prices);

//Task 2
// Declare an array representing order quantities
let orders = [10, 20, 25, 60, 70];

// Increase the third order quantity by 5
orders[2] += 5;

// Calculate the total number of all orders
let totalOrders = orders.reduce((sum, order) => sum + order, 0);

// Log the updated array and total order count to the console
console.log(orders);
console.log("Total Orders:", totalOrders);

// Task 3
// Declare an object representing an employee
let employee = {
    name: "Patrick Mahomes",
    role: "NFL Quarterback",
    performanceScore: 93,
    isActive: true
};

// Update the performanceScore property
employee.performanceScore = 95;

// Add a new property promotionEligible with a boolean value
employee.promotionEligible = employee.performanceScore > 80;

// Log the updated employee object
console.log(employee);