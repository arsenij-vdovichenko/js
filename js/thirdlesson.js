const message = "i love js"
const message2 ="arsenii"
const result = message2 +""+ message
console.log(result[4]);

const a = 5 
const b = 10 
const c = "200"
const res = a + b + c
console.log(res);
console.log(typeof res);


const userName = "Arsenii vdovychenko"
console.log(userName.length);//length повератає довжину рядка
console.log(userName[userName.length-1]); //[userName.length-1] повертає значення останього елементу в рядку

const upperText = userName.toUpperCase()//медот який призводить до верхнього регістру
console.log(upperText);

const lowerText = userName.toLowerCase()// медот який призводить до нижнього регістру
console.log(lowerText);


const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laboriosam cupiditate mollitia necessitatibus quod! Rerum dolor vel molestiae, ad deleniti eaque maiores nisi id architecto maxime sunt inventore, animi accusantium?"
console.log(message[message.length-1]);
console.log(message.indexOf(""));// повертає індекс  першого іхлдження якщо не знайшов повертає -1
console.log(message.includes(""));// повертає true або false
const userEmail = "test@gmail.com";
console.log(userEmail.startsWith("test"));
console.log(userEmail.endsWith("com"));

const testText = prompt("ввудіть ваше ім'я").trim();
console.log(testText.length);

const userNumber = "8458-59590539"
console.log(userNumber.length);
const addedNumber = userNumber.padStart(15,"+38");
console.log(addedNumber);
const fixNumber = userNumber.padEnd


//Створити змінну, яка містить рядок з вашим ім'ям та прізвищем. Використовуючи метод .length, вивести в консоль кількість символів у рядку.
const name = "arsenii"
const lastName = "vdovychenko"
const result = `${name} ${lastName}`
console.log(result.length);
console.log(`довжина рядка дорівнює ${result.length}`);


//Створити змінну, яка містить рядок з вашим ім'ям. Використовуючи метод .toUpperCase(), перетворити рядок у верхній регістр та вивести результат в консоль.
const myName = "arsenii"
console.log(myName.toUpperCase());


//Створити змінну, яка містить рядок з вашим ім'ям. Використовуючи метод .charAt(), вивести перший символ вашого імені в консоль.
const userName = "arsenii"
console.log(userName.charAt());


///Створити змінну, яка містить рядок з вашим ім'ям та прізвищем. Використовуючи метод .indexOf(), знайти і вивести в консоль позицію, на якій знаходиться пробіл між ім'ям та прізвищем.
const.userName userName = "arsenii vdovychenko"
console.log(`${userName.indexOf(" ") +1}`);


//Створити змінну, яка містить рядок з вашим ім'ям. Використовуючи метод .replace(), замінити першу літеру вашого імені на символ "@" та вивести результат в консоль.
const myName= "arsenii"
const firstLetter = 
console.log(myName.replace("M", "@"));


//Створити змінну, яка містить рядок зі словом "JavaScript". Використовуючи метод .substring(), вивести підстроку, яка містить перші 4 символи слова "Java".
const message = "JavaScript"
console.log(message.substring());

const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempora asperiores perferendis, officia nihil placeat beatae, culpa maxime dignissimos assumenda tempore ad? Dolorem minima, tempora architecto magnam harum iste tenetur."
const slicemessage = message.slice(0 , 40)
console.log(slicemessage




























