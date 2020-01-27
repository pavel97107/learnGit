let money = 1000;
let income = 'фриланс';
let deposit = true;
let mission = 10000;
let addExpenses = 'спорт, курсы, интернет';
let period = 12;

console.log(typeof 1000);
console.log(typeof 'фриланс');
console.log(typeof true);
console.log(addExpenses.length);

console.log('Период равен 12 месяцев' + " и " + 'Цель заработать 10000 белорусских рублей.');

console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));

let budgetDay = 100;
console.log(budgetDay);


let a = 5;

console.log(Boolean(5)); // преобразует число в булевое значение
console.log(!!'js'); // метод отрицание преобразует строку в булевое значени

console.log(String([1,2,3])); // преобразует массив в строку
console.log(typeof (10+'')); // оператор плюс преобразует число в строку, другие же оператору делают анологично(ч)
console.log(typeof (a.toString())); // преобразует данные переменной в строку

console.log(typeof Number('123')); // преобразовые строку в число
console.log(typeof +'10'); // преобразовые строку в число
