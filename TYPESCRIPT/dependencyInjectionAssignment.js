"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 2. Stripe Gateway
class StripeGateway {
    processPayment(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Processing $${amount} via Stripe`);
            return true;
        });
    }
}
// 3. PayPal Gateway
class PaypalGateway {
    processPayment(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Processing $${amount} via PayPal`);
            return true;
        });
    }
}
// 4. BankTransfer Gateway
class BankTransferGateway {
    processPayment(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Processing $${amount} via Bank Transfer`);
            return true;
        });
    }
}
// 5. Payment Processor (Dependency Injection)
class PaymentProcessor {
    constructor(gateway) {
        this.gateway = gateway;
    }
    pay(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            const success = yield this.gateway.processPayment(amount);
            if (success) {
                console.log("Payment successful");
            }
            else {
                console.log("Payment failed");
            }
        });
    }
}
// 6. Mock Gateway (Failure Test)
class MockFailGateway {
    processPayment(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Mock payment failed for $${amount}`);
            return false;
        });
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
