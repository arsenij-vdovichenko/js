//Створіть змінну, що симулює вибір варіанта зі списку. Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". Використайте switch
let drink = "Чай"; 
switch (drink) {
  case "Кава":
    console.log("Ви обрали Каву");
    break;
  case "Чай":
    console.log("Ви обрали Чай");
    break;
  case "Сік":
    console.log("Ви обрали Сік");
    break;
  default:
    console.log("компот");
}

//Створіть змінну для зберігання введеного рядка, який може бути днем тижня. Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.
let day = "Середа";
switch (day) {
  case "Понеділок":
  case "Вівторок":
  case "Середа":
  case "Четвер":
  case "П’ятниця":
    console.log("Це робочий день");
    break;
  case "Субота":
  case "Неділя":
    console.log("Це вихідний");
    break;
  default:
    console.log("введено невірний день тижня");
}

//Створіть змінну для зберігання номера місяця. За номером місяця визначайте пору року і виводьте відповідне повідомлення.
let month = 4;
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Зима");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Літо");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Осінь");
    break;
  default:
    console.log("невірний номер місяця");
}
//Створіть змінну для зберігання назви кольору. Виводьте повідомлення відповідно до вибраного кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".
let color = "зелений";
switch (color.toLowerCase()) {
  case "червоний":
    console.log("стоп");
    break;
  case "зелений":
    console.log("йти");
    break;
  case "жовтий":
    console.log("чекати");
    break;
  default:
    console.log("уйди");
}
//Створіть змінні для зберігання двох чисел та оператора (як у списку select). Виконайте відповідну операцію та виведіть результат. У випадку ділення на нуль — виведіть попередження.
let num1 = 10;
let num2 = 0;
let operator = "/";  
let result;
switch (operator) {
  case "+":
    result = num1 + num2;
    console.log("Результат", result);
    break;
  case "-":
    result = num1 - num2;
    console.log("Результат", result);
    break;
  case "*":
    result = num1 * num2;
    console.log("Результат", result);
    break;
  case "/":
    if (num2 === 0) {
      console.log("Помилка: ділення на нуль заборонене!");
    } else {
      result = num1 / num2;
      console.log("Результат:", result);
    }
    break;
  default:
    console.log("Невідомий оператор");
}