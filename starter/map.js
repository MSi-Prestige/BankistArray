"use strict";

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};
const accounts = [account1, account2, account3, account4];
//! MAP IN ARRAY    movements.map(.....)


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {   // перебираем через MAP и делаем то что в функции с каждым
    // эллементом.   (mov) = 200 --> 200 * 1.1 return || next (mov) = 450 -->> 450 * 1.1 return ..........
    return mov * euroToUsd;

});                                  //! функциональному программированию. разные парадигмы.

// console.log(movements);
// console.log(movementsUSD);

//-------------------------------FOR OF------------------------------------------------
const movementsUSDfor = [];
for (const mov of movements) {
    movementsUSDfor.push(mov * euroToUsd);
}
console.log(movementsUSDfor);

//ARROW FUNCTION - SECOND VARIANT ! ---------------------------------------------------
const movementsUSD1 = movements.map(mov => mov * euroToUsd); //! RETURN не нужен !! 
// console.log(movementsUSD1);


//------------------------------------MAP NEW ARRAY STRING---------------------------------
const movementsDescriptions = movements.map((mov, i, arr) => {  //Из этих трех мы используем только первые два,
    //только текущий элемент и текущий индекс! mov   i .
    if (mov > 0) {
        return `Movement ${i + 1} : You deposited ${mov}`;
    } else {
        return `Movement ${i + 1} : You Withdrew ${Math.abs(mov)}`;
    }

    //! Или упростим 2 строки в 1 -  `Movement ${i + 1} : ${mov > 0 ? `deposited` : `withdrew`} ${Math.abs(mov)}`

});
// console.log(movementsDescriptions);
// Итак, еще раз, все, что мы здесь делаем, это передаем
// эту функцию обратного вызова в метод карты, верно?
// Но мы сами не вызываем эту функцию.

//! --------------------------Побочный эффект for of это то что он по очереди выводит в консоль , 
//! а МАР сразу целиком , за раз.  мы не создавали побочных эффектов на каждой итерации.

console.log("FILTER METHOD -----------------------------------");

//-----------------------------------------THE FILTER METHOD --------------------------------------
//Итак, мы хотим отфильтровать эти отрицательные значения.
//! const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function (mov) {   // (mov) = текущим элемент массива.  (mov , i, arr)
    return mov > 0;  // записать только те что положительные ! [200, 450, 3000, 70, 1300]
});

// console.log(movements);
// console.log(deposits);


//------------ отрицательные -------------------------
// ARROW VARIANT :  const withdrawls = movements.filter(mov2 => mov 2 < 0);   // 1 arg mov2  or two (mov2, x) skobki
const withdrawls = movements.filter(function (mov2) {
    return mov2 < 0;
});
console.log(withdrawls);

//---------------------------------------------150 lesson - METHOD REDUCE--------------------------
// И как вы помните,
// мы используем метод сокращения, чтобы по существу свести к минимуму
// все элементы в массиве к одному единственному значению.
// И мы говорили о примере
// сложение всех чисел в один массив, верно?


console.log(movements);  //(8) [200, 450, -400, 3000, -650, -130, 70, 1300]

const globalBalance = movements.reduce(function (acc, cur, i, arr) {        //acc  -- accumulator  -> snowball
    // первый параметр всегда текущий элемент массива. Назовем это текущим.
    // Второй - текущий индекс а третий - весь массив.
    // Но здесь, в функции обратного вызова метода reduce, первый параметр на самом деле
    //! то, что называется аккумулятором.
    // Итак, в основном на каждой итерации цикла
    // возвращаем обновленный аккумулятор
    // так что текущее значение плюс новое текущее значение.
    //console.log(`Iteration ${i} : ${acc}`);
    return acc + cur;

}, 0);   //  <------- Итак, в этом примере мы хотим начать считать или мы хотим начать добавление с нуля.
// Поэтому здесь мы просто указываем ноль.
console.log(globalBalance);

// acc - старт с 0 и постоянно прибавляет cur ! А i это индекс в массиве

//! -------- 2 VARIANT  FOR OF ---------

let balance22 = 0;
for (const mov of movements) {   //[200, 450, -400, 3000, -650, -130, 70, 1300]  = 3840
    balance22 += mov;
} console.log(balance22);
//!-------------------------------------
//ARROW
// const glb = movements.reduce((acc, cur) =>
//     acc + cur, 0);
// console.log(glb);

//! --------------------------------------------one more variant Reduce ----------------

// Итак, на этот раз я хочу получить максимальное значение массива движений здесь.

// REDUCE потому что помните, что сокращение предназначено для сжатия массива в одно единственное значение.
//[200, 450, -400, 3000, -650, -130, 70, 1300]    ===  3000 
const maxReduce = movements.reduce(function (acc, mov) {
    if (acc > mov) {   //! первая итерация 200 потом когда - 400 сработает else !!!!! 
        return acc;    //! так как acc 200 > 400 false .   в итоге 3000 макс
    } else {
        return mov;
    }
}, movements[0]); //Так что не ставьте здесь ноль когда вы пытаетесь найти максимальное или минимальное значение,

console.log(maxReduce);




//! ---------------------------------------- CODING CHALLENGE 2 -----------------------------------------------
const arrDogs1 = [5, 2, 4, 1, 15, 8, 3];
const arrDogs2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (arrDog) {
    const newAge = arrDog.map(function (age) {   //новый массив уже с посчитыными годами
        if (age <= 2) {
            age = age * 2;
        } else {
            age = 16 + age * 4;
        } return age;
    });
    console.log(newAge);
    const adults = newAge.filter(ageSort => ageSort >= 18);  // примит age и те что true запишит в новый массив
    console.log(adults);

    // 2 3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5
    // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;     //VAR 1 
    // const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length,0);  // var2 
    const average = adults.reduce(function (acc, age) {                                // var 3 + RETURN
        acc = acc + age / adults.length;
        return acc;
    }, 0);
    console.log(average);
};
// calcAverageHumanAge(arrDogs1);
// calcAverageHumanAge(arrDogs2);


//! ------------------------------------LESSON 152 ------------ THE MAGIC OF CHAINING METHODS ------------------
// Итак, до сих пор мы использовали фильтр карты и уменьшить методы как бы изолированно.
// Однако мы можем сделать еще один шаг вперед соединяя все эти методы один за другим.

console.log("-------------THE MAGIC OF CHAINING METHODS------------");

//? movements.filter(mov => mov > 0)  ---->> Первое действие - массив с приходом денег. 
//? .map(mov => mov * eurToUsd)  ------>>  2
//? .reduce((acc, mov)) => acc + mov, 0);


const totalDepositsUSD = movements
    .filter(mov => mov > 0)         //Итак, filter возвращает новый массив. можно еще что то добавить
    .map(mov => mov * euroToUsd)    // или то же самое для карты
    .reduce((acc, mov) => acc + mov, 0); // тут только число 1 Таким образом, 
//мы можем связать метод только после другого, если первый возвращает массив.
console.log(totalDepositsUSD);

//! ПРОВЕРКА НА КАЖДОМ ШАГЕ 
//? .map((mov, i, arr) => {
//?   console.log(arr);  
//?     return mov * aurToUsd ; })

//! ---------------------------------------- CODING CHALLENGE 3 -----------------------------------------------

//TODO: цепочка функция стрелок. 
const calcAverageHumanAgeArrow = (arrDog) => arrDog
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((ageSort => ageSort >= 18))
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);  //! среднее 

console.log(calcAverageHumanAgeArrow(arrDogs1));
//! -----------------------------------------------------------------------------------------------------------
// Так что помните, что в последнем испытании   .reduce((acc, age i, arr)) .........   arr.length !!!!!
// Сначала я просто сложил все значения вместе. А потом я разделил его на длину массива.
// В этом случае по длине массива взрослых. Однако в данном случае это не сработает.
// Потому что не было бы возможности узнать длину массива взрослых. Итак, вот этот результат, верно?
// Потому что мы его все равно не хранили. И мы не могли так поступать, как взрослые. Длина, правда?
// Это было бы невозможно потому что взрослых здесь нигде нет.
//!  В цепочке нет промежуточных значений - только конечное.



//! ------------------------------------------METHOD FIND -----------------------------------------------------
console.log("-----------Method FIND------------------");
// Как видите, метод Find немного похож
// к методу Filter, но есть два принципиальных отличия. Первый фильтр возвращает все элементы
// которые соответствуют условию, в то время как метод Find  возвращает только первый и 
// что еще более важно, метод Filter возвращает новый массив, а Find возвращает только сам элемент а не массив!

const firstWithdrawl = movements.find(mov => mov < 0);  //FIND - вернет первое подходящее под условие.
console.log(movements);      //(8) [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(firstWithdrawl);      //!  -400   result



//! -----------------------------------------SOME AND EVERY --------------------------------------------------
// (8) [200, 450, -400, 3000, -650, -130, 70, 1300]
//! Только равенство - а в SOME условие 
//TODO : INCLUDES = СРАВНИВАЕТ ! 
console.log(movements.includes(-130));      // true  in array 

// Другими словами, мы хотим знать есть ли положительное движение в этом массиве. Так что любое число больше нуля.
// Итак, как бы нам это сделать? Что ж, можно сказать движения. Некоторые
// и теперь мы можем указать здесь или условие, как всегда.
// Итак, та же функция обратного вызова, которая должна возвращать либо правда, либо ложь.

//! SOMEEEEEEEEE
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);   // TRUE
//----------------------------------------
const anyDeposits1 = movements.some(mov => mov > 5000);
console.log(anyDeposits1);  // FALSE


//! EVERY METHOD

console.log(movements.every(mov => mov > 0));   // тут boolean result = false ! смотрим ВСЕ ли эллементы больше 0
//movements: [430, 1000, -30, 50, 90, -300],
//console.log(account4.movements.every(mov => mov > 0)); // TRUE так как там только + приходы
// movements: [430, 1000, 700, 50, 90],

//separete callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));  //true
console.log(movements.filter(deposit)); //(5) [200, 450, 3000, 70, 1300]


//! METHOD FLAT map  ИЗВЛЕКАЕТ любую вложенность массива методы плоской карты. es 2019

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
const arrNew = arr.flat();
console.log(arrNew);

const arrDeep = [[[1, 2,], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); //! >>> 2 = глубина вложенности


// primer

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
//map
//(4) [Array(8), Array(8), Array(8), Array(5)]
//0: (8) [200, 450, -400, 3000, -650, -130, 70, 1300]
//1: (8) [5000, 3400, -150, -790, -3210, -1000, 8500, -30]
//2: (8) [200, -200, 340, -300, -20, 50, 400, -460]
//3: (5) [430, 1000, 700, 50, 90]
//length: 4
//__proto__: Array(0)

//! ТЕПЕР ВСЕ ЭТО В 1 МАССИВ !!!!!!!!!!
const allMovements = accountMovements.flat(); //! без парраметра так как 1 уровень влож. 
//29) [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210,
//-1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]
console.log(allMovements);
// sum all
const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance); //result   = 17,840

//variant 2 
const overalBalance2 = accounts
    .map(acc => acc.movements)
    .flat()
    .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);


//! flatMAP --------------------------
//TODO:  плоская карта здесь только на один уровень и мы не можем это изменить. Array 1 levl
//TODO: 2 , 3 , 4 LEVL = ONLY FLAT ! 
const overalBalance23 = accounts
    .flatMap(acc => acc.movements)
    .reduce((acc, mov) => acc + mov, 0);
//----------------------------------


//!
//!
//!
//!                    SOTRTING ARRAYS  BIG LESSON ! 

//TODO: Arrays strings 

const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort());  //!WARNING !! МУТИРУЕТ - массив, класс  //result  ["Adam", "Jonas", "Martha", "Zach"]
console.log(owners); // ["Adam", "Jonas", "Martha", "Zach"]

console.log(movements);  //[200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movements.sort());   //![-130, -400, -650, 1300, 200, 3000, 450, 70] к строкам на основе

//TODO: ДЕЛАЕМ ВСЕ ПО ПОРЯДКУ, метод сортировки.
movements.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
});                            // [-130, -400, -650, 1300, 200, 3000, 450, 70]
console.log(movements);
//TODO: В обратную сторону.
movements.sort((a, b) => {
    if (a > b) return -1; // --------- -1
    if (a < b) return 1;  // ---------  1
});                           // [3000, 1300, 450, 200, 70, -130, -400, -650]
console.log(movements);
//---------------------------------------------------------------------------------------------------------
//TODO: STRING 
const strings = ["s", "f", "f", "e", "d", "a"];
console.log(strings.sort());  //["a", "d", "e", "f", "f", "s"]

strings.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;      // ["s", "f", "f", "e", "d", "a"]
});
console.log(strings);

//!
//!
//!                               FINAL METHOD от меньшего к большему. 
movements.sort((a, b) => a - b);
console.log(movements);
//!


//TODO:  sortirovka viborom grokaem 
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
        }
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

let testArray = [1, 5, 6, 8, 2, 4, 9, 0, 3, 7];

console.log(selectionSort(testArray));
//------------------------------------------------------


//TODO: rekursija 

function recursion(value) {
    console.log(value);
    if (value) {
        value--;
        recursion(value);   //! sama sebja zapuskaet poka ne vernetsja false.
    }
    return 'Выход из рекурсии';
}

console.log(recursion(10));

//TODO: Bistraja sort 
let testArray11 = [1, 4, 7, 8, 0, 2, 5, 6, 9, 10, 3];

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let index = Math.floor(arr.length / 2);
    let pivot = arr[index];
    let less = [];
    let greater = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= pivot && i !== index) {
            less.push(arr[i])
        }
        if (arr[i] > pivot && i !== index) {
            greater.push(arr[i])
        }
    }
    return quickSort(less).concat(pivot, quickSort(greater));
}

console.log(quickSort(testArray11));



//!
//!
//!          Array create ! 

console.log([1, 2, 3, 4, 5, 6, 7]);       //(7) [0, 1, 2, 3, 4, 5, 6, 7]
console.log(new Array(1, 2, 3, 4, 5, 6, 7));  // (7) [1, 2, 3, 4, 5, 6, 7]

const x = new Array(7);
console.log(x);         // [empty × 7]

//x.fill(1);
//console.log(x);       // [1, 1, 1, 1, 1, 1, 1]
x.fill(1, 3);  //! 1 arg = то что будет за цифра, 2 arg = с какой начать , 3 arg = где закончить. 
console.log(x);       // (7) [empty × 3, 1, 1, 1, 1]

//И снова он изменит исходный, и вы увидите, что мы поставили эти 23 в этих двух положениях. Итак, с четырех до шести.

const arr23 = [1, 2, 3, 4, 5, 6];

arr23.fill(23, 4, 6);
console.log(arr23); //[1, 2, 3, 4, 23, 23]

//TODO: The BEST variant

const y = Array.from({ length: 7 }, () => 1);    //! Создаем массив с (7) [1, 1, 1, 1, 1, 1, 1]
console.log(y);
//-----------------------
const z = Array.from({ length: 7 }, (cur, i) => i + 1);  // Или ( _ , i) => i + 1

console.log(z);  //(7) [1, 2, 3, 4, 5, 6, 7] 

// Теперь эта функция Array.from ()  изначально был введен в JavaScript
// для создания массивов из структур, подобных массиву.
// Итак, помните, как я раньше говорил о так называемых Iterables,
// такие вещи, как строки, карты или наборы,
// все они являются итерациями в JavaScript.
// И поэтому их можно преобразовать в реальные массивы используя Array.from().
// И это причина также названия функции, потому что мы можем создавать массивы из других вещей.
//!-----------------------------

// labelBalance.addEventListener('click', function () {
//     const movementsUI = Array.from(
//       document.querySelectorAll('.movements__value'),
//       el => Number(el.textContent.replace('€', ''))
//     );
//     console.log(movementsUI);

//     const movementsUI2 = [...document.querySelectorAll('.movements__value')];
//   });

// Итак, снова и когда мы щелкаем здесь, мы действительно получаем все числа что у нас здесь.
// Итак, подведем итоги. Мы использовали Array.from () для создания массива из
// результат querySelectorAll () который является NodeList, который на самом деле не является массивом,
// но массив как структура и этот массив как структура можно легко преобразовать в массив
// используя Array.from ().А затем в качестве второго шага мы даже включили функцию отображения,
// который затем формирует этот исходный массив в массив именно так, как мы этого хотим.
// Итак, в основном преобразование необработанного элемента в его текстовое содержимое


//! REDUCE ! 
const redStr = ["f", "f", "e", "a", "b"];
const numReduc = [1, 2, 5, 8, 7];

console.log(numReduc.reduce((acc, i) => acc + i));
console.log(redStr.reduce((acc, i) => acc + i));


