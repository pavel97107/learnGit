'use strick';

let money = prompt('Ваш месячный доход?', '1000');
console.log('money: ', money);

let income = 'фриланс';
let deposit = confirm('Есть ли у вас депозит в банке?');

console.log('deposit: ', deposit);

let mission = prompt('Цель заработать?', '10000');
console.log('mission: ', mission);


let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
['спорт, курсы, интернет']);
console.log(addExpenses.split(', '));

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
console.log(Math.floor(mission / budgetMonth));

let budgetDay = Math.round (budgetMonth / 30); 
console.log('budgetDay: ', budgetDay);

if (budgetDay > 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay > 600) {
    console.log('У вас средний уровень дохода');
} else {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} if (budgetDay < 0) {
    console.log('Что то пошло нет так');
}







