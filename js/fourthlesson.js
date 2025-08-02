// const stars = parseInt  (prompt("введіть рейтинг готелю"))
// switch (stars) {
//     case 1:
//         alert("вартість номеру 200")
//         break;
//     case 2:
//         alert("вартість номеру 100")
//         break;
//     case 3:
//         alert("вартість номеру 50")

//     default:
//         break;
// }

//1. Напиши скрипт вибору опції доставки товару. Опція зберігається в змінній option: 1 - самовивіз, 2 - кур"єр, 3 - пошта. В змінну message записати повідомлення в залежності від опції:

// 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
// 'Кур"єр доставить замовлення завтра з 9:00 до 18:00'
// 'Посилка буде відправлена сьогодні'
// 'Вам передзвонить менеджер'.
let message = "";
const takeof = "Ви зможете забрати товар завтра з 12:00 в нашому офісі";
const curir = 'Кур"єр доставить замовлення завтра з 9:00 до 18:00';
const send = "Посилка буде відправлена сьогодні";
const call = "Вам передзвонить менеджер";
const option = Number(prompt("1 - самовивіз, 2 - кур`єр, 3 - пошта"));
switch (option) {
    case 1:
        message = takeof
        break;
    case 2:
        message = curir
        break;
    case 3:
        message = send
        break;
    default:
        message = call
        break;
}
// if (option === 1) {
//   message = takeof;
// } else if (option === 2) {
//   message = curir;
// } else if (option === 3) {
//   message = send;
// } else {
//   message = call;
// }

console.log(message);
