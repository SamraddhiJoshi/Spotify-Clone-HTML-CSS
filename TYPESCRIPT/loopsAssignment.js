"use strict";
// Sample data
const transactions = [
    { id: 1, type: "checkout" },
    { id: 2, type: "cancelled" },
    { id: 3, type: "return" },
    { id: 4, type: "priority" },
    { id: 5, type: "checkout" }
];
const inventory = {
    "The Hobbit": 3,
    "1984": 5,
    "TypeScript Guide": 2
};
const visitors = ["Alice", "Bob", "Carol"];
// 1. Count transactions using for loop
let counts = {
    checkout: 0,
    return: 0,
    cancelled: 0,
    priority: 0
};
for (let i = 0; i < transactions.length; i++) {
    counts[transactions[i].type]++;
}
console.log("Transaction Counts:", counts);
// 2. while(true) with break
let i = 0;
while (true) {
    let tx = transactions[i];
    if (!tx)
        break;
    if (tx.type === "priority") {
        console.log("Priority found, stopping loop");
        break;
    }
    console.log("Processing:", tx.id);
    i++;
}
// 3. do...while loop
let index = 0;
do {
    let tx = transactions[index];
    if (tx && tx.type === "return") {
        console.log("Handling return:", tx.id);
    }
    index++;
} while (index < transactions.length);
// 4. for...in (reset inventory)
for (let book in inventory) {
    inventory[book] = 0;
}
console.log("Updated Inventory:", inventory);
// 5. Reverse visitors using for...of
for (let name of visitors.reverse()) {
    console.log("Visitor:", name);
}
