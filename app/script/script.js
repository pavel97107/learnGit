'use strick';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
let money;
let income = 'фриланс';
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = +prompt('Цель заработать?', 30000);
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
    ['спорт, курсы, интернет']);


console.log(addExpenses.split(', '));
console.log('Цель заработать:' , mission);
console.log('Депозит: ', deposit);

do {
    money = prompt('Ваш месячный доход?');
    console.log('Месячный доход: ', money);
}
while (!isNumber(money));


function showTypeOf(iteam) {
    console.log(typeof (iteam));
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


let expenses = [];

let getExpensesMonth = function(){

    let sum = 0;

    for ( let i = 0; i < 2; i ++) {

        expenses [i] = prompt('Введите обязательную статью расхода');
        
        sum += +prompt('Во сколько это обойдется');

        while (!isNumber(sum)) {
            sum = +prompt('Во сколько это обойдется');
        }
    }
    console.log(expenses);
    return(sum);

};

let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ' +  expensesAmount); // сумма рассходов



function getAccumulatedMonth() {
    return (money - expensesAmount); 
}
getAccumulatedMonth(); // возвращает сумму накопления (доходы-расходы)

let accumulatedMonth = getAccumulatedMonth();
console.log('Месячное накопление', accumulatedMonth);

function getTargetMonth(a, b) {

    if (Math.ceil(a / b) > 0) {
        console.log('Цель будет достигнута за ', Math.ceil(a / b), 'месяцев');
    } else if (Math.ceil(a / b) <= 0) {
        console.log('Цель не будет достигнута');
    }
}
getTargetMonth(mission, accumulatedMonth);


let budgetDay = Math.round(accumulatedMonth / 30);
console.log('Бюджет на день', budgetDay);

let getStatusIncome = function () {
    if (budgetDay >= 1200) {
        return ('У вас высокий уровень дохода');
    } else if (budgetDay >= 600) {
        return ('У вас средний уровень дохода');
    } else if (budgetDay < 600) {
        return ('К сожалению у вас уровень дохода ниже среднего');
    }
};
console.log(getStatusIncome());