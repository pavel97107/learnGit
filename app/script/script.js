'use strick';

let money = +prompt('Ваш месячный доход?', 15000);
console.log('money: ', money);

let income = 'фриланс';
let deposit = confirm('Есть ли у вас депозит в банке?');

console.log('deposit: ', deposit);

let mission = +prompt('Цель заработать?', 30000);
console.log('mission: ', mission);


let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
    ['спорт, курсы, интернет']);
console.log(addExpenses.split(', '));

let expenses1 = prompt('Введите обязательную статью расходов?', 'eda');
console.log('Статья расходов: ', expenses1);

let expenses2 = prompt('Введите обязательную статью расходов?', 'eda');
console.log('Статься расходов: ', expenses2);

let amount1 = +prompt('Во сколько это обойдется?' , 3500);
console.log('Обойдется: ', amount1);

let amount2 = +prompt('Во сколько это обойдется?', 4500);
console.log('Обойдется: ', amount2);


let period = Math.ceil(mission / budgetMonth);
console.log('Цель будет достигнута за ' + (period) + ' месяца');

let budgetDay = Math.round(budgetMonth / 30);
console.log('Бюджет на день', budgetDay);

let getIncome = function () {
    if (budgetDay >= 1200) {
        return ('У вас высокий уровень дохода');
    } else if (budgetDay > 600) {
        return ('У вас средний уровень дохода');
    } else {
        return ('К сожалению у вас уровень дохода ниже среднего');
    }
    if (budgetDay < 0) {
        return ('Что то пошло нет так');
    }
};
console.log(getIncome());

function getExpensesMonth(Allamount) {
    console.log(Allamount); 
}
getExpensesMonth(amount1 + amount2); // сумма рассходов




function getAccumulatedMonth() {
    return (money - (amount1 + amount2)); 
}
getAccumulatedMonth(); // возвращает сумму накопления (доходы-расходы)

let accumulatedMonth = getAccumulatedMonth();
console.log('Месячное накопление', accumulatedMonth);

function getTargetMonth(a, b) {
    console.log(Math.floor(a / b));
}
getTargetMonth(mission, accumulatedMonth);