'use strict';

let start = document.getElementById('start'),
    btn = document.getElementsByTagName('button'),
    incomePlus = btn.item(0),
    expensesPlus = btn.item(1),
    depositCheck = document.querySelector('#deposit-check'),
    addIncomeItem = document.querySelectorAll('.additional_income input'),
    additionalIncomeTitle = addIncomeItem.item(0),
    additionalIncomeTitleTwo = addIncomeItem.item(1);

    
let resultBudgetMonth = document.getElementsByClassName('budget_month-value'),
    resultBudgetDay = document.getElementsByClassName('budget_day-value'),
    resultEXpensesMonth = document.getElementsByClassName('expenses_month-value'),
    resultAdditionalIncome = document.getElementsByClassName('additional_income-value'),
    resultAdditionalExpenses = document.getElementsByClassName('additional_expenses-value'),
    resultIncomePeriod = document.getElementsByClassName('income_period-value'),
    resultTargetMonth = document.getElementsByClassName('target_month-value');

    let salaryAmount = document.querySelector('.salary-amount'),
        iconItems = document.querySelectorAll('.income-items input'),
        icontTitle = iconItems.item(0),
        icontAmount = iconItems.item(1),
        expensesItems = document.querySelectorAll('.expenses-items'),
        expensesTitle = document.querySelector('.expenses-title'),
        additionalExpenses = document.querySelectorAll('.additional_expenses input'),
        additionalExpensesItem = additionalExpenses.item(0);


let depositCalc =  document.querySelectorAll('.deposit-calc input'),
    depositAmount = depositCalc.item(0),
    depositPrecent = depositCalc.item(1),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select');




let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};



let appData = {
    income: {},
    addIncome: [],
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    period: 0,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expenses: {},
    mission: 0,
    expensesMonth: 0,
    start: function(){

        if(salaryAmount.value === ''){
            alert('Ошибка, поле "Месячный доход" должно быть заполнено');
            return;
        }

    appData.budget = salaryAmount.value;
    console.log('salaryAmount.value: ', salaryAmount.value);
    appData.getExpenses();
    
    appData.getBudget();
    appData.getExpensesMonth();
    },

    addExpensesBlock: function(){

        
        let cloneExpensesItems = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesPlus);

        expensesItems = document.querySelectorAll('.expenses-items');

        if(expensesItems.length === 3){
            expensesPlus.style.display = 'none';
        }
    },

    getExpenses: function(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;

            if(itemExpenses !== '' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
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

expensesPlus.addEventListener('click', appData.addExpensesBlock);
start.addEventListener('click', appData.start); // присвоили обработчик события кнопки Start(Рассчитать)


let expensesAmountMounth = appData.getExpensesMonth();
let accumulatedMonth = appData.getBudget();
let targetMonth = appData.getTargetMonth();
let dayBudget = appData.budgetDays();
let statusIncome = appData.getStatusIncome();
console.log('Цель будет достигнута за ' + targetMonth + ' месяца');
appData.budgetMonth = accumulatedMonth;
appData.budgetDay = dayBudget;
appData.period = targetMonth;
for (let key in (appData)) {
    console.log("Наша программа включает в  себя данные: " + "Ключ: " + key + " Значение: " + appData[key]);
}


console.log(typeof (appData.moneyDeposit, typeof appData.income,  typeof appData.expenses, typeof question));
console.log(typeof appData.percentDeposit,typeof appData.moneyDeposit);