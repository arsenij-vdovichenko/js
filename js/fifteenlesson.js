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


// // const adopted = pets.every((item) => {
// //     return item.isAdopted
// // })

// // console.log(adopted);


// // const adopted1 = pets.every((item) => {
// //     return item.isAdopted
// // })

// // console.log(adopted1);

// const adopted2 = (array) => {
//   return array.every(item => )
// }



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

// const findObjectName = (array, name) =>{
//   return array.find((item)=>{
//     return item.name === name
//   })
// }


// console.log(findObjectName(pets, "Кузя"));


const findFavoriteFood = (array) => {
  return array.map(item => item.favoriteFood)
}
console.log(findFavoriteFood(pets));
