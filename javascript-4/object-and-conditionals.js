// Створюємо об’єкти з різними типами даних
const obj1 = {name: 'John', age: 30};
const obj2 = [1, 2, 3];
const obj3 = 'Hello World';
const obj4 = true;
const obj5 = null;

// Додаємо нові та змінюємо існуючі значення
obj1.surname = 'Doe';
obj2.push(4);
obj3 = 'Goodbye World';
obj4 = false;
obj5 = undefined;

// Використовуємо if…else для зміни
if (obj1.age > 40) {
  obj1.status = 'old';
} else {
  obj1.status = 'young';
}

// Використовуємо switch…case для виведення дня тижня
const today = new Date().getDay();
let day;
switch (today) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
  default:
    day = 'Invalid day';
    break;
}
console.log('Today is ' + day);

// Використовуємо методи для роботи з об’єктами
const obj6 = {a: 1, b: 2};
const obj7 = {c: 3, d: 4};
const mergedObj = Object.assign(obj6, obj7); // об'єднуємо об'єкти
console.log(mergedObj); // {a: 1, b: 2, c: 3, d: 4}

Object.freeze(obj1); // заморожуємо об'єкт obj1
console.log(Object.isFrozen(obj1)); // true

const keys = Object.keys(obj2); // повертаємо ключі об'єкту obj2
console.log(keys); // ['0', '1', '2', '3']

const entries = Object.entries(obj3); // повертаємо пари ключ-значення об'єкту obj3
console.log(entries); // [['0', 'G'], ['1', 'o'], ['2', 'o'], ['3', 'd'], ['4', 'b'], ['5', 'y'], ['6', 'e'], ['7', ' '], ['8', 'W'], ['9', 'o'], ['10', 'r'], ['11', 'l'], ['12', 'd']]
