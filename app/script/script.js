'use strick';

let money = +prompt('Ваш месячный доход?', 1000);
console.log('money: ', money);

let income = 'фриланс';
let deposit = confirm('Есть ли у вас депозит в банке?');

console.log('deposit: ', deposit);

let mission = prompt('Цель заработать?', '10000');
console.log('mission: ', mission);


let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
    ['спорт, курсы, интернет']);
console.log(addExpenses.split(', '));

let expenses1 = prompt('Введите обязательную статью расходов?');
console.log('Статья расходов: ', expenses1);

let expenses2 = prompt('Введите обязательную статью расходов?');
console.log('Статься расходов: ', expenses2);

let amount1 = prompt('Во сколько это обойдется?');
console.log('Обойдется: ', amount1);

let amount2 = prompt('Во сколько это обойдется?');
console.log('Обойдется: ', amount2);

let budgetMonth = money - (amount1) - (amount2);
console.log(budgetMonth);

let period = Math.ceil(mission / budgetMonth);
console.log('Цель будет достигнута за ' + (period) + ' месяца');

let budgetDay = Math.round(budgetMonth / 30);
console.log('Бюджет на день', budgetDay);

let getIncome = function () {
    if (budgetDay >= 1200) {
        return ('У вас высокий уровень дохода');
    } else if (budgetDay > 600) {
        return ('У вас средний уровень дохода');
    } else {
        return ('К сожалению у вас уровень дохода ниже среднего');
    }
    if (budgetDay < 0) {
        return ('Что то пошло нет так');
    }
};
console.log(getIncome());

// if (budgetDay >= 1200) {
//     console.log('У вас высокий уровень дохода');
// } else if (budgetDay > 600) {
//     console.log('У вас средний уровень дохода');
// } else {
//     console.log('К сожалению у вас уровень дохода ниже среднего');
// } if (budgetDay < 0) {
//     console.log('Что то пошло нет так');
// }


///////////////////////////////////////////////////////////////////////////////
//Одна функция - одно действие!


function outputMessage(name, age) {
    console.log('Hello ' + name);
    console.log('My name ' + age);
}
outputMessage('Max', 30); // способы вызывать функию стандартный Способ function declaration


let f = 0;

const sum = function (a, b) {
    console.log(arguments); // псевдо массив
    f = a + b;
};
sum(1, 3, 3, 4, 5, 5);
console.log(f);

/////////////// Чистая функция

const sun = function (a, b) {
    return a + b;
};

let fek = sun(3, 4);
console.log(fek);


const suk = function (a, b) {
    if (a) {
        a = 0;
    }

    if (!b) {
        b = 0;
    }

    return a + b; //возвращает аргументы в переменную а также return отстанавливает дальнейшее применение функции
};

let mn = suk(5);
console.log(mn);

let outShow = function (data) {
    console.log(data, typeof (data));

};
outShow(money);
outShow(income);
outShow(deposit);



// const userName = function(){
//     console.log('Gello world');
// };
// userName();  // через переменную Способ function expression

// const userLog = new Function('alert("Hi")'); // функция через конструктор