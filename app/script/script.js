'use strick';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

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
    budgetDay: 0,
    expensesMonth: function getExpensesMonth(){
        let expenses = [];
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
    },
    

    budgetMonth: function getAccumulatedMonth() {
        return (money - expensesAmount); 
    },

   

    mission: 50000,
    period: function getTargetMonth(a, b) {

        if (Math.ceil(a / b) > 0) {
            console.log('Цель будет достигнута за ', Math.ceil(a / b), 'месяцев');
        } else if (Math.ceil(a / b) <= 0) {
            console.log('Цель не будет достигнута');
        }
    },
    asking: function(){
      let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
        ['спорт, курсы, интернет']);
            appData.addExpenses = addExpenses.toLowerCase().split(', ');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
    },

    statusIncome: function getStatusIncome() {
        if (budgetDay >= 1200) {
            return ('У вас высокий уровень дохода');
        } else if (budgetDay >= 600) {
            return ('У вас средний уровень дохода');
        } else if (budgetDay < 600) {
            return ('К сожалению у вас уровень дохода ниже среднего');
        }
    }

};
console.log(appData);
let mission = +prompt('Цель заработать?', 30000);
let expensesAmount = appData.getExpensesMonth();
let accumulatedMonth = appData.getAccumulatedMonth();
let targetMonth = appData.getTargetMonth(mission, accumulatedMonth);
let statusIncome = appData.getStatusIncome();
let budgetDay = Math.round(accumulatedMonth / 30);


console.log('Цель заработать:' , mission);
console.log('Депозит: ', appData.deposit);
console.log('Расходы за месяц: ' +  expensesAmount); // сумма рассходов // возвращает сумму накопления (доходы-расходы)
console.log('Месячное накопление', accumulatedMonth);
console.log('Бюджет на день', budgetDay);


