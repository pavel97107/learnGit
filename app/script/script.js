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
    addExpenses: [],
    deposit: false,
    period: 3,
    budget: money,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
          ['спорт, курсы, интернет']);
              appData.addExpenses = addExpenses.toLowerCase().split(', ');
              appData.deposit = confirm('Есть ли у вас депозит в банке?');

              let sum = 0,
                  res = 0,
                  question;
              

               for ( let i = 0; i < 2; i ++) {
                  question = prompt('Введите обязательную статью расхода');        
                  sum = prompt('Во сколько это обойдется');
                  while (!isNumber(sum)) {
                      sum = prompt('Во сколько это обойдется');
                  }
                  appData.expenses[question] = +sum;
              }

              
              console.log(appData.expenses);

              return res;


      },
      expenses: {},
    getExpensesMonth:function(){
        let res = 0;
        for (let key of Object.values(appData.expenses)) {
        res += key;
        appData.expensesMonth = res;
        console.log(appData.expensesMonth);
    } 
    return res;
    },
    
    getAccumulatedMonth: function() {
        return (appData.budget - expensesAmount); 
    },

    mission: 50000,
    getTargetMonth: function(a, b) {
        if (Math.ceil(a / b) > 0) {
            console.log('Цель будет достигнута за ', Math.ceil(a / b), 'месяцев');
        } else if (Math.ceil(a / b) <= 0) {
            console.log('Цель не будет достигнута');
        }
    },
    budgetDay: function() {
        return Math.ceil(accumulatedMonth / 30);
    },

    getStatusIncome: function() {
        if (dayBudget > 1200) {
            return('У вас высокий уровень дохода');
        } else if (dayBudget > 600) {
            return('У вас средний уровень дохода');
        } else if (dayBudget < 600) {
            return('К сожалению у вас уровень дохода ниже среднего');
        }
    }

};
appData.asking();
let mission = +prompt('Цель заработать?', 30000);
let expensesAmount = appData.getExpensesMonth();
let accumulatedMonth = appData.getAccumulatedMonth();
let targetMonth = appData.getTargetMonth(mission, accumulatedMonth);
let dayBudget = appData.budgetDay();
let statusIncome = appData.getStatusIncome();

console.log('Цель заработать:' , mission);
console.log('Возможные расходы: ',appData.addExpenses);
console.log('Депозит: ', appData.deposit);
console.log('Расходы за месяц: ' +  expensesAmount); // сумма рассходов // возвращает сумму накопления (доходы-расходы)
console.log('Месячное накопление', accumulatedMonth);
console.log('Бюджет на день', dayBudget);
console.log(appData.getStatusIncome());

