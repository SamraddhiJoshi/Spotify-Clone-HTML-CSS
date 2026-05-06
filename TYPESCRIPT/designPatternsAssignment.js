"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Singleton Pattern
class CafeManager {
    constructor() { }
    static getInstance() {
        if (!CafeManager.instance) {
            CafeManager.instance = new CafeManager();
        }
        return CafeManager.instance;
    }
}
class Latte {
    serve() {
        console.log("Serving Latte");
    }
}
class Espresso {
    serve() {
        console.log("Serving Espresso");
    }
}
class DrinkFactory {
    static createDrink(type) {
        if (type === "latte")
            return new Latte();
        if (type === "espresso")
            return new Espresso();
        throw new Error("Unknown drink");
    }
}
class Customer {
    update(message) {
        console.log(`Customer: ${message}`);
    }
}
class Inventory {
    update(message) {
        console.log(`Inventory: ${message}`);
    }
}
// Promotion System (required)
class PromotionSystem {
    update(message) {
        console.log(`Promotion: ${message} - Special offer available!`);
    }
}
class DrinkOrder {
    constructor() {
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    notifyAll(message) {
        this.observers.forEach(obs => obs.update(message));
    }
    completeOrder() {
        this.notifyAll("Drink is ready!");
    }
}
class FastPrep {
    prepare() {
        console.log("Fast preparation");
    }
}
class EcoPrep {
    prepare() {
        console.log("Eco-friendly preparation");
    }
}
class Barista {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    makeDrink() {
        this.strategy.prepare();
    }
}
// ---- Test / Usage ----
// Singleton
const m1 = CafeManager.getInstance();
const m2 = CafeManager.getInstance();
console.log(`Singleton same instance: ${m1 === m2}`);
// Factory
const drink = DrinkFactory.createDrink("latte");
drink.serve();
// Observer
const order = new DrinkOrder();
order.addObserver(new Customer());
order.addObserver(new Inventory());
order.addObserver(new PromotionSystem());
order.completeOrder();
// Strategy
const barista = new Barista(new FastPrep());
barista.makeDrink();
barista.setStrategy(new EcoPrep());
barista.makeDrink();
