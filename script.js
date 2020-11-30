"use strict"


let isNumber = function(n) {
   return !isNaN(parseFloat(n)) && isFinite(n);
}


let money,
   income = 'Фриланс',
   addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', ['Квартплата, проездной, кредит']),
   deposit = confirm('Есть ли у вас депозит в банке?'),
   mission = 50000,
   period = 5;


let start = function(){

   do {
      money = prompt('Ваш месячный доход?');
   } 
   while (!isNumber(money));
}

start();

let showTypeOf = function(data){
      console.log(data, typeof(data));
   };
   
   showTypeOf(money);
   showTypeOf(income);
   showTypeOf(deposit);


console.log(income.length);
console.log(addExpenses.toLowerCase().split(', '));






// let expenses1 = prompt('Введите обязательную статью расходов?'),
//  amount1 = +prompt('Во сколько это обойдется?', 10000),
//  expenses2 = prompt('Введите обязательную статью расходов?'),
//  amount2 = +prompt('Во сколько это обойдется?', 5000);

 console.log('Период = ' + period + ' месяцев');
 console.log(`Цель заработать ${mission} Рублей`);

 let expenses1, expenses2;
 
 function getExpensesMonth(){
   let sum = 0, question;
   for (let i = 0; i < 2; i++){
      
      
      if (i === 0) {
         expenses1 = prompt('Введите обязательную статью расходов?', 'Садик, кино')
      } else {
         expenses2 = prompt('Введите обязательную статью расходов?', 'Театр')
      }

      do{
         question= prompt('Во сколько это обойдется?', 25000);
      }
      while (!isNumber(question));
          

      sum += +question;
      
   }
   console.log(sum);
   
   return sum;
}

let expensesAmount = getExpensesMonth();

console.log('Расходы в месяц: ' + expensesAmount);

let getAccumulatedMonth = function (){
   
   return money - expensesAmount;
}

console.log('Накопления за месяц: ' + getAccumulatedMonth());

let accumulatedMonth = getAccumulatedMonth();
 
let getTargetMonth = function () {
 let target = mission / accumulatedMonth;
   if (target < 0) {
      return ('Цель не будет достигнута');
   } else {
      return ('Цель будет достигнута за: ' + Math.ceil(target) + ' месяцев');
   }
}

console.log(getTargetMonth());

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







