// // const objA = {
// //     x : 1,
// // }

// // const objB = {
// //     y : 2,
// // }

// const objC = {
//     z : 3,
// }

// // console.log(objB.z);
// const objB = Object.create(objC)
// objB.y = 2
// // console.log(objB);
// const objA = Object.create(objB)
// objA.x = 1



// console.log(objA.z);

const Car = function({model, color, price}){
    this.model= model,
    this.color = color,
    this.price = price
    
}
Car.prototype.changePrice = function(newPrice) {
    this.price = newPrice;
};
const bmw = new Car({price: 10000, model : "bmw", color: "black"})
console.log(bmw);

const option = {
    model : "toyota",
    price : 2000, 
    color : "red"
}



const toyota = new Car(option)
toyota.changePrice(10000)
console.log(toyota);


