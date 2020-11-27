"use strict"

let money = +prompt('Ваш месячный доход?', 50000),
   income = 'Фриланс',
   addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', ['Квартплата, проездной, кредит']),
   deposit = confirm('Есть ли у вас депозит в банке?'),
   mission = 50000,
   period = 5;

let showTypeOf = function(data){
      console.log(data, typeof(data));
   };
   
   showTypeOf(money);
   showTypeOf(income);
   showTypeOf(deposit);


console.log(income.length);
console.log(addExpenses.toLowerCase().split(', '));






let expenses1 = prompt('Введите обязательную статью расходов?'),
 amount1 = +prompt('Во сколько это обойдется?', 10000),
 expenses2 = prompt('Введите обязательную статью расходов?'),
 amount2 = +prompt('Во сколько это обойдется?', 5000);

 console.log('Период = ' + period + ' месяцев');
 console.log(`Цель заработать ${mission} Рублей`);

 function getExpensesMonth(){
   return amount1 + amount2;
}

console.log('Расходы в месяц: ' + getExpensesMonth());

function getAccumulatedMonth(){
   return money - (amount1 + amount2);
}

console.log('Накопления за месяц: ' + getAccumulatedMonth());

let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth() {
   return mission / accumulatedMonth;
}

console.log('Цель будет достигнута за: ' + Math.ceil(getTargetMonth()) + ' месяцев');

 let budgetDay = Math.floor(accumulatedMonth / 30);

 console.log('Бюджет на день: ' + budgetDay);

let getStatusIncome = function(){
   if (budgetDay > 1200) {
      return ('У вас высокий уровень дохода');
   } else if (1200 >= budgetDay && budgetDay > 600){
      return ('У вас средний уровень дохода');
   } else if (600 >= budgetDay && budgetDay > 0){
      return ('К сожалению у вас уровень дохода ниже среднего');
   }else if (budgetDay < 0){
      return ('Что то пошло не так');
   }
};

console.log(getStatusIncome());







