//function decloration
function add(x, y){// x, y список параметрів
    console.log(`x: ${x}; y: ${y}`);
    
    const result = x + y
    // console.log(result);
    
    return result
}

console.log(add(5, 12)); // 5, 12 - список аргументів



//function expresion
const minus = function(x, y){
    console.log(`x: ${x}; y: ${y}`);
    return x - y 
}
console.log(minus(15, 3));

const multiply = (x , y)=> {
    console.log(`x: ${x}; y: ${y}`);
    return x * y
}
console.log(multiply);

const res = minus(3, 17);
console.log(res);




function loggingMessage(name){
    return `${name} thanks`

}
console.log(loggingMessage("Єгор"));



const withdraw = function(amount, balance) {
    if (amount === 0) {
      console.log('Для проведення операції введіть суму більше нуля.');
    } else if (amount > balance) {
      console.log('Недостатньо коштів на рахунку.');
    } else {
      console.log('Операція зняття коштів проведена.');
    }
  }; 
  withdraw(0, 300); // Для проведення операції введіть суму більше нуля.
  withdraw(500, 300); // Недостатньо коштів на рахунку.
  withdraw(100, 300);


//   function psevdoArgs(){
//     console.log(arguments);
    
//     const args = Array.from(arguments)
//     console.log(args);
    
//   }
//   console.log(psevdoArgs(1, 2, 3, 4, 5));

  function psevdoArgs(...args){
    
    console.log(args);
    for (let index = 0; index < args.length; index++) {
        const element = args[index] +=100;
        console.log(element);
        
        
    }
  }
  console.log(psevdoArgs(1, 2, 3, 4, 5));

  function fn(a, b, c, d){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    
    
    
  }
  console.log(fn([1, 2, 3],"hello",100, 1000000));
  