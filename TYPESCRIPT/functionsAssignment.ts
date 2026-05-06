// 1. Function with optional parameter
function displayMember(id: number, name: string, email?: string): void {
  console.log(`ID: ${id}, Name: ${name}`);
  if (email) {
    console.log(`Email: ${email}`);
  }
}

// 2. Rest parameters
function calculateFines(...fines: number[]): number {
  let total = 0;
  for (let fine of fines) {
    total += fine;
  }
  return total;
}

// 3. Default parameter
function membershipFee(price: number, discountRate: number = 0.1): number {
  return price - price * discountRate;
}

// 4. Callback + arrow function
function greetVisitor(visitor: string, formatter: (name: string) => void): void {
  formatter(visitor);
}

const vipGreet = (name: string) => console.log(`Welcome VIP ${name}!`);

// 5. Recursion
function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// 6. Function overloading
function generateReport(data: object[]): string;
function generateReport(data: object[], format: "json"): string;
function generateReport(data: any[], format?: string): string {
  if (format === "json") {
    return JSON.stringify(data, null, 2);
  }
  return data.map(item => JSON.stringify(item)).join("\n");
}

// 7. Function type alias
type VisitorFormatter = (name: string) => void;
let consoleGreet: VisitorFormatter = (name) => console.log(`Hello, ${name}!`);

// ---- Calls ----

// displayMember
displayMember(1, "Amit", "amit@example.com");
displayMember(2, "Neha");

// calculateFines
console.log("Total fines:", calculateFines(5, 10, 2.5));

// membershipFee
console.log("Fee (default):", membershipFee(100));
console.log("Fee (20%):", membershipFee(100, 0.2));

// greetVisitor
greetVisitor("Alice", vipGreet);
greetVisitor("Bob", consoleGreet);

// factorial
console.log("Factorial of 5:", factorial(5));

// generateReport
let books = [{ title: "1984" }, { title: "Harry Potter" }];

console.log("Text Report:\n", generateReport(books));
console.log("JSON Report:\n", generateReport(books, "json"));