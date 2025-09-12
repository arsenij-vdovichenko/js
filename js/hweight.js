
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
const string = friends.join(', ');
console.log(string); 




const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];




const cardToRemove = 'Карточка-3';
const index = cards.indexOf(cardToRemove);
if (index !== -1) {
  cards.splice(index, 1);
}
console.log(cards);



const cardToInsert = 'Карточка-6';
const insertIndex = 2; 
cards.splice(insertIndex, 0, cardToInsert);
console.log(cards);



const cardToUpdate = 'Карточка-4';
const updateIndex = cards.indexOf(cardToUpdate);
if (updateIndex !== -1) {
  cards[updateIndex] = 'Оновлена карточка-4';
}
console.log(cards);