'use strick';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
start = function(){
    do {
    money = prompt('Ваш месячный доход?');
}
while (isNaN(money) || money === ' ' || money === null);
};

start();




let appData = {
    income: {},
    addIncome: [],
    mission: function(){
        let resultMission = 0;
        resultMission = +prompt('Цель заработать?', 30000);
        return resultMission;
    },
    addExpenses: [],
    deposit: false,
    expenses: {},
    period: 3,
    budget: console.log('Уровень дохода: '+ money), 
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
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
              return res;
      },
    getExpensesMonth:function(){
        let res = 0;
        for (let key of Object.values(appData.expenses)) {
            res += key;
            appData.expensesMonth = res;  
        } 
        console.log('Расходы за месяц: ' + appData.expensesMonth);
        return res;
    },
    
    getBudget: function() {
        return (appData.budget - appData.expensesMonth); 
    },

    getTargetMonth: function(a, b) {
        if (Math.ceil(a / b) > 0) {
            console.log('Цель будет достигнута за ', Math.ceil(a / b), 'месяцев');
        } else if (Math.ceil(a / b) <= 0) {
            console.log('Цель не будет достигнута');
        }
        return;
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
let resMission = appData.mission();
appData.asking();
let expensesAmount = appData.getExpensesMonth();
let accumulatedMonth = appData.getBudget();
let targetMonth = appData.getTargetMonth(resMission, accumulatedMonth);
targetMonth();
let dayBudget = appData.budgetDay();
let statusIncome = appData.getStatusIncome();




