// 1. Створення 5 масивів з різними типами даних

const numbers = [1, 2, 3, 4, 5]; // масив чисел
const strings = ['apple', 'banana', 'orange']; // масив рядків
const boolean = [true, false, true]; // масив булевих значень
const mixed = [1, 'two', true, null]; // масив з різними типами даних
const nested = [[1, 2], [3, 4], [5, 6]]; // вкладений масив

// 2. Використання методів push() і pop()

numbers.push(6); // додаємо елемент 6 в кінець масиву
console.log(numbers); // [1, 2, 3, 4, 5, 6]

const removedElement = numbers.pop(); // видаляємо останній елемент масиву та зберігаємо його
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(removedElement); // 6

// 3. Використання методів shift() і unshift()

strings.shift(); // видаляємо перший елемент масиву
console.log(strings); // ['banana', 'orange']

numbers.unshift(0); // додаємо елемент 0 на початок масиву
console.log(numbers); // [0, 1, 2, 3, 4, 5]

// 4. Використання методу concat()

const combinedArray = numbers.concat(strings); // об'єднуємо два масиви
console.log(combinedArray); // [0, 1, 2, 3, 4, 5, 'banana', 'orange']

// 5. Створення функції swap з деструктуризацією та звичайним підходом

// Функція swap з використанням деструктуризації
function swapWithDestructuring(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

// Функція swap зі звичайним підходом
function swapWithoutDestructuring(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

const arr = [1, 2, 3, 4, 5];
swapWithDestructuring(arr, 1, 3); // замінюємо елементи місцями з використанням деструктуризації
console.log(arr); // [1, 4, 3, 2, 5]

swapWithoutDestructuring(arr, 2, 4); // замінюємо елементи місцями без деструктуризації
console.log(arr); // [1, 4, 5, 2, 3]

// 6. Функції, що приймають масив та повертають трансформоване значення

function doubleArrayValues(arr) {
  return arr.map((num) => num * 2); // масив помножений на 2
}

function getEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0); // масив, що містить тільки парні числа
}

const numbersArray = [1, 2, 3, 4, 5];
const doubledNumbers = doubleArrayValues(numbersArray);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

const evenNumbers = getEvenNumbers(numbersArray);
console.log(evenNumbers); // [2, 4]

