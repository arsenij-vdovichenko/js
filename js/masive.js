// const num = [[1,2,3], [4,5,6],[7,8,9],]
// console.log(num[1][1]);

//Пошук першого непарного числа

// const number = [12, 47, 65, 88, 32, 77, 86,];
// for (q of number) {
//     if (q % 2 === 1) {
//         console.log(q);
        
//     }
// }

//порахувати суму чисел які є додатними 
// const number = [
//   12, 47, 5, 89, 33, 
//   76, 21, 64, 90, 18, 
//   52, 7, 38, 95, 41, 
//   29, 83, 10, 67, 54
// ];
// let sum = 0
// for (const q of number){
//     if (q > 0){
//         console.log(q);
        
//     }
// }

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90, 44, 99, 87, 34,];
// // cart[]
// cart[cart.length]=1000;
// console.log(cart);

// const numbers = [12, 47, 5, 88, 63, 29, 94, 31, 56, 72, 6, 18, 40, 67, 81, 25, 90, 14, 38, 53];

// let minNumbers = numbers[0]

// for(let i = 0; i < numbers.length; i+=){
    
// if (minNumbers > numbers[i]){
//     minNumbers = numbers[i]
// }
    
// }
// console.log(minNumbers);

//Напиши скрипт який рахує суму елементів двух масивів. Без методу concat()
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let sumArray = 0
// // for (let i = 0; i < array1.length; i += 1){
// //     // console.log(array1[1]);
// //     sumArray += array1[i]
    
// // }
// for (let i = 0; i < array2.length; i += 1){
//     // console.log(array1[1]);
//     sumArray += array2[i]
    
// }
// console.log(sumArray);


// привести номера телфону до міжнародного формату (+38)
// const phones = [
//   "0931234567",
//   "0671112233",
//   "0501234890",
//   "0991234765",
//   "0631112255",
//   "0971234111",
//   "0681234999",
//   "0931112200",
//   "0661234321",
//   "0951234654"
// ];

// for ( let i = 0; i < phones.length; i += 1){

//     console.log(phones[i].padStart('(+38)'));
    
// }


//знайди під яким індексом знаходиться анастасія
// const names = [
//   "Олександр",
//   "Марія",
//   "Іван",
//   "Анастасія",
//   "Андрій",
//   "Олена",
//   "Дмитро",
//   "Катерина",
//   "Сергій",
//   "Юлія",
// ];
// for (let i = 0; i < names.length; i += 1){
//     if (names[i]==="Анастасія")
//         console.log("ім'я анастасія знаходиться під індексом".i);
        
// }

// const numbers = [12, 47, 5, 88, 63, 29, 94, 31, 56, 72, 6, 18, 40, 67, 81, 25, 90, 14, 38, 53];
// for(let i = 0; i < numbers.length; i += 1){
//     // console.log(numbers[i]);
//     if (numbers[i] % 2 === 1) {
//         console.log(numbers[i] +=1000);
        
//     }
    
    
// }


//Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
let number = [1, 2, 3];
number[1] = 10;
console.log(number); 


//Створити масив із трьох рядків. Додати до масиву ще одну рядків.
let words = ["привіт", "goiteens", "колір"];
words.push("homework");
console.log(words); 

//Створити скрипт який поверне суму всіх чисел в масиві.
let numbers = [5, 10, 15, 20];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum); 

//Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
let num = [1, 5, 6, 10,];
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

//Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.
let texts = ["доброго", "день", "школа", "університет", "код"];
for (let word of texts) {
  if (word.length > 5) {
    console.log(word);
  }
}

//Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
let numb = [12, 45, 7, 89, 23, 56, 3, 99, 34, 67];
let maxValue = numb[0];
for (let i = 1; i < numb.length; i++) {
  if (numb[i] > maxValue) {
    maxValue = numb[i];
  }
}
console.log(maxValue);

//Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
let numbe = [12, 45, 7, 88, 23, 56, 3, 99, 34, 67];
for (let i = 0; i < numbe.length; i++) {
  if (numbe[i] % 2 === 0) {
    console.log(numbe[i]);
  }
}



