// Завдання 1 - створити 5 масивів з різними типами даних
const array1 = [1, 2, 3]; // масив чисел
const array2 = ['a', 'b', 'c']; // масив рядків
const array3 = [true, false]; // масив булевих значень
const array4 = [{ name: 'Lukian' }, { name: 'Lucas' }]; // масив об'єктів
const array5 = [null, undefined]; // масив значень null та undefined

// Завдання 2 - використати цикл for
for (let i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}

// Завдання 3 - використати цикл while
let j = 0;
while (j < array2.length) {
  console.log(array2[j]);
  j++;
}

// Завдання 4 - використати цикл do...while
let k = 0;
do {
  console.log(array3[k]);
  k++;
} while (k < array3.length);

// Завдання 5 - створити функцію sum, яка повертає суму всіх чисел в масиві
function sum(numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

// Завдання 6 - створити функцію getSentence, яка повертає речення зі слів масиву
function getSentence(words) {
  return words.join(' ');
}

// Завдання 7 - створити функцію sumNumArrays, яка повертає суму чисел з двох масивів
function sumNumArrays(array1, array2) {
  const combinedArray = array1.concat(array2);
  return sum(combinedArray);
}

// Завдання 8 - створити функцію welcomeUsers, яка формує привітання для користувачів
function welcomeUsers(users) {
  const greetings = [];
  for (let user of users) {
    greetings.push(`Welcome, ${user.name}!`);
  }
  return greetings;
}

// Виклик функцій та використання змінних
console.log(sum(array1));
console.log(getSentence(array2));
console.log(sumNumArrays(array1, array2));
console.log(welcomeUsers(array4));
