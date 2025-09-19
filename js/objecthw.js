//Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку. 
const bankAccount = {
  ownerName: "Арсеній",
  accountNumber: "12345",
  balance: 15467,
  deposit(amount) { this.balance += amount; },
  withdraw(amount) { this.balance -= amount; }
};

if (confirm("Поповнити рахунок?")) {
  let sum = +prompt("Сума:");
  bankAccount.deposit(sum);
  alert(`Баланс: ${bankAccount.balance} грн`);
} else if (confirm("Зняти гроші?")) {
  let sum = +prompt("Сума:");
  bankAccount.withdraw(sum);
  alert(`Баланс: ${bankAccount.balance} грн`);
} else {
  alert(`Баланс: ${bankAccount.balance} грн`);
}


//Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з prompt(). Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки
const weather = {
  temperature: 0,
  humidity: 50,
  windSpeed: 10,

  isFreezing() {
    return this.temperature < 0;
  }
};

weather.temperature = +prompt("Введіть температуру :");

if (weather.isFreezing()) {
  alert("Температура нижче 0 градусів Цельсія");
} else {
  alert("Температура вище або дорівнює 0 градусів Цельсія");
}


//Створіть об’єкт "user", який буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. 
const user = {
  name: "Арсеній",
  email: "arsenii@gmail.com",
  password: "12345",

  login(inputEmail, inputPassword) {
    if (this.email === inputEmail && this.password === inputPassword) {
      alert("Вхід виконано успішно!");
    } else {
      alert("Неправильний email або пароль!");
    }
  }
};


const email = prompt("Введіть email:");
const password = prompt("Введіть пароль:");

user.login(email, password);


//Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей в консоль. 
const movie = {
  title: "goiteens",
  director: "uriy",
  year: 2011,
  rating: 5.7,

  isHighRated() {
    return this.rating > 5;
  }
};

console.log("Назва:", movie.title);
console.log("Режисер:", movie.director);
console.log("Рік:", movie.year);
console.log("Рейтинг:", movie.rating);


console.log("Рейтинг вище 8?", movie.isHighRated());