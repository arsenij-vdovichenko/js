// class Car {
//     static ""
//    #age
//     constructor({model, color, price}){
//         this.model = model,
//         this._price = price,
//         this.color = color,
//         this.#age = age
//     }
//     // changePrice(newPrice){
//     //     this.price = newPrice
//     // }
//     get price(){
//         return this._price   
//     }
//     set price(newPrice){
//         return this._price = newPrice
//     }
// }
// const option = {
//     model : "audi",
//     price : 3000,
//     color : "red",
//     age : 2018
// }

// // const bmw = new Car ({price: 15000, model: "bmw", color: "black"})
// // console.log(bmw);
// // console.log(bmw.price);
// // bmw.price = 1000000
// // console.log(bmw);

// const audi = new Car (option)
// console.log(audi);
// console.log(Car);

// class ElectricCar extends Car {
//     #batteryLevel
//     constructor(model, color, price, batteryLevel){
//         super(model, color, price)
//     }
// }



// // Створіть клас Person, що містить властивості firstName та lastName. Додайте метод getFullName(), який повертає повне ім'я у форматі "firstName lastName".

// class Person {
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const person1 = new Person('John', 'Doe');
// console.log(person1.getFullName()); // John Doe




// // Створіть клас Rectangle, що містить властивості width та height. Додайте метод getArea(), який повертає площу прямокутника.
// class Rectangle {
//     constructor(width, height){
//         this.width = width,
//         this.height = height
//     }

//     getArea(){
//         const (width, height)
//     }
// }
// const rectangle1 = new Rectangle(10, 5);
// console.log(rectangle1.getArea()); // 50



// Створіть клас Calculator, який буде мати наступні методи: add(), subtract(), multiply(), divide(). Кожен метод приймає два аргументи - числа, які необхідно обробити. Результатом кожного методу має бути результат відповідної математичної операції.
class Calculator{
    constructor(firstNumber, secondNumber){
        this.firstNumber = firstNumber,
        this.secondNumber = secondNumber
    }

    add(firstNumber, secondNumber){
        return firstNumber + secondNumber
    }
    subtract(firstNumber, secondNumber){
        return firstNumber - secondNumber
    }
    multiply(firstNumber, secondNumber){
        return firstNumber * secondNumber
    }
    divide(firstNumber, secondNumber){
        if(secondNumber === 0 ){
            return "на нуль ділити не можна"
        }else{
            return firstNumber / secondNumber
        }
    }
}


const calculator = new Calculator();
console.log(calculator);

console.log(calculator.add(2, 3)); // 5
console.log(calculator.subtract(5, 2)); // 3
console.log(calculator.multiply(2, 4)); // 8
console.log(calculator.divide(10, 2)); // 5
console.log(calculator.divide(10, 0)); // На нуль ділити не можна

