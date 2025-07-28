//Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.
const result = 5 + 5 + '5';
console.log(result);
console.log(typeof result);

//Створіть змінну email з вашою електронною адресою. Напишіть скрипт, який перевіряє чи містить змінна email символ @ і рахує загальну кількість символів. Результат виведіть в консоль.
let email = "arsenii@gmail.com";
let containsAt = email.includes('@');
let length = email.length;
console.log("містить символ @", containsAt);
console.log("всего символів:", length);

//Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.
let word1 = "My";
let word2 = "name";
let word3 = "is";
let fullName = word1 + " " + word2 + " " + word3;
fullName += " Viktor";
console.log(fullName);

//Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень»
const userName = "арсеній";
const payment = 300;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);