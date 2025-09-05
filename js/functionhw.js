function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`)
  }
}
logItems(['Mango', 'Poly', 'Ajax'])



function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(' '); 
  return words.length * pricePerWord;
}
console.log(calculateEngravingPrice("Програмування", 10)); 
console.log(calculateEngravingPrice("Навчання", 20));




function findLongestWord(string) {
  const words = string.split(' ');
  let longestWord = words[0]; 

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}
console.log(findLongestWord("Я люблю джаваскрипт"));
console.log(findLongestWord("пісні та квіти ")); 




function formatString(string) {
  if (string.length <= 40) {
    return string;
  } else {
    return string.slice(0, 40) + '...';
  }
}
console.log(formatString("пшено")); 
console.log(formatString("Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsum blanditiis quis rem iste enim velit! Distinctio molestiae voluptates reiciendis similique, delectus, quis facilis consectetur, recusandae id eum nobis molestias!")); 



function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase(); 
  return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
}


console.log(checkForSpam("Get best SALE offers now!"));   
console.log(checkForSpam("This is a SPAM message"));      
console.log(checkForSpam("Just a regular text"));