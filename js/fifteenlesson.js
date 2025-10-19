// // const pets = [
// //   {
// //     id: "1",
// //     name: "Барсик",
// //     img: "https://c.files.bbci.co.uk/116AB/production/_115093317_neo4.jpg",
// //     type: "кіт",
// //     color: "сірий",
// //     age: 2,
// //     isAdopted: true,
// //     favoriteFoods: ["риба", "молоко"],
// //   },
// //   {
// //     id: "2",
// //     name: "Бім",
// //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2PoENXLdAsO-j9BHSELg7XxUxYhGjZGLx9g&s",
// //     type: "пес",
// //     color: "чорний",
// //     age: 5,
// //     isAdopted: false,
// //     favoriteFoods: ["кістка", "м’ясо"],
// //   },
// //   {
// //     id: "3",
// //     name: "Кузя",
// //     img: "https://thumbs.dreamstime.com/b/%D1%85%D0%BE%D0%BC%D1%8F%D0%BA-11110051.jpg",
// //     type: "хом’як",
// //     color: "білий",
// //     age: 1,
// //     isAdopted: true,
// //     favoriteFoods: ["зерно", "морква"],
// //   },
// //   {
// //     id: "4",
// //     name: "Лола",
// //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6OYV3mJYvRhVSJSTEZsO8GOn4CBgEzXEWRw&s",
// //     type: "папуга",
// //     color: "зелений",
// //     age: 3,
// //     isAdopted: false,
// //     favoriteFoods: ["яблуко", "зерно"],
// //   },
// // ];


// // // const adopted = pets.every((item) => {
// // //     return item.isAdopted
// // // })

// // // console.log(adopted);


// // // const adopted1 = pets.every((item) => {
// // //     return item.isAdopted
// // // })

// // // console.log(adopted1);

// // const adopted2 = (array) => {
// //   return array.every(item => )
// // }



// const pets = [
//   {
//     id: "1",
//     name: "Барсик",
//     img: "https://c.files.bbci.co.uk/116AB/production/_115093317_neo4.jpg",
//     type: "кіт",
//     color: "сірий",
//     age: 2,
//     isAdopted: true,
//     favoriteFoods: ["риба", "молоко"],
//   },
//   {
//     id: "2",
//     name: "Бім",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2PoENXLdAsO-j9BHSELg7XxUxYhGjZGLx9g&s",
//     type: "пес",
//     color: "чорний",
//     age: 5,
//     isAdopted: false,
//     favoriteFoods: ["кістка", "м’ясо"],
//   },
//   {
//     id: "3",
//     name: "Кузя",
//     img: "https://thumbs.dreamstime.com/b/%D1%85%D0%BE%D0%BC%D1%8F%D0%BA-11110051.jpg",
//     type: "хом’як",
//     color: "білий",
//     age: 1,
//     isAdopted: true,
//     favoriteFoods: ["зерно", "морква"],
//   },
//   {
//     id: "4",
//     name: "Лола",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6OYV3mJYvRhVSJSTEZsO8GOn4CBgEzXEWRw&s",
//     type: "папуга",
//     color: "зелений",
//     age: 3,
//     isAdopted: false,
//     favoriteFoods: ["яблуко", "зерно"],
//   },
// ];

// // const findObjectName = (array, name) =>{
// //   return array.find((item)=>{
// //     return item.name === name
// //   })
// // }


// // console.log(findObjectName(pets, "Кузя"));


// const findFavoriteFood = (array) => {
//   return array.map(item => item.favoriteFoods)
// }
// console.log(findFavoriteFood(pets));




// //масив.reduce((acc,item,idx,arr)=>{},0)

// // порахувати суму усіх елементів
// const numbers = [2, 5, 6, 8, 80, 40];
// const suma =  numbers.reduce((acc,item)=>{
//     return acc+item
// },0)
// console.log(suma);

// //порахувати загальну зарплату

// const salary = {
//   mango: 30,
//   poly: 40,
//   ajax: 50,
// }

// const totaSalary = Object.values(salary).reduce((acc, value)=> acc + value, 0)
// console.log(totaSalary);



// //отримати масив усіх tags
// // const tweets = [
// //   { id: "000", likes: 5, tags: ["js", "nodejs"] },
// //   { id: "001", likes: 2, tags: ["html", "css"] },
// //   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
// //   { id: "003", likes: 8, tags: ["css", "react"] },
// //   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// // ];

// // const newTag - tweets.reduce((acc,item)-> {
// //   acc.push(...item.tags)
// // },[])


// //створити об'єкт з ключем tags і кількістю повторювань 
// // {
// //   js: 3,
// //   nodejs: 3,
// //   html: 2,
// //   css: 2,
// //   react: 2
// // }

// const newTags = (array) => array.flatMap(({ tags }) => tags);
// console.log(newTags(tweets));
// const objTags = newTags.reduce((acc,item) =>{
//   if (acc [ item]){
//     acc[item] +=1;
//   } else {
//     acc[item] - 1;
//   }
//   return acc;
// },{})
// console.log(objTags);




const array = [1,2,3,4,45,6,7,88,9,]
// const result =array.sort()
// console.log(result);
// console.log(array);

// const newArray = array.slice()


// const copyArray = [...array]
// const result = copyArray.sort((a,b)=> a - b)
// console.log(result);



// const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк']
// const newResult = [...words].sort((a,b)=> a.localeCompare(b))
// console.log(newResult);


// const filteredArray = array.filter((item)=>{
//   return item >5
// })



// const letters = ["A", "a", "B", "b", "C", "c"]
// console.log(letters.sort());


// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 150, points: 48, online: true },
// ];

// // const newPlayer = [...players].sort((a,b) => [a.points = b.points])
// // console.log(copyPlayers);
// // const copyPlayers = [...players].sort((a,b) => a.name.localeCompare(b.name))
// // console.log(copyPlayers);

// const copyPlayers = players.slice().sort((a, b)=>{
// if(a.timePlayed === b.timePlayed){
//   return a.point - b.point
// }
// return a.timePlayed - b.timePlayed
// })



// Відсортувати масив об'єктів за алфавітом в полі name:
// const arr = [
//     { name: 'John', age: 32 },
//     { name: 'Jane', age: 26 },
//     { name: 'Mike', age: 42 },
//     { name: 'Emily', age: 29 }
//   ];

//   const copyArr = [...arr].sort((a,b)=> a.name.localeCompare(b.name))
//   console.log(copyArr);


  const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 150, points: 48, online: true },
];