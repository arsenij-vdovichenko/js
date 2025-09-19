const userName = ' daria'
const last = 'surName'
const user = {
     name,
     lastName: 'kovalchuk',
     age: 27,
     friends: ['vania', 'ania','masha' ],
     'friends age': {
        vinia: 13,
        ania: 45,
        masha: 93
     }
}

// user.name = 'pasha'
user.location = "kyiv"
user.age = 34
user.friends[0] = 'vasia'

 user["friends age"].masha = 32
console.log( user);


// console.log(user);



// const a = 5 
// let b = a
// b = 10
// console.log(b);
// console.log(a);

// const a = {
//    name: "max", 
//    age: 24
// }

// const b = a
// b.name = "andry"
// console.log(b);
// console.log(a);


// const user = {
//    name:"max",
//    surName:"kobalt",
//    age: 19,
//    friends: ["maxim", "andrew"],
//    otherName(){
//    return this.name;
// },
// changeName(newName){
//    return (this.name = newName)
// },
// changeSurName(){
//    const newSurName = prompt("write surname")
//    return this.surName = newSurName
// }
// }
// console.log(user.otherName());
// console.log(user.changeName("user123"));
// console.log(user.changeSurName());
// console.log(user);


//4. До об’єкту myArray додати методи increaseAge(age), який буде отримувати число та збільшувати вік на це число.
//До об’єкту myArray додати методи changeOccupation(position), який буде отримувати посаду та змінювати властивість occupation.

const myArray = {
   name: "max",
   age: 56,
   occupation:"manager",
   increaseAge(newAge){
      return (this.age += newAge)
   },
   changeOccupation(position){
      return this.occupation = position
   },
}
console.log(myArray.increaseAge(24));
console.log(myArray.changeOccupation("ceo"));

myArray.changeFriend =function (mewFriend) {
   return this.friend.push(newfriend)
}
myArray.countFriend = function(){
   return this.friend.length
}
console.log(myArray.changeFriend("vanya"));
console.log(myArray);


//Створіть об'єкт "person" з властивостями "name", "age", "gender". Додайте до об'єкту метод, який буде виводити на екран повідомлення про особистість зі значеннями всіх властивостей.

const person = {
   name: "max",
   age:46,
   gender:"male",

   setPerson (){
      alert(`імя ${this.name}, вік ${this.age}, стать ${this.gender}`)
   }
}
person.setPerson()

const inputE1 = document



//Створіть об'єкт "book" з властивостями "title", "author", "year" та "genre". Додайте до об'єкту метод, який дозволить змінювати значення властивостей.
const book = {
    title: "назва книги",
    author: "автор",
    year: 2018,
    genre: "детектив",
}

book.changValue = function (newTitle, newAuthor, newYer, newGenre){
    if(newTitle){
        this.title = newTitle
    }
    if(newAuthor){
        this.author = newAuthor
    }
    if(newYer){
        this.year = newYer
    }
    if(genre){
        this.genre = newGenre
    }
}
book.changValue()


