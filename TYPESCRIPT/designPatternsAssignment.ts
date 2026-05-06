export {};
// 1. Singleton Pattern
class CafeManager {
  private static instance: CafeManager;

  private constructor() {}

  static getInstance(): CafeManager {
    if (!CafeManager.instance) {
      CafeManager.instance = new CafeManager();
    }
    return CafeManager.instance;
  }
}

// 2. Factory Pattern
interface Drink {
  serve(): void;
}

class Latte implements Drink {
  serve(): void {
    console.log("Serving Latte");
  }
}

class Espresso implements Drink {
  serve(): void {
    console.log("Serving Espresso");
  }
}

class DrinkFactory {
  static createDrink(type: "latte" | "espresso"): Drink {
    if (type === "latte") return new Latte();
    if (type === "espresso") return new Espresso();
    throw new Error("Unknown drink");
  }
}

// 3. Observer Pattern
interface Observer {
  update(message: string): void;
}

class Customer implements Observer {
  update(message: string): void {
    console.log(`Customer: ${message}`);
  }
}

class Inventory implements Observer {
  update(message: string): void {
    console.log(`Inventory: ${message}`);
  }
}

// Promotion System (required)
class PromotionSystem implements Observer {
  update(message: string): void {
    console.log(`Promotion: ${message} - Special offer available!`);
  }
}

class DrinkOrder {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  notifyAll(message: string): void {
    this.observers.forEach(obs => obs.update(message));
  }

  completeOrder(): void {
    this.notifyAll("Drink is ready!");
  }
}

// 4. Strategy Pattern
interface PrepStrategy {
  prepare(): void;
}

class FastPrep implements PrepStrategy {
  prepare(): void {
    console.log("Fast preparation");
  }
}

class EcoPrep implements PrepStrategy {
  prepare(): void {
    console.log("Eco-friendly preparation");
  }
}

class Barista {
  private strategy: PrepStrategy;

  constructor(strategy: PrepStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: PrepStrategy): void {
    this.strategy = strategy;
  }

  makeDrink(): void {
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