// Function that handles critical error (never type)
function throwError(message: string): never {
  throw new Error(message);
}

// Function to process transaction
function processTransaction(
  amount: number,
  description: string | undefined,
  isCredit: boolean
): void {

  // Check for negative amount
  if (amount < 0) {
    throwError("Invalid transaction: Amount cannot be negative");
  }

  // Handle undefined description
  let desc: string = description ? description : "No description provided";

  // Print transaction summary
  console.log("Transaction Details:");
  console.log(`Amount: ${amount}`);
  console.log(`Description: ${desc}`);
  console.log(`Type: ${isCredit ? "Credit" : "Debit"}`);
}

// Calling the function
processTransaction(500, "Salary", true);
processTransaction(200, undefined, false);