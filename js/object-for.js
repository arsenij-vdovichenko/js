// const user = {
//     name: "arsenii",
//     age: 20, 
//     location: "ucrain",
//     surname: "vdovychenko",

// }

// for (const key in user){
    
//     console.log(user[key]);
    
// }


// const key = Object.keys(user)
// console.log(key);
// for(const x of key) {
//     // console.log(x);
//     console.log(user[x]);
    
// }

// const value = Object.values(user)
// console.log(value);
// const key = Object.keys(user)
// console.log(key);
// const entry = Object.entries(user)
// console.log(entry);
// for (const entries of entry) {
//     console.log(entries);
// }


// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const value = Object.values(goods)
// console.log(value);

// let sum = 0;
// for(const values of value) {
//     sum += values
// }
// console.log(sum);

// // Дано масив об’єктів
//     const friends = [
//     { name: "Mango", online: false },
//     { name: "Kiwi", online: true },
//     { name: "Poly", online: false },
//     { name: "Ajax", online: false },
//     ];

//     const findFriendByName = (array, friendName) => {
//     for (const i of array) {
//         if (i.name === friendName) {
//         return `Друга знайшли ${friendName}`;
//         }
//     }
//     return `Друга не знайшли ${friendName}`;
//     };

//     // Написати функція яка буде отримувати масив та ім’я друга якого потрібно знайти
//     console.log(findFriendByName(friends, "Poly"));
//     console.log(findFriendByName(friends, "Chelsy"));





// const user = {
//     hobby: "football",
//     premium: true,
// }
// user.mood = 'happy'
// user.hobby = "skydiving"
// user.premium = false;
// console.log(user);

// const keys = Object.keys(user)
// console.log(keys);

// for ( const key of keys){
//     console.log(`ключ ${key} значення ${user[key]}`);
    
// }


//Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.

const user = {
  name: "Alex",
  age: 25,
  isAdmin: false
};

console.log(countProps(user)); 