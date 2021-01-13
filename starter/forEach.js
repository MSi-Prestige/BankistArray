"use strict";

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//! MAP IN ARRAY    movements.map(.....)







// MAPS AND SETS  =============== FOR EACH
//map
currencies.forEach(function (value, key, map) {     //RESULT  USD : United States dollar
    console.log(`${key} : ${value}`);                  //RESULT EUR : Euro
});

//set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR", "RUSS"]);
console.log(currenciesUnique);  //! ВЕРНЕТ БЕЗ ПОВТОРОК ! Set(4) {"USD", "GBP", "EUR", "RUSS"} unic values

currenciesUnique.forEach(function (value, key, map) {
    console.log(`${key}  and ${value}`);
});
// RESULT =   USD and USD         GBP and GBP
//!Ну, в наборе нет ключей, да? И индексов тоже нет. ////////////////////////

// MAPS AND SETS  =============== FOR EACH


movements.forEach(function (mov, i, arr) {   // 3 arg = money = mov , i = index , arr = all array! 
    if (mov > 0) {
        console.log(`Movement ${i + 1} : You deposited ${mov}`);
    } else {
        console.log(`Movement ${i + 1} : You withdrew ${Math.abs(mov)}`);
    }
});


// for of

// index =  for(const [i, value] of movements.entries()) Таким образом, записи - это просто еще один метод массива
//и возвращает массив массивов,

for (const movementVarOne of movements) {
    if (movementVarOne > 0) {
        console.log(`You deposited ${movementVarOne}`);
    } else {
        console.log(`You withdrew ${Math.abs(movementVarOne)}`);   // abs = уберает - (минус)
    }
}

console.log("----------------------");
// forEach

//! Также, поскольку метод forEach вызывает эту функцию обратного вызова 
//! на каждой итерации он будет передавать текущий элемент массива в качестве аргумента.

movements.forEach(function (movementVarTwo) {
    if (movementVarTwo > 0) {
        console.log(`You deposited ${movementVarTwo}`);
    } else {
        console.log(`You withdrew ${Math.abs(movementVarTwo)}`);   // abs = уберает - (минус)
    }
});  //first eteration  0: function(200)
//    1: function(450)
//    ................
// и поэтому в этом случае мы говорим для каждого что на каждой итерации

// он должен записать одну из этих двух строк в консоль Итак, мы даем инструкции для метода forEach

// предоставив ему функцию обратного вызова

// который содержит эти инструкции, хорошо.


// MAPS AND SETS  =============== FOR EACH


//SLICE - don't muteted arr
// let arr = ["a", "b", "c", "d", "e"];

//! тут новые массивы - верхний будет таким как был
// console.log(arr.slice(2));   // result = ["c", "d", "e"]; 

// console.log(arr.slice(2, 4));  //result = ["c", "d"];   4 не учитывается ! 

// console.log(arr.slice(-2));   //result = [d , e]

// console.log(arr.slice(-1));   //result = LAST elemet array =  [e] ! 

// console.log(arr.slice(1, -2));  //result  = ["b", "c"];   с 1 до -2 с конца. 

// console.log(arr.slice());  //result = ["a", "b", "c", "d", "e"];  OR console.log([...arr]); = ["a", "b", "c", "d", "e"]

//SPLICE - Muteted original array ! 

// console.log(arr.splice(2));   //!   = ["c", "d", "e"]; 
// console.log(arr);             //!  No >>> original Arr now = ["a", "b"];   only 2 elements
// //все елементы перенеслись в новый а там осталось только 2 .

// arr.splice(-1);     // ["a"]  
// console.log(arr);
// метод splice возвращается, нас даже не интересует.Все, что нас обычно интересует, это просто удалить
// один или несколько элементов из массива с помощью splice.И одиFн довольно распространенный вариант
// использования - просто удалить
// последний элемент массива.

//!------------------------------------------------------------------

// arr = ["a", "b", "c", "d", "e"];

// const arr2 = ["j", "i", "h", "g", "f"];

// console.log(arr2.reverse());  // мутирует !   ["f", "g", "h", "i", "j"]
// console.log(arr2);            //   ["j", "i", "h", "g", "f"]; =======>>>> ["f", "g", "h", "i", "j"]  

//! ------------------------------------------------------------------

// let arrConcat = ["a", "b", "c", "d", "e"];

// const letters = arrConcat.concat(arr2);  //и он также не изменяет ни один из задействованных массивов.
// console.log(letters);

// const variant2 = [...arrConcat, ...arr2];  //и он также не изменяет ни один из задействованных массивов.
// console.log(variant2);

//!--------------------------------------------------------------------

//JOIN 
// console.log(letters.join("-"));
//RESULT =  string  a-b-c-d-e-f-g-h-i-j


// LESSON --------------------------------------- 141 ----------  looping array - foreach



//!
//TASK                                           145 LESSON
const juliaDog = [3, 5, 2, 12, 7];
const kateDog = [4, 1, 15, 8, 3];


const checkDogs = function (dogsJulia, dogsKate) {
    const newDogJulia = dogsJulia.slice(1, -2);
    // console.log(newDogJulia);
    const allDogsGirls = newDogJulia.concat(dogsKate);


    allDogsGirls.forEach(function (dogYears, i) {
        if (dogYears >= 3) {
            console.log(`Dog Num ${i + 1} is adult and is ${dogYears} years old ! `);
        } else {
            console.log(`Dog is smoll ${i + 1} is still a puppy ${dogYears} puppy !`);
        }
    });


};

checkDogs(juliaDog, kateDog);



