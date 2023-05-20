// Завдання 1 - Створення 5 масивів з різними типами даних
const array1 = [1, 2, 3]; // масив чисел
const array2 = ['apple', 'banana', 'orange']; // масив рядків
const array3 = [true, false, true]; // масив булевих значень
const array4 = [{ name: 'John' }, { name: 'Jane' }]; // масив об'єктів
const array5 = [null, undefined, NaN]; // масив спеціальних значень

// Завдання 2 - Використання методу forEach()
array1.forEach((element) => {
  console.log(element);
});

// Завдання 3 - Використання методу map()
const newArray2 = array2.map((element) => element.toUpperCase());
console.log(newArray2);

// Завдання 4 - Використання методу filter()
const newArray3 = array3.filter((element) => element === true);
console.log(newArray3);

// Завдання 5 - Використання методу reduce()
const sumArray1 = array1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sumArray1);

// Завдання 6 - Використання методів sort(), includes(), join()
array2.sort(); // Сортування масиву за алфавітом
console.log(array2);

const hasApple = array2.includes('apple'); // Перевірка наявності 'apple' в масиві
console.log(hasApple);

const joinedArray2 = array2.join(', '); // Об'єднання елементів масиву в рядок, розділених комою
console.log(joinedArray2);

// Завдання 7 - Створення функції sum з використанням map()
function sum(array) {
  const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
}
console.log(sum(array1));

// Завдання 8 - Створення функції getSentence з використанням reduce()
function getSentence(words) {
  const sentence = words.reduce((accumulator, currentValue) => accumulator + ' ' + currentValue);
  return sentence;
}
console.log(getSentence(['Hello', 'world', '!']));

// Завдання 9 - Створення функції sumNumArrays з використанням reduce()
function sumNumArrays(array1, array2) {
  const sum = array1.concat(array2).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
}
console.log(sumNumArrays([1, 2, 3], [4, 5, 6]));

// Завдання 10 - Створення функції welcomeUsers з використанням map()
function welcomeUsers(users) {
  const greetings = users.map((user) => `Welcome, ${user.name}!`);
  return greetings;
}
console.log(welcomeUsers([{ name: 'John' }, { name: 'Jane' }]));

