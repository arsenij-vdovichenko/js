// function decloration
// function add(x, y){// x, y список параметрів
//     console.log(`x: ${x}; y: ${y}`);
    
//     const result = x + y
//     // console.log(result);
    
//     return result
// }

// console.log(add(5, 12)); // 5, 12 - список аргументів



// //function expresion
// const minus = function(x, y){
//     console.log(`x: ${x}; y: ${y}`);
//     return x - y 
// }
// console.log(minus(15, 3));

// const multiply = (x , y)=> {
//     console.log(`x: ${x}; y: ${y}`);
//     return x * y
// }
// console.log(multiply);

// const res = minus(3, 17);
// console.log(res);




// function loggingMessage(name){
//     return `${name} thanks`

// }
// console.log(loggingMessage("Єгор"));



// const withdraw = function(amount, balance) {
//     if (amount === 0) {
//       console.log('Для проведення операції введіть суму більше нуля.');
//     } else if (amount > balance) {
//       console.log('Недостатньо коштів на рахунку.');
//     } else {
//       console.log('Операція зняття коштів проведена.');
//     }
//   }; 
//   withdraw(0, 300); // Для проведення операції введіть суму більше нуля.
//   withdraw(500, 300); // Недостатньо коштів на рахунку.
//   withdraw(100, 300);


// //   function psevdoArgs(){
// //     console.log(arguments);
    
// //     const args = Array.from(arguments)
// //     console.log(args);
    
// //   }
// //   console.log(psevdoArgs(1, 2, 3, 4, 5));

//   function psevdoArgs(...args){
    
//     console.log(args);
//     for (let index = 0; index < args.length; index++) {
//         const element = args[index] +=100;
//         console.log(element);
        
        
//     }
//   }
//   console.log(psevdoArgs(1, 2, 3, 4, 5));

//   function fn(a, b, c, d){
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
    
    
    
//   }
//   console.log(fn([1, 2, 3],"hello",100, 1000000));
  



//   //наша функція має приймати два параметри імя та вік 

// function infoUsers(name, age){
//   return `привіт мене звати${name} мій вік${age}`

// }

// infoUsers('арсеній, 14')
// infoUsers('петрик, 76')



// //наша функція буде приймати 1 параметр рядок у нижньоиу регистрі і довжиною не більше 30 символів, якщо більше 30 символів то додається 3 крапки
// function convertedMessage(string){
  
//   const lowerText = string.toLowerCase()
//   console.log(lowerText);
//   if (lowerText.length <= 30){
//     return lowerText
//   } esle {
//     return lowerText.slice(0, 31) + "..."
//   }
    
  
// }
// const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsum blanditiis quis rem iste enim velit! Distinctio molestiae voluptates reiciendis similique, delectus, quis facilis consectetur, recusandae id eum nobis molestias!"
// console.log(convertedMessage(message));



// напиши функцію яка буже приймати масив чисел і повертати серднє число
function numbersList(array) {
  let sum = 0
  for (let numbers = 0; i <= array.length; numbers += 1){
    sum += array[numbers]
  }
  const result = sum / array.length
  return Math.round(result);
  
}

console.log(numbersList([8, 5, 34, 56,]));
console.log(numbersList([3, 5, 7, 5,]));
console.log(numbersList([76, 2, 7, 67,]));




// створи функцію яка буде приймати довідьну кількість параметрів і повертатти загальну суму всіх елементів

function sumNumbers(...arg) {
  console.log(arg);
  
  
}

console.log(sumNumbers(1, 2, 3));
console.log(sumNumbers(1, 2, 3, 4, 5));
console.log(sumNumbers(1, 2, 3, 4, 5, 6, 7, 8));