"use strict";

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];
//TODO: 1 task.------------------------------------------------------------------------------------------
// const createUsernames = function (accs) {
//     accs.forEach(function (weight) {       //! acc - туда заходит  (первый эллемент)
//         weight.recommendedFoo = Math.trunc(weight.weight ** 0.75 * 28);
//         console.log(weight.recommendedFoo);
//     });
// };
// createUsernames(dogs);
// console.log(dogs);

//! 
//!Переберите массив, содержащий объекты собаки, и для каждой собаки вычислите рекомендуемую порцию корма и
//добавьте ее к объекту в качестве нового свойства.НЕ создавайте новый массив, просто переберите массив.
//Forumla: рекомендуетсяFood = вес ** 0, 75 * 28. 

dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);
//!-------------------------------------------------------------------------------------------------------


//TODO: 2 task.
//Найдите собаку Сары и войдите в консоль, независимо от того, ест она слишком много или слишком мало. 
//! V dogSarah - mi poluchim OBJECT return. esli on najdet (includes"Sarah") true i vernet vesj object ! 
const dogSarah = dogs.find(dog => dog.owners.includes("Sarah")); //dogSarah - OBJECT Sarah 
console.log(dogSarah);
console.log(`Saras dogs is eating too ${dogSarah.curFood > dogSarah.recFood ? "much" : "little"}`);
//  RESULT = Saras dogs is eating too much


//TODO: 3 task.
//Создайте массив, содержащий всех владельцев собак, которые слишком много едят («OwnersEatTooMuch»),
//и массив, содержащий всех владельцев собак, которые слишком мало едят(«OwnersEatTooLittle»)

const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recFood)
    .flatMap(dog => dog.owners);
// .flat();                          //! Toze samoe flatMap;
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recFood)
    .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

//!--------------------------------------------------------------------------------------------------------

//TODO: 4 task.
// "Matilda and Alice and Bob's dogs eat too much!"
//  "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join()} dogs eat too much! and ${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

//TODO: 5 task.

console.log(dogs.some(dog => dog.curFood === dog.recFood));  // result return = false

//TODO: 6 task.

// current > (recommended * 0.90) && current < (recommended * 1.10)
//Войдите в консоль, есть ли какая-нибудь собака, которая ест ОДОБРЕННОЕ количество еды (правда или ложь).
const checkEatingOkay = dog =>  //! FUNCION !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));
//result =  true


//TODO: 7 task. 
//Создайте массив, содержащий собак, которые едят ОЧЕРЕДНОЕ количество еды
//(попробуйте повторно использовать условие, используемое в 6.)
console.log(dogs.filter(checkEatingOkay));

//TODO:  8 task.
//
//Создайте неглубокую копию массива собак и отсортируйте ее по рекомендованной
//порции еды в возрастающем порядке(помните, что порции находятся внутри объектов массива)
// sort it by recommended food portion in an ascending order [1,2,3]
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
//но теперь у нас есть эти числа здесь, в объектах.
// Итак, теперь объекты a и b.
// Однако значения, которые мы хотим вычесть находятся в этих объектах, и мы можем просто
// вытащи их оттуда.Итак, мы хотим отсортировать по рекомендуемой порции еды.
// Итак, давайте просто сделаем это.
// Вот и все.Назовем это сортировкой вашей собаки.
// А затем давайте запишем это на консоль здесь.Собака отсортирована.Посмотрим, и да, это сработало.
