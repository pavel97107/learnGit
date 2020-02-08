'use strict';

let buttonStart = document.getElementById('start'),
    btn = document.getElementsByTagName('button'),
    buttonPlus = btn.item(0),
    incomePlus = btn.item(1),
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
        expensesItems = document.querySelectorAll('.expenses-items input'),
        expensesTitle = expensesItems.item(0),
        expensesAmount = expensesItems.item(1),
        additionalExpenses = document.querySelectorAll('.additional_expenses input'),
        additionalExpensesItem = additionalExpenses.item(0);


let depositCalc =  document.querySelectorAll('.deposit-calc input'),
    depositAmount = depositCalc.item(0),
    depositPrecent = depositCalc.item(1),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select');