"use strict"

let money = +prompt('Ваш месячный доход?', 50000),
   income = 'Фриланс',
   addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', ['Квартплата, проездной, кредит']),
   deposit = confirm('Есть ли у вас депозит в банке?'),
   mission = 50000,
   period = 5;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(income.length);
console.log(addExpenses.toLowerCase().split(', '));

let expenses1 = prompt('Введите обязательную статью расходов?'),
 amount1 = +prompt('Во сколько это обойдется?'),
 expenses2 = prompt('Введите обязательную статью расходов?'),
 amount2 = +prompt('Во сколько это обойдется?');

 console.log('Период = ' + period + ' месяцев');
console.log(`Цель заработать ${mission} Рублей`);

let budgetMonth = money - (amount1 + amount2);
console.log('Бюджет на месяц ' + budgetMonth);

let periodMission = Math.ceil(mission / budgetMonth);
let budgetDay = Math.floor(budgetMonth / 30);

console.log('Бюджет на день: ' + budgetDay);

console.log('Цель будет достигнута за: ' + periodMission + ' месяцев');

if (budgetDay > 1200) {
   console.log('У вас высокий уровень дохода');
} else if (1200 >= budgetDay && budgetDay > 600){
   console.log('У вас средний уровень дохода');
} else if (600 >= budgetDay && budgetDay > 0){
   console.log('К сожалению у вас уровень дохода ниже среднего');
}else if (budgetDay < 0){
   console.log('Что то пошло не так');
}






