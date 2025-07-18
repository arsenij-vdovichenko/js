//Створити змінні celsius, fahrenheit для зберігання температури за Цельсієм та Фаренгейтом. Перевести температуру з Цельсія у Фаренгейти за допомогою формули та вивести результат в консоль.
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(`${celsius}°C = ${fahrenheit}°F`);

//Створити змінну daysInMonth для зберігання кількості днів у місяці. Обчислити кількість hoursInMonth годин та minutesInMonth хвилин у цьому місяці за допомогою оператора множення та вивести результат в консоль.
let daysInMonth = 30; 
let hoursInMonth = daysInMonth * 24; 
let minutesInMonth = hoursInMonth * 60; 
console.log(`У місяці з ${daysInMonth} днями:`);
console.log(`${hoursInMonth} годин`);
console.log(`${minutesInMonth} хвилин`);

//Створити змінні health, energy для зберігання рівня здоров'я та енергії гравця в грі. Зменшити рівень здоров'я та енергії гравця за допомогою операторів віднімання та вивести результат в консоль.
let health = 100; 
let energy = 80;  
health = health - 90;
energy = energy - 50;
console.log(`Рівень здоров'я: ${health}`);
console.log(`Рівень енергії: ${energy}`);

//Створити змінну totalPrice для зберігання суми покупки в магазині. Застосувати знижку discount в розмірі 10% до цієї суми за допомогою оператора множення. Результат зберегти в змінній discountedPrice та вивести результат в консоль.
let totalPrice = 500;
let discount = 10; 
let discountedPrice = totalPrice * (discount);
console.log(`Сума покупки зі знижкою: ${discountedPrice} грн`);

//Створити змінну const floatNumber = 12.78 для зберігання числа з плаваючою комою. Використати метод Math.floor() для округлення числа до меншого. Результат зберегти в змінній roundedDown та вивести результат в консоль.
const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber); 
console.log(`Початкове число: ${floatNumber}`);
console.log(`Округлене вниз: ${roundedDown}`);

//Створити змінну const floatString = "45.67"  для зберігання рядка, який містить числа з плаваючою комою. Використати метод parseFloat() для перетворення рядка у десяткове число. Результат зберегти в змінній parsedFloat та вивести результат в консоль.
const floatString = "45.67";
const parsedFloat = parseFloat(floatString);
console.log(`Рядок: "${floatString}"`);
console.log(`Перетворене число: ${parsedFloat}`);