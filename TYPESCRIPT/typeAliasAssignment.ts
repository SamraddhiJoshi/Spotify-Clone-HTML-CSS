export {};
// 1. Primitive Alias
type CustomerID = string;

// 2. Union Alias
type OrderStatus = "pending" | "shipped" | "returned";

// 3. Customer Object Alias
type Customer = {
  id: CustomerID;
  name: string;
  email?: string;
};

// 4. Function Type Alias
type ProcessOrder = (orderId: number, callback: (status: OrderStatus) => void) => void;

// Implement function
const processOrder: ProcessOrder = (orderId, callback) => {
  console.log(`Processing order: ${orderId}`);
  let status: OrderStatus = "shipped";
  callback(status);
};

// 5. Generic Alias
type Container<T> = {
  value: T;
  timestamp: Date;
};

// Create customers
let customer1: Customer = {
  id: "C101",
  name: "Amit"
};

let customer2: Customer = {
  id: "C102",
  name: "Neha",
  email: "neha@example.com"
};

// Use Container
let customerContainer: Container<Customer> = {
  value: customer1,
  timestamp: new Date()
};

// Function call
processOrder(1, (status) => {
  console.log(`Order status: ${status}`);
});

// Print result
console.log("Customer Container:", customerContainer);