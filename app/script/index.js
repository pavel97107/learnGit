'use strict';

let start = document.getElementById('start'),
    btn = document.getElementsByTagName('button'),
    incomePlus = btn.item(0),
    expensesPlus = btn.item(1),
    depositCheck = document.querySelector('#deposit-check'),
    addIncomeItem = document.querySelectorAll('.additional_income input'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    additionalIncomeTitle = addIncomeItem.item(0),
    additionalIncomeTitleTwo = addIncomeItem.item(1);

    
let resultBudgetMonth = document.querySelector('.budget_month-value'),
    resultBudgetDay = document.querySelector('.budget_day-value'),
    resultExpensesMonth = document.querySelector('.expenses_month-value'),
    resultAdditionalIncome = document.querySelector('.additional_income-value'),
    resultAdditionalExpenses = document.querySelector('.additional_expenses-value'),
    resultIncomePeriod = document.querySelector('.income_period-value'),
    resultTargetMonth = document.querySelector('.target_month-value');

    let salaryAmount = document.querySelector('.salary-amount'),
        incomeItems = document.querySelectorAll('.income-items'),
        incomeTitle = document.querySelector('.income-title'),
        incomeAmount = document.querySelector('.income-amount'),
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
    incomeMonth: 0,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expenses: {},
    expensesMonth: 0,
    start: function(){


    this.budget = +salaryAmount.value;
    console.log('salaryAmount.value: ', salaryAmount.value);
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.calcSavedMoney();
    this.getBudget();
    this.showResult();
    console.log(this);
    },

    showResult: function(){
        resultBudgetMonth.value = this.budgetMonth;
        resultBudgetDay.value = this.budgetDay;
        resultExpensesMonth.value = this.expensesMonth;
        resultAdditionalExpenses.value = this.addExpenses.join(', ');
        resultAdditionalIncome.value = this.addIncome.join(', ');
        resultTargetMonth.value = this.getTargetMonth();
        resultIncomePeriod.value = this.calcSavedMoney();
        periodSelect.addEventListener('input', this.getIncomePeriodValue);
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

    addIncomeBlock: function(){
        let cloneIncomeBlock =incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeBlock, incomePlus);

        incomeItems = document.querySelectorAll('.income-items');

        if(incomeItems.length === 3){
            incomePlus.style.display = 'none';
        }
    },

    getIncome: function(){
           incomeItems.forEach(function(item){
               let itemIncome = item.querySelector('.income-title').value;
               let cashIncome = item.querySelector('.income-amount').value;

               if(itemIncome !== '' && cashIncome !== ''){
                appData.incomeMonth += +cashIncome;
            }

           });
           
    },

    getAddExpenses: function(){
        let addExpenses =additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            if(item !== ''){
                item = item.trim();
                appData.addExpenses.push(item);
            }
        });
    },

    getAddIncome: function(){
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== ''){
                appData.addIncome.push(itemValue);
            }
        });
    },
    getExpensesMonth:function(){
        for (let key in (appData.expenses)) {
        appData.expensesMonth += +appData.expenses[key];
    }
    console.log('Расходы: ' + appData.expensesMonth);
    },

    getBudget: function() {
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.ceil(appData.budgetMonth / 30);
    },

    getTargetMonth: function() {
      return Math.ceil(targetAmount.value / appData.budgetMonth);
    },
    getStatusIncome: function() {
        if (appData.budgetDay > 1200) {
            return('У вас высокий уровень дохода');
        } else if (appData.budgetDay > 600) {
            return('У вас средний уровень дохода');
        } else if (appData.budgetDay < 600) {
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
        return appData.budgetMonth * periodSelect.value;
    },

    getPeriodSelect: function(){
        let periodAmount = document.querySelector('.period-amount');
        for(let i = 1; i <= 1;  i++){
           periodAmount.textContent++;
        }

    },

    getIncomePeriodValue: function(){
        appData.calcSavedMoney();
        appData.showResult();
    },

    blockButton: function(){
        start.disabled = true;

        if(salaryAmount.value !== ''){
            start.disabled = false;
        }
    }

};
appData.blockButton();
periodSelect.addEventListener('input',appData.getPeriodSelect);
incomePlus.addEventListener('click', appData.addIncomeBlock);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
salaryAmount.addEventListener('input', appData.blockButton);
start.addEventListener('click', appData.start.bind(appData)); // присвоили обработчик события кнопки Start(Рассчитать)


let expensesAmountMounth = appData.getExpensesMonth();
let accumulatedMonth = appData.getBudget();
let targetMonth = appData.getTargetMonth();
let statusIncome = appData.getStatusIncome();
console.log('Цель будет достигнута за ' + targetMonth + ' месяца');


// for (let key in (appData)) {
//     console.log("Наша программа включает в  себя данные: " + "Ключ: " + key + " Значение: " + appData[key]);
// }

