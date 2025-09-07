// // const add = (a, b) => a + b
// const add = (a, b)=> {
//     // const c = a + b
//     return a + b
// }
// console.log(add(1, 3));



// const logPassword = (text) => console.log(text);
// logPassword('qwerty123')


// const fn = function (){
//     console.log(arguments);
    
// }
// fn(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// const fs = (...args) => {
//     console.log(args);
    
// }
// fs(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)


// //Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].
// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.
// const logItems = array => {
//     // console.log(array);
//     for (let i = 0; i < array.length; i += 1){
//         console.log(`${i + 1} ${array[i]}`);
        
//     }
// }
// logItems['Mango', 'Poly', 'Ajax']



//Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.
// const calculateEngravingPrice = (message, pricePerWord) => {
//    const rydok = message.split('')
//    const rezayt = rydok.length
//     console.log(rydok);
    
    
// }
// calculateEngravingPrice('напиши скрипт підрахунку вартості гравіювання прикрасю',10)



// const logginfor = (callback) => { //функція вищого порядку яка приймає іншу функцію колбек
//     callback()
// }
// function fm(){ //функція колбек
//     console.log("hello world");
    
// }
// logginfor(fm)  //виклик функції вищого порядку в якості аргументів передаємо іншу функцію

// const calculator = (callback, a, b) => {
//     return callback(a , b)
// }
// const add = (a, b) => a + b

// const minus = (a , b) => a - b

// const multiply = (a , b) => a * b

// const divide = (a , b) => a / b 


// console.log(calculator(add , 1,7));
// console.log(calculator(minus, 9 , 3));
// console.log(calculator(multiply, 4 , 7 ));
// console.log(calculator(divide, 10 , 2));


// const proccessArray = (callback, array) => {
//     return callback(array)
// }
// const searchWord = (array) => {
//     const newArray = array.split(" ")
//     const shortestWord = "";
//     for(const word of newArray) {
//         if (word.length > newArray.length){
//             shortestWord = word
//         }
//     }
//     return shortestWord
// }


// function proccessArray(array, callback) {
//     return callback(array);

// }
// function sumArray(arr) {
//     let sum = 0;
//     for (const num )
// }

const fn = (callback, array) => {
    return callback(array)
}

const callback = (array) => {
    for (let i = 0; i < array.length; i ++){
        // console.log(array[i]);
        if (typeof (array[i]) ==="String") {
            continue
        } else if (array[i] < )
        
    }
}







const arr = [10, "2", 3, "red", 7] //знайти мінімальне число в масиві 
console.log(fn(callback, arr));





