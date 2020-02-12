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
    let leftInputAll = document.querySelectorAll('input');
    let cancel = document.querySelector('#cancel');
    console.log(leftInputAll);
    
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





const AppData = function(){
        this.income = {};
        this.addIncome = [];
        this.addExpenses = [];
        this.deposit = false;
        this.percentDeposit = 0;
        this.moneyDeposit = 0;
        this.incomeMonth = 0;
        this.budget = 0;
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.expenses = {};
        this.expensesMonth = 0;
};

AppData.prototype.start = function(){
    this.budget = +salaryAmount.value;
    console.log('salaryAmount.value: ', salaryAmount.value);
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.calcSavedMoney();
    this.getBudget();
    this.getTargetMonth();
    this.getStatusIncome();
    this.showResult();
    console.log(this);
    };


    AppData.prototype.showResult = function(){
        let _this = this;
        resultBudgetMonth.value = this.budgetMonth;
        resultBudgetDay.value = this.budgetDay;
        resultExpensesMonth.value = this.expensesMonth;
        resultAdditionalExpenses.value = this.addExpenses.join(', ');
        resultAdditionalIncome.value = this.addIncome.join(', ');
        resultTargetMonth.value = this.getTargetMonth();
        resultIncomePeriod.value = this.calcSavedMoney();
        periodSelect.addEventListener('input', _this.getIncomePeriodValue);
    };

    AppData.prototype.addExpensesBlock = function(){
        let cloneExpensesItems = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
            expensesPlus.style.display = 'none';
        }
    };

    AppData.prototype.getExpenses = function(){
        const _this = this;
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
                _this.expenses[itemExpenses] = cashExpenses;
            }
        });
    };

    AppData.prototype.addIncomeBlock = function(){
        let cloneIncomeBlock =incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeBlock, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3){
            incomePlus.style.display = 'none';
        }
    };

    AppData.prototype.getIncome = function(){
        const _this = this;
           incomeItems.forEach(function(item){
               let itemIncome = item.querySelector('.income-title').value;
               let cashIncome = item.querySelector('.income-amount').value;
               if(itemIncome !== '' && cashIncome !== ''){
                _this.incomeMonth += +cashIncome;
            }

           });
           
    };

    AppData.prototype.getAddExpenses = function(){
        let addExpenses =additionalExpensesItem.value.split(',');
        const _this = this;
        addExpenses.forEach(function(item){
            if(item !== ''){
                item = item.trim();
                _this.addExpenses.push(item);
            }
        });
    };

    AppData.prototype.getAddIncome = function(){
        const _this = this;
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== ''){
                _this.addIncome.push(itemValue);
            }
        });
    };
    AppData.prototype.getExpensesMonth = function(){
        for (let key in (this.expenses)) {
        this.expensesMonth += +this.expenses[key];
    }
    console.log('Расходы: ' + this.expensesMonth);
    };

    AppData.prototype.getBudget = function() {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.ceil(this.budgetMonth / 30);
    };

    AppData.prototype.getTargetMonth = function() {
      return Math.ceil(targetAmount.value / this.budgetMonth);
    };
    AppData.prototype.getStatusIncome = function() {
        if (this.budgetDay > 1200) {
            return('У вас высокий уровень дохода');
        } else if (this.budgetDay > 600) {
            return('У вас средний уровень дохода');
        } else if (this.budgetDay < 600) {
            return('К сожалению у вас уровень дохода ниже среднего');
        }
    };

    AppData.prototype.getInfoDeposit = function(){
        if(this.deposit){
            this.percentDeposit = +prompt('Какой годовой процент?', 10);
            this.moneyDeposit = +prompt('Какая сумма заложенна?', 10000);
        }
    };

    AppData.prototype.calcSavedMoney = function(){
        return this.budgetMonth * periodSelect.value;
    };

    AppData.prototype.getPeriodSelect = function(){
        let periodAmount = document.querySelector('.period-amount');
        for(let i = 1; i <= 1;  i++){
           periodAmount.textContent = periodSelect.value;
        }

    };

    AppData.prototype.getIncomePeriodValue = function(){
        this.calcSavedMoney();
        this.showResult();
    };

    AppData.prototype.blockButton = function(){
        start.disabled = true;

        if(salaryAmount.value !== ''){
            start.disabled = false;
        }
    };

    AppData.prototype.blockInputAll = function(){
        let leftInputAll = document.querySelectorAll('.data input');
        for(let i = 0; i < leftInputAll.length; i++ ){
            let inputAll = leftInputAll[i];
            inputAll.disabled = true;
        }
            function noneStart(){
                start.setAttribute('style', 'display: none');
            }
            function addButtonReset(){
                let cancel = document.querySelector('#cancel');
                cancel.setAttribute('style', 'display: block');
            }
            noneStart();
            addButtonReset();
    };

    AppData.prototype.resetInputAll = function(){
        let leftInputAll = document.querySelectorAll('input');
        for(let i = 0; i < leftInputAll.length; i++){
            let resetInput = leftInputAll[i];
            resetInput.value = '';
        }
        function noDisabled(){
            let leftInputAll = document.querySelectorAll('.data input');
            for(let i = 0; i < leftInputAll.length; i++ ){
                let inputAll = leftInputAll[i];
                inputAll.disabled = false;
            }
        }
        function buttonOn(){
            start.setAttribute('style', 'display: block');
            cancel.setAttribute('style', 'display: none');
            periodSelect.value = 1;
        }
        buttonOn();
        noDisabled();
    };

AppData.prototype.eventListener = function(){
    appData.blockButton();
    periodSelect.addEventListener('input',appData.getPeriodSelect);
    incomePlus.addEventListener('click', appData.addIncomeBlock);
    expensesPlus.addEventListener('click', appData.addExpensesBlock);
    salaryAmount.addEventListener('input', appData.blockButton);
    start.addEventListener('click', appData.start.bind(appData));
    start.addEventListener('click', appData.blockInputAll);
    cancel.addEventListener('click', appData.resetInputAll);
};


const appData = new AppData();
console.log(appData);

AppData.prototype.eventListener();

    
    


// for (let key in (appData)) {
//     console.log("Наша программа включает в  себя данные: " + "Ключ: " + key + " Значение: " + appData[key]);
// }

