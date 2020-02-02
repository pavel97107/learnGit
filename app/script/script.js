'use strick';
let money,
start = function(){
    do {
    money = prompt('Ваш месячный доход?');
    console.log('Месячный доход: ', money);
}
while (isNaN(money) || money === ' ' || money === null);
};

start();


let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    asking: function(){
      let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
        ['спорт, курсы, интернет']);
            appData.addExpenses = addExpenses.toLowerCase().split(', ');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
    }

};



let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};


let mission = +prompt('Цель заработать?', 30000);

console.log('Цель заработать:' , mission);
console.log('Депозит: ', appData.deposit);



function showTypeOf(iteam) {
    console.log(typeof (iteam));
}
showTypeOf(money);
showTypeOf(appData.income);
showTypeOf(appData.deposit);


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