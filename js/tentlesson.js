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
const logItems = array => {
    // console.log(array);
    for (let i = 0; i < array.length; i += 1){
        console.log(`${i + 1} ${array[i]}`);
        
    }
}
logItems['Mango', 'Poly', 'Ajax']