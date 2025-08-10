// for (let i = 0; i <= 10; i += 2){
//     console.log(2);
    
// }

// const userInfo = "мене звуть арсеній"
// console.log(userInfo.length);
// console.log(userInfo[0]);
// console.log(userInfo[1]);
// console.log(userInfo[2]);
// console.log(userInfo[3]);
// console.log(userInfo[4]);
// console.log(userInfo[5]);
// console.log(userInfo[6]);
// console.log(userInfo[7]);
// console.log(userInfo[8]);
// console.log(userInfo[9]);

// for(let i = 0; i < userInfo.length; i +=1){
    
//     if(userInfo[i ===  " "]){
//         continue
//     }
//     console.log(userInfo[i]);
// }

// for(let i = 0; i < userInfo.length; i +=1){
    
//     if(userInfo[i ===  " "]){
//         continue
//     }
//     console.log(userInfo[i]);
// }

// for (let i = 0; i < userInfo.length; i +=1){
//     // console.log(i);
//     console.log(userInfo [i]);
    
// }

// // 2. Вивести парні числа від 2 до 20
// for (let i = 0; i <= 20; i +=1){
//     if(i % 2 === 1){
//         continue
//     }
//     console.log(i);
    
// }
// let number = 0
// for (let i = 0; i < 100; i +=1){
//     number +=1
// }
// console.log(number);

// 4. Таблиця множення для 5
// for (let i = 0; i <= 10; i += 1){
//     console.log(`5 x ${i} - ${5 * i}`);
    
// }

// let counter = 0;
// while (counter < 50){
//     console.log(counter);
//     counter += 1;
// }

// for(let counter = 0; counter <50; counter += 1){
//     console.log(counter);
    
// }

// let counter = 50;
// while (counter >= 0){
//     console.log(counter);
//     counter -= 1;
    
// }

////Задача 3: Порахувати суму чисел від 1 до 10 (while)

// let  counter = 0;
// let sum = 0
// while (counter <= 10){
//     sum += counter
    
//     counter += 1;
    
// }
// console.log(sum);
// let sum = 0;
// for(let i = 0; i <= 10; i += 1){
    
//     sum += i
    
// }

// console.log(sum);

//Виведіть в консоль всі непарні числа за допомогою циклу for


// let counter = 0;
// while (counter < 10){
//     counter += 1;
//     if(counter % 2 !== 1){
//         continue
//     }
    
//     console.log(counter);
// }


// let counter = 0;
// while (counter <20){
//     counter += 1;
//     if (counter >10){
//         break
//     }
//     console.log(counter);
    
// }


// let num;
// do {
//     num = parseInt(prompt("введіть число більше 10"));
// }while (num <= 10)

    //Задача: Запросити у користувача число більше 0 та зробити перевірку на не число
    // let = num;

    // do {
    //     num = Number(prompt("введіть число більше 0"));

    // }while (num <= 0 || isNaN(num))
    //     console.log(num);
        
    // попросити у користувача ввести номер телефону і якщо довжина номеру телефону менша, або більша за 10, обробити помилки

    let num;

 do {
    num = prompt("Ведіть ваш номер телефону 10 цифр");
    console.log(num);
    
    if (num === null){
        alert("дія скасована");
        break;
    }
    if (num.length === 10 && !isNaN(num)){
        alert("номер телефону прийнято");
        break
    }else{
        alert("невірно ведені дані");
    }
 }while(true)
    