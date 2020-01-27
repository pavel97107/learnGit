let money = prompt('Ваш месячный доход?', '1000');
console.log('money: ', money);
let income = 'фриланс';
let deposit = confirm('Есть ли у вас депозит в банке?');
console.log('deposit: ', deposit);
let mission = 10000;
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
'спорт, курсы, интернет');

console.log('addExpenses: ', addExpenses);

let period = 12;
let expenses1 = prompt('Введите обязательную статью расходов?');

console.log('expenses1: ', expenses1);

let expenses2 = prompt('Введите обязательную статью расходов?');
console.log('expenses2: ', expenses2);

let amount1 = prompt('Во сколько это обойдется?');
console.log('amount1: ', amount1);

let amount2 = prompt('Во сколько это обойдется?');
console.log('amount2: ', amount2);

let budgetMonth = money - amount1 - amount2;
console.log(budgetMonth);

// console.log(typeof 1000);
// console.log(typeof 'фриланс');
// console.log(typeof true);
// console.log(addExpenses.length);

// console.log('Период равен 12 месяцев' + " и " + 'Цель заработать 10000 белорусских рублей.');

// console.log(addExpenses.toLowerCase());
// console.log(addExpenses.split(', '));

// let budgetDay = 100;
// console.log(budgetDay);



// //////////////////////////////////////////////////////////////////

// let question = confirm('Тебе есть 18 лет?');
// let question2 = prompt('Сколько тебе лет?', '18'); // второе значение Дефолтное


// let a = 5;

// console.log(Boolean(5)); // преобразует число в булевое значение
// console.log(!!'js'); // метод отрицание преобразует строку в булевое значени

// console.log(String([1,2,3])); // преобразует массив в строку
// console.log(typeof (10+'')); // оператор плюс преобразует число в строку, другие же оператору делают анологично(ч)
// console.log(typeof (a.toString())); // преобразует данные переменной в строку

// console.log(typeof Number('123')); // преобразовые строку в число
// console.log(typeof +'10'); // преобразовые строку в число

// let n = '10';
// n *= 1;
// console.log(typeof n); // преобразовывает стркоу в число благодаря оператору(*).

// // мягкое преобразование

// console.log(parseInt('10ff px', 16)); // вытягивает число из стркои (принмает систему исчисления)
// console.log(parseFloat('10.5 px')); // вытягивает дробное число из строки

// // ветвление в javascript

// // if (true) console.log('Истина');
// // if (false) console.log('Этот код не выполнится');

// let l = 2;

// if (l === 4){
//     console.log('команда1');
//     console.log('команда2');
// }  else if(l === 5){
//     console.log('команда5');
// } else {
//     console.log('команда3');
//     console.log('команда4');
// }

// // команда switch (заменяет условие If)

// switch (l){
//     case 3: // кейс сравнивается относительно l!
//         console.log(3);
//         break; // брейк останавливает выполнение всеъ остальных команд
//     case 4:
//         console.log(4);
//         break;
//     case 5:
//         console.log(5);
//         break;
//     case 6:
//         console.log(6);
//         break;
//     default: // это команда выполнится если не один кейс не совпадает со значение условия!
//     console.log('не верно');
// }

// let h = 3;


// // строгое соответсие, case выполняется только когда значение число!!!!!
// switch (h){
//     case 3: 
//     case 4:
//     case 5:
//         console.log('5-3'); //
//         break;
//     case 6:
//         console.log(6);
//         break;
//     default: // это команда выполнится если не один кейс не совпадает со значение условия!
//     console.log('не верно');
// }


// // тернарный оператор

// let result = l === 2 ? 1 : 0;
// console.log('result: ', result);



