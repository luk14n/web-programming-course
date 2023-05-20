// Завдання 1 - Створити 5 змінних рядкового типу
const str1 = "Привіт";
const str2 = "світ";
const str3 = "JavaScript";
const str4 = "це";
const str5 = "чудово";

// Завдання 2 - Використання неочевидних прикладів конкатенації рядків в JavaScript
const concat1 = str1.concat(" ", str2); // Конкатенація двох рядків з пробілом між ними
const concat2 = `${str3} ${str4} ${str5}`; // Використання шаблонних рядків для конкатенації рядків

// Завдання 3 - Використання методів toLowerCase() і toUpperCase()
const lowerCase = str1.toLowerCase(); // Перетворення рядка на рядок у нижньому регістрі
const upperCase = str2.toUpperCase(); // Перетворення рядка на рядок у верхньому регістрі

// Завдання 4 - Використання методів replace(), trim() і match()
const replaced = str3.replace("JavaScript", "Python"); // Заміна підрядка в рядку
const trimmed = str4.trim(); // Видалення пробілів з початку і кінця рядка
const matched = str5.match(/[а-я]/gi); // Пошук усіх букв української абетки у рядку

// Завдання 5 - Використання методу sort() в поєднанні з localeCompare()
const words = ["яблуко", "банан", "вишня"];
words.sort((a, b) => a.localeCompare(b)); // Сортування масиву рядків за алфавітом

// Завдання 6 - Використання методу includes()
const sentence = "Це речення";
const containsWord = sentence.includes("речення"); // Перевірка, чи містить рядок певне слово

// Завдання 7 - Створення функції welcomeUsers, яка приймає масив об'єктів з даними користувачів
// і формує привітання для кожного з них у вигляді нового масиву рядків з використанням шаблонних рядків.
function welcomeUsers(users) {
  return users.map((user) => `Привіт, ${user.name}! Вам ${user.age} років.`);
}

// Завдання 8 - Створення функції, яка перевіряє, чи заданий рядок є паліндромом.
function isPalindrome(word) {
  const reversed = word.split("").reverse().join("");
  return word === reversed;
}

// Виведення результатів в консоль
console.log("Завдання 1:", str1, str2, str3, str4, str5);
console.log("Завдання 2:", concat1, concat2);
console.log("Завдання 3:", lowerCase, upperCase);
console.log("Завдання 4:", replaced, trimmed, matched);
console.log("Завдання 5:", words);
console.log("Завдання 6:", containsWord);
console.log("Завдання 7:", welcomeUsers([{ name: "Іван", age: 25 }, { name: "Марія", age: 30 }]));
console.log("Завдання 8:", isPalindrome("ротор"));

