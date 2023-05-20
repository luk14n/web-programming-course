// Клас гри - Гравець
class GameCharacter {
  constructor(name, type, level) {
    this.name = name;
    this.type = type;
    this.level = level;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getType() {
    return this.type;
  }

  setType(type) {
    this.type = type;
  }

  getLevel() {
    return this.level;
  }

  setLevel(level) {
    this.level = level;
  }

  move(x, y) {
    console.log(`${this.name} рухається до координат (${x}, ${y}).`);
  }
}

// Успадкування від класу GameCharacter
class Warrior extends GameCharacter {
  constructor(name, level) {
    super(name, "Воїн", level);
  }
}

class Mage extends GameCharacter {
  constructor(name, level) {
    super(name, "Маг", level);
  }
}

// Створення екземплярів класу GameCharacter та його підкласів
const character = new GameCharacter("Джон", "Лицар", 5);
console.log(character.getName());  // Виведе: Джон
character.setType("Паладін");
console.log(character.getType());  // Виведе: Паладін
character.move(10, 20);  // Виведе: Джон рухається до координат (10, 20).

const warrior = new Warrior("Артур", 3);
console.log(warrior.getType());  // Виведе: Воїн

const mage = new Mage("Мерлін", 8);
console.log(mage.getLevel());  // Виведе: 8


// Функція-конструктор для автомобіля
function Car(brand, model, year, color) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.color = color;
}

// Додавання методів за допомогою прототипу
Car.prototype.getBrand = function() {
  return this.brand;
}

Car.prototype.getModel = function() {
  return this.model;
}

Car.prototype.getYear = function() {
  return this.year;
}

Car.prototype.getColor = function() {
  return this.color;
}

Car.prototype.setColor = function(color) {
  this.color = color;
}

Car.prototype.move = function(x, y) {
  console.log(`${this.brand} ${this.model} рухається до координат (${x}, ${y}).`);
}

// Створення екземпляру автомобіля та його підкласів
const car = new Car("Toyota", "Camry", 2022, "Срібний");
console.log(car.getBrand());  // Виведе: Toyota
console.log(car.getModel());  // Виведе: Camry
console.log(car.getYear());   // Виведе: 2022
console.log(car.getColor());  // Виведе: Срібний
car.setColor("Червоний");
console.log(car.getColor());  // Виведе: Червоний
car.move(50, 60);  // Виведе: Toyota Camry рухається до координат (50, 60).


// Демонстрація методів .bind(), .call() та .apply()

// Використання .bind()
const boundMove = car.move.bind(car);
boundMove(70, 80);  // Виведе: Toyota Camry рухається до координат (70, 80).

// Використання .call()
car.move.call({ brand: "BMW", model: "X5" }, 90, 100);  // Виведе: BMW X5 рухається до координат (90, 100).

// Використання .apply()
car.move.apply({ brand: "Mercedes", model: "E-Class" }, [110, 120]);  // Виведе: Mercedes E-Class рухається до координат (110, 120).
