"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Implement function
const processOrder = (orderId, callback) => {
    console.log(`Processing order: ${orderId}`);
    let status = "shipped";
    callback(status);
};
// Create customers
let customer1 = {
    id: "C101",
    name: "Amit"
};
let customer2 = {
    id: "C102",
    name: "Neha",
    email: "neha@example.com"
};
// Use Container
let customerContainer = {
    value: customer1,
    timestamp: new Date()
};
// Function call
processOrder(1, (status) => {
    console.log(`Order status: ${status}`);
});
// Print result
console.log("Customer Container:", customerContainer);
