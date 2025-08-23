// const message = 'дозволяє перетворити рядок в масив, розбивши її по розподілу'
// console.log(message.split(' '));
// //split перетворює рядок в масив 



// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// console.log(friends.join(' '));
// //join перетворює масив в рядок


// //Робимо slug з назви статті з URL адреси,
// // Заголовок статті складається тільки з букв та пропусків,
// // Нормалізуємо рядок,
// // Розбиваємо по словах,
// // Записуємо в рядок з роздільником,
// // Чейнінг
// // повинно получитися top-10-benefits-of-react-fremework


//  const title = "Top 10 Benefits Of React Fremework"
//  const result = title.toLowerCase().split(" ").join('-')
//  console.log(result);


// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// // const fiendName = "Poly"; 
// // const indexL = friends.indexOf(fiendName)
// // console.log(indexL);
// // //indexOf повертає індекс знайденого елементу в масиві якщо незнайшов повертає -1


// const fiendName = "Kiwi";
// const indexL = friends.includes(fiendName);
// console.log(indexL);
// //

 const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
 friends.unshift("arsenii", "nazar")
 console.log(friends);
 //метод unshift додає на початок один або декілька еелментів якщо декілька до додається кома
 friends.push(false, "array", 45, [1,2,3])
 console.log(friends)
 //push додає на кінец один або більше елементів
 friends.shift()
const del =  friends.shift()

 console.log(del);
const del2 = friends.pop()
console.log(del2);

const name = friends.shift()
console.log(name);

 console.log(friends);

 
 //shift видвляє с початку масива елемент

 


 

