//Напиши скрипт, який, для об'єкта user, послідовно:
//додає поле mood зі значенням 'happy'
//замінює значення hobby на 'skydiving'
//замінює значення premium на false
//виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

const user = {
    hobby:"football",
    premium:true,
}

user.mood = "happy"
user.hobby = "skydiving"
user.premium = false
console.log(user);

const key = Object.keys(user)
console.log(key);

for(const i of key){
    console.log(`${i}:${user[i]}`);
}

//Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.

function countProps(obj){
    // console.log(obj);
    const value = Object.values(obj).length
    console.log(value);
    
}
countProps(user)


//Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".
const mates = {
    arsenii:10,
    ostap:12,
    nazar:14,
    andrii:15,
    matvey:4,

}

function findBestEmployee(employees){
    const value = Object.values(employees)
    const maxValue = Math.max(...value)
    for(const key in employees){
       if(employees[key]=== maxValue){
        return key
       }
        
    }
    
}
console.log(findBestEmployee(mates));



//Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

const wage = {
    arsenii:100,
    ostap:1200,
    nazar:14000,
    andrii:150,
    matvey:40,

}
function countTotalSalary(employees){
    const value = Object.values(employees)
    let sum = 0
    for(const key of value){
    sum +=key
    }
    return sum
}

console.log(countTotalSalary(wage));


//Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.
const products = [
  { name: "Apple", price: 50, category: "Fruits" },
  { name: "Carrot", price: 20, category: "Vegetables" },
  { name: "Banana", price: 30, category: "Fruits" },
  { name: "Potato", price: 15, category: "Vegetables" },
];

function getAllPropValues(arr, prop){
const emptyArr = []
for(const product of arr){
    if(prop in product){
        emptyArr.push(product[prop])
        
    }
}
return emptyArr

}
console.log(getAllPropValues(products,"category"));


//Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).

const items = [
  { name: "Apple", price: 50, quantity: 5 },
  { name: "Carrot", price: 20, quantity: 10 },
  { name: "Banana", price: 30, quantity: 7 },
  { name: "Potato", price: 15, quantity: 20 },
];

function calculateTotalPrice(allProdcuts, productName){
    for(const product of allProdcuts){
        if(product.name===productName){
            return product.price*product.quantity
            
        }
    }
    return 0
}
console.log(calculateTotalPrice(items,"cherry"));
