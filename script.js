"use strict"

alert("Hello world!");

console.log("Здравствуйте"); 

let money = +prompt('Ваш месячный доход?');
console.log(typeof money);


let income = '10000';
console.log(typeof income);

let addExpenses = 'Квартплата, проездной, кредит';
prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, кредит');
console.log(addExpenses.length);
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));

let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(typeof deposit);

let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?');

let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = +prompt('Во сколько это обойдется?');

let budgetMonth = money - (amount1 + amount2);
console.log('Бюджет на месяц ' + budgetMonth);

let mission = Math.ceil(50000 / budgetMonth);
console.log('Цель будет достигнута за: ' + mission + ' месяцев');

let period = 5;
console.log('Период =' + ' ' + period + ' месяцев');

let budgetDay = Math.floor(budgetMonth / 30);
console.log('budgetDay: ', budgetDay);

if (budgetDay > 1200) {
   console.log('У вас высокий уровень дохода');
} else if (1200 >= budgetDay > 600){
   console.log('У вас средний уровень дохода');
} else if (600 >= budgetDay > 0){
   console.log('К сожалению у вас уровень дохода ниже среднего');
}else if (budgetDay < 0){
   console.log('Что то пошло не так');
}






