// 1. Function with optional parameter
function describePerson(name: string, age?: number): void {
  if (typeof age === "number") {
    console.log(`Name: ${name}, Age: ${age}`);
  } else {
    console.log(`Name: ${name}, Age: Unknown`);
  }
}

// 2. Function with default parameter
function calculatePrice(basePrice: number, discount: number = 0.1): number {
  return basePrice - basePrice * discount;
}

// ---- Test Calls ----
describePerson("Eve");
describePerson("Frank", 28);

console.log("Price (default discount):", calculatePrice(100));
console.log("Price (20% discount):", calculatePrice(100, 0.2));