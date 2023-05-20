// 1. Створення функцій, які працюють з різними типами даних

// Функція, яка працює з числами
function addNumbers(a, b) {
  return a + b;
}

// Функція-вираз, яка працює з рядками
const capitalizeString = function (str) {
  return str.toUpperCase();
};

// Стрілкова функція, яка працює з масивами
const getArrayLength = (arr) => {
  return arr.length;
};

// Функція, яка працює з булевим значенням
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Функція-вираз з використанням switch, яка працює зі строками
const getDayOfWeek = function (dayNumber) {
  switch (dayNumber) {
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    case 7:
      return 'Sunday';
    default:
      return 'Invalid day number';
  }
};

// 2. Використання різних видів функцій: arrow, function expression, function declaration

// Функція-вираз, яка працює з об'єктом
const getFullName = function (person) {
  return `${person.firstName} ${person.lastName}`;
};

// Стрілкова функція, яка працює зі списком товарів
const calculateTotalPrice = (products) => {
  let totalPrice = 0;
  for (let product of products) {
    totalPrice += product.price;
  }
  return totalPrice;
};

// Функція-оголошення, яка працює з датою
function isFutureDate(date) {
  if (date > new Date()) {
    return true;
  } else {
    return false;
  }
}

// 3. Використання if...else в тілі функцій

// Функція, яка перевіряє, чи є число додатним
function isPositiveNumber(num) {
  if (num > 0) {
    return true;
  } else {
    return false;
  }
}

// 4. Використання switch...case в тілі функцій (див. функцію getDayOfWeek вище)

// 5. Використання класу для створення Animal -> Dog та Cat

// Клас Animal
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat(food) {
    return `${this.name} is eating ${food}.`;
  }

  sleep() {
    return `${this.name} is sleeping.`;
  }
}

// Клас Dog, що успадковується від Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    return `${this.name} is barking!`;
  }
}

// Клас Cat, що успадковується від Animal
class Cat extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  meow() {
    return `${this.name} says meow!`;
  }
}

// Приклад використання функцій та класів

console.log(addNumbers(3, 5)); // 8

const person = { firstName: 'John', lastName: 'Doe' };
console.log(capitalizeString(getFullName(person))); // "JOHN DOE"

const products = [{ name: 'Shirt', price: 20 }, { name: 'Pants', price: 30 }];
console.log(calculateTotalPrice(products)); // 50

console.log(isEven(4)); // true

console.log(getDayOfWeek(1)); // "Monday"

console.log(isPositiveNumber(-5)); // false

const animal = new Animal('Lion');
console.log(animal.eat('meat')); // "Lion is eating meat."
console.log(animal.sleep()); // "Lion is sleeping."

const dog = new Dog('Buddy', 'Golden Retriever');
console.log(dog.eat('bones')); // "Buddy is eating bones."
console.log(dog.sleep()); // "Buddy is sleeping."
console.log(dog.bark()); // "Buddy is barking!"

const cat = new Cat('Whiskers', 'Gray');
console.log(cat.eat('fish')); // "Whiskers is eating fish."
console.log(cat.sleep()); // "Whiskers is sleeping."
console.log(cat.meow()); // "Whiskers says meow!"
