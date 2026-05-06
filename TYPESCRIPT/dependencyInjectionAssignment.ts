// 1. Interface (Contract)
interface PaymentGateway {
  processPayment(amount: number): Promise<boolean>;
}

// 2. Stripe Gateway
class StripeGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Processing $${amount} via Stripe`);
    return true;
  }
}

// 3. PayPal Gateway
class PaypalGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Processing $${amount} via PayPal`);
    return true;
  }
}

// 4. BankTransfer Gateway
class BankTransferGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Processing $${amount} via Bank Transfer`);
    return true;
  }
}

// 5. Payment Processor (Dependency Injection)
class PaymentProcessor {
  constructor(private gateway: PaymentGateway) {}

  async pay(amount: number): Promise<void> {
    const success = await this.gateway.processPayment(amount);

    if (success) {
      console.log("Payment successful");
    } else {
      console.log("Payment failed");
    }
  }
}

// 6. Mock Gateway (Failure Test)
class MockFailGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Mock payment failed for $${amount}`);
    return false;
  }
}

// ---- Usage ----

// Using Bank Transfer
const bankGateway = new BankTransferGateway();
const processor1 = new PaymentProcessor(bankGateway);
processor1.pay(500);

// Using Stripe
const stripeGateway = new StripeGateway();
const processor2 = new PaymentProcessor(stripeGateway);
processor2.pay(300);

// Testing with failure mock
const mockFail = new MockFailGateway();
const testProcessor = new PaymentProcessor(mockFail);
testProcessor.pay(100);