"use strict"

const getRandomNumber = function(min, max) {
   let rand = min - 0.5 + Math.random() * (max - min +1);
   return Math.round(rand);
};

const getUserNumber = function(str){
   const number = prompt(str);
   if (checNumber(number)) {
      return +number;
   }
   getUserNumber(str);
};


const game = function() {
   const randomNumber = getRandomNumber(0, 100);
   console.log('Загоданное число ' + randomNumber);

   return function play() {
      const userNumber = getUserNumber('Введи свое число');

      if (userNumber > randomNumber) {
         alert('Загаданное число меньше');
      }

      if (userNumber < randomNumber) {
         alert('Загаданное число больше');
      }

      play();
    };
};

const c = game();
c();