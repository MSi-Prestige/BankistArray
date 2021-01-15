"use strict";

//TODO: Bag
console.log(0.1 + 0.2);
console.log(0.1 === 0.2);

//TODO: Conversion
console.log(Number("23"));      //23
console.log(+"23");             //23

//TODO: Parsing 
console.log(Number.parseInt("30px"));   // 30
console.log(Number.parseInt("30px", 10));   //! лучше вторым аргументом добавить 10 ! 

console.log(Number.parseInt("e30"));    //NaN   the firs is Symbol ! 


console.log(Number.parseFloat(" 2.5rem  "));   //2.5 
console.log(Number.parseFloat(" 2,5rem  "));   //2

//TODO: bad variant
console.log(Number.isNaN(20));  // false
console.log(Number.isNaN("20"));  // false
console.log(Number.isNaN(+"20X"));  // true

//TODO:   Checkink if value is number 
// проверки, является ли значение числом. Итак, реальное число, а не строка.
console.log(Number.isFinite(20));           //true     -- number
console.log(Number.isFinite("20"));         //false   -- string
console.log(Number.isFinite(+"20x"));     //false
console.log(Number.isFinite(20 / 0));    //false




//TODO: Математика и округление.  LESSON 167

console.log(Math.sqrt(25));  //  5  ----- в квадрате
console.log(25 ** (1 / 2));  //  5  ----- в квадрате  5*5 = 25 
console.log(8 ** (1 / 3));  // 2 ---  В КУБЕ    2*2*2 = 8
//MAX
console.log(Math.max(5, 18, 23, 11, 2));     //23
console.log(Math.max(5, 18, '23', 11, 2));    //23
console.log(Math.max(5, 18, '23px', 11, 2));  //NaN
//MIX
console.log(Math.min(5, 18, 23, 11, 2));  //2

// если бы мы хотели рассчитать радиус круга с 10 пикселями мы могли бы это сделать.
// Для этого мы используем Math.PI. А пока давайте просто посмотрим на это.
// Возможно, вы знаете эту константу. И снова, допустим, у нас получается примерно 10 пикселей.
//PI
console.log(Math.PI * Number.parseFloat("10px") ** 2);   // 314.1592653589793
//Вот как мы вычисляем площадь круга с таким радиусом, ладно?


console.log(Math.trunc(23.3)); // 23

//! TO FIXED = STRING
console.log((2.7).toFixed(0));      // string 3 
console.log((2.345).toFixed(2));    // 2.35



//! Итак, что такое оператор остатка?   просто возвращает остаток от деления.

console.log(5 % 2);  // 1   5 / 2 = 4 = 1 остаток


const isEven = n => n % 2 === 0;  // 4 => 4 % 2 === 0 true. 
console.log(isEven(4));  //true
console.log(isEven(23));  //false   // если число сразу делится на 2 то остатка не будет. ЧЕТНОЕ
console.log(isEven(514));  //true 



//TODO : BIG INT JS  
//the biggest number of JS

console.log(2 ** 53 - 1); //9007199254740991  безопастное

// console.log(2 ** 53 + 0); 
// console.log(4879843893498483983494n);  bigInt = n

//! only BigInt + BigIint ! 
// const huge = 3403333333333333333333322n;
// const num = 23n;
// console.log(num + huge);
// console.log(typeof huge);







