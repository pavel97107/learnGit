'use strict';

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
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    period: 0,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expenses: {},
    mission: 0,
    expensesMonth: 0,
    asking: function(){

        if(confirm('Есть ли у вас дополнительный источник заработка?')){
            let itemIncome = prompt('Какой у вас есть дополнительный заработок?', 'Фриланс');
            let cashIncome = +prompt('Сколько в месяц вы зарабатываете на этом?', 10000);
            appData.income[itemIncome] = cashIncome;
        }

        appData.mission = +prompt('Цель заработать?', 30000);
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
              appData.addExpenses = addExpenses.toLowerCase().split(', ');
              appData.deposit = confirm('Есть ли у вас депозит в банке?');
              console.log(addExpenses.split((/[ ,]+/)).map(word => word[0].toUpperCase() + word.substring(1)).join(', '));

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
    console.log('Расходы: ' + appData.expensesMonth);
    return res;
    },

    getBudget: function() {
        return (appData.budget - appData.expensesMonth);
    },

    getTargetMonth: function() {
      return Math.ceil(appData.mission / accumulatedMonth);
    },
    budgetDays: function() {
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
    },

    getInfoDeposit: function(){
        if(appData.deposit){
            appData.percentDeposit = +prompt('Какой годовой процент?', 10);
            appData.moneyDeposit = +prompt('Какая сумма заложенна?', 10000);
        }
    },

    calcSavedMoney: function(){
        return appData.budgetMonth * appData.period;
    }

};
appData.asking();
let expensesAmount = appData.getExpensesMonth();
let accumulatedMonth = appData.getBudget();
let targetMonth = appData.getTargetMonth();
let dayBudget = appData.budgetDays();
let statusIncome = appData.getStatusIncome();
console.log('Цель будет достигнута за ' + targetMonth + ' месяца');
console.log(appData.getStatusIncome());
appData.budgetMonth = accumulatedMonth;
appData.budgetDay = dayBudget;
appData.period = targetMonth;
for (let key in (appData)) {
    console.log("Наша программа включает в  себя данные: " + "Ключ: " + key + " Значение: " + appData[key]);
}


console.log(typeof (appData.moneyDeposit, typeof appData.income,  typeof appData.expenses, typeof question));
console.log(typeof appData.percentDeposit,typeof appData.moneyDeposit);