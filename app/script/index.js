'use strict';

const start = document.getElementById('start'),
    btn = document.getElementsByTagName('button'),
    incomePlus = btn.item(0),
    expensesPlus = btn.item(1),
    depositCheck = document.querySelector('#deposit-check'),
    addIncomeItem = document.querySelectorAll('.additional_income input'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    additionalIncomeTitle = addIncomeItem.item(0),
    additionalIncomeTitleTwo = addIncomeItem.item(1);
    const leftInputAll = document.querySelectorAll('input');
    const cancel = document.querySelector('#cancel');
    console.log(leftInputAll);
    
const resultBudgetMonth = document.querySelector('.budget_month-value'),
    resultBudgetDay = document.querySelector('.budget_day-value'),
    resultExpensesMonth = document.querySelector('.expenses_month-value'),
    resultAdditionalIncome = document.querySelector('.additional_income-value'),
    resultAdditionalExpenses = document.querySelector('.additional_expenses-value'),
    resultIncomePeriod = document.querySelector('.income_period-value'),
    resultTargetMonth = document.querySelector('.target_month-value');

    const salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    additionalExpenses = document.querySelectorAll('.additional_expenses input'),
    additionalExpensesItem = additionalExpenses.item(0);
    let expensesItems = document.querySelectorAll('.expenses-items');
    let incomeItems = document.querySelectorAll('.income-items');
        

const depositCalc =  document.querySelectorAll('.deposit-calc input'),
    depositAmount = depositCalc.item(0),
    depositPrecent = depositCalc.item(1),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select');





class AppData {
    constructor(){
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
    }

    start(){
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
        }

    showResult(){
        resultBudgetMonth.value = this.budgetMonth;
        resultBudgetDay.value = this.budgetDay;
        resultExpensesMonth.value = this.expensesMonth;
        resultAdditionalExpenses.value = this.addExpenses.join(', ');
        resultAdditionalIncome.value = this.addIncome.join(', ');
        resultTargetMonth.value = this.getTargetMonth();
        resultIncomePeriod.value = this.calcSavedMoney();
        periodSelect.addEventListener('input', this.getIncomePeriodValue);
    }
    addExpensesBlock(){
        let cloneExpensesItems = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
            expensesPlus.style.display = 'none';
        }
    }
    getExpenses(){
        expensesItems.forEach((item) =>{
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
                this.expenses[itemExpenses] = cashExpenses;
            }
        });
    }

    addIncomeBlock(){
        let cloneIncomeBlock =incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeBlock, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3){
            incomePlus.style.display = 'none';
        }
    }
    getIncome(){
           incomeItems.forEach((item) => {
               let itemIncome = item.querySelector('.income-title').value;
               let cashIncome = item.querySelector('.income-amount').value;
               if(itemIncome !== '' && cashIncome !== ''){
                this.incomeMonth += +cashIncome;
            }
           });
           
        }
    getAddExpenses(){
        let addExpenses =additionalExpensesItem.value.split(',');
        addExpenses.forEach((item) => {
            if(item !== ''){
                item = item.trim();
                this.addExpenses.push(item);
            }
        });
    }
    getAddIncome(){
        additionalIncomeItem.forEach((item) => {
            let itemValue = item.value.trim();
            if(itemValue !== ''){
                this.addIncome.push(itemValue);
            }
        });
    }
    getExpensesMonth(){
        for (let key in (this.expenses)) {
        this.expensesMonth += +this.expenses[key];
    }
    console.log('Расходы: ' + this.expensesMonth);
    }
    getBudget() {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.ceil(this.budgetMonth / 30);
    }
    getTargetMonth() {
        return Math.ceil(targetAmount.value / this.budgetMonth);
      }
      getStatusIncome() {
        if (this.budgetDay > 1200) {
            return('У вас высокий уровень дохода');
        } else if (this.budgetDay > 600) {
            return('У вас средний уровень дохода');
        } else if (this.budgetDay < 600) {
            return('К сожалению у вас уровень дохода ниже среднего');
        }
    }
    getInfoDeposit(){
        if(this.deposit){
            this.percentDeposit = +prompt('Какой годовой процент?', 10);
            this.moneyDeposit = +prompt('Какая сумма заложенна?', 10000);
        }
    }
    calcSavedMoney(){
        return this.budgetMonth * periodSelect.value;
    }
    getPeriodSelect(){
        let periodAmount = document.querySelector('.period-amount');
            periodAmount.textContent = periodSelect.value;
        }
    getIncomePeriodValue(){
        this.calcSavedMoney();
        this.showResult();
    }
    blockButton(){
        start.disabled = true;
        if(salaryAmount.value !== ''){
            start.disabled = false;
        }
    }
    blockInputAll(){
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
    }
    resetInputAll(){
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
    }
    eventListener(){
        start.addEventListener('click', this.start.bind(appData));
        start.addEventListener('click', this.blockInputAll);
        cancel.addEventListener('click', this.resetInputAll);
        periodSelect.addEventListener('input', this.getPeriodSelect);
        incomePlus.addEventListener('click', this.addIncomeBlock);
        expensesPlus.addEventListener('click', this.addExpensesBlock);
        salaryAmount.addEventListener('input', this.blockButton);
    }
}

console.log(typeof AppData);
const appData = new AppData();
appData.blockButton();
appData.eventListener();


    
