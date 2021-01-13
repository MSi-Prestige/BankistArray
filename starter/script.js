'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
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

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


//TODO: 1.
const displayMovements = function (movements, sort = false) {
  // очищаем html 2 записи
  containerMovements.innerHTML = "";
  //как в pig .textContent = 0;

  //TODO: 1.1 еще мы тут сортируем все платежи. sort - false
  //но сорт упарядочит и главный массив ! не подходит
  //! Поэтому мы берем метод slice !
  //И это одна из таких ситуаций то, о чем я говорил вам раньше,где нам нужно создать копию
  //с использованием метода среза, а не оператора распространения.Потому что здесь мы находимся в середине цепочки,
  //и поэтому мы хотим продолжить после этого.И поэтому лучше просто использовать метод здесь

  const movsSort = sort ? movements.slice().sort((a, b) => a - b) : movements;



  movsSort.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    // СОЗДАЛИ строку
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>`;
    //
    containerMovements.insertAdjacentHTML("afterbegin", html);     //afterbegin новый на верху ! 
  });                                      //beforeend и еще 2 есть. 
};


// console.log(containerMovements.innerHTML);   можно посмотреть что мы создали displayMovements


//TODO: 2. Это вариант без функции - не совсем нам идет.

// const user = "Steven Thomas Williams";  // stw   - lowerCase
// const userName = user.toLowerCase().split(" ");        //result = (3) ["steven", "thomas", "williams"]

// а затем возьмите первую букву на каждой итерации, и добавляем их в новый массив.
// А потом, в конце концов, мы присоединимся к этому массиву, и в итоге мы получим всего лишь строку stw.
// map

// const simbolOne = userName.map(function (name) {
//   return name[0];  // [s, t, w]
// }).join("");     //  stw


// console.log(simbolOne);
// console.log(userName);

//! -------- СЛОЖНЕЕ ВАРИАНТ ------------ Jonas  

// const user2 = "Steven Thomas Williams";  // stw   - lowerCase
// const userName2 = user2.toLowerCase().split(" ").map(function (name) {
//   return name[0];
// }).join("");
// console.log(userName2);
//! --------------------------------------------
//? Упрощение в стрелочную 
//? const user2 = "Steven Thomas Williams";  // stw   - lowerCase
//? const userName2 = user2.toLowerCase().split(" ").map(name => name[0].join("");


//TODO: 3 - делаем функцию . 
//Принимает строку
// const createUsernames3 = function (user) { //"Steven Thomas Williams"
//   const username = user        //"Steven Thomas Williams"
//     .toLowerCase()             //"steven thomas williams"
//     .split(" ")                //! Уже массив ["steven", "thomas", "williams"]
//     .map(names => names[0])    // (3) ["s", "t", "w"]
//     .join("");                  // "stw"

//   return username;      //что бы увидеть 
// };

// createUsernames3(accounts);
//------------------------------------------------------------------------------
//TODO: 3.1  функция для всех ! создаем ИНИЦИАЛЫ
// и теперь мы будем передавать массив с пользователями ! 


const createUsernames = function (accs) {
  accs.forEach(function (acc) {       //! acc - туда заходит Имя и фам (первый эллемент)
    acc.username = acc.owner          //! username это как новая переменная
      .toLowerCase()             //
      .split(" ")                //
      .map(names => names[0])    // (3) ["s", "t", "w"]
      .join("");                 // "stw"
    console.log(acc.username);   // js   jd  stw  ss
  });
};
createUsernames(accounts);
//result : 0: {owner: "Jonas Schmedtmann", movements: Array(8), interestRate: 1.2, pin: 1111, username: "js"}
// пример использования метода карты, который был идеальным,
// потому что это позволило нам создать новый простой массив,
// который содержит только инициалы любого имени
// createUsernames(accounts);
// console.log(accounts);


//TODO : 4. функция для общей суммы денег.
//! acc = object (accaunt1,2,3,4)   in hipp
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance}€`;                       //! KAK BI RETURN V HTML 
};



//TODO: 5. функция для трех сумм денег внизу . IN  OUT ITEREST 

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);  //! IN 5000....
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);    //! OUT -1180....
  labelSumOut.textContent = `${Math.abs(out)}€`;  // убераем знак - перед цифрами


  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * acc.interestRate / 100)
    //! Это как дополнительное - что бы проценты начисляли если процент больше 1 евро
    // Итак, давайте добавим здесь в цепочку новый метод между map и reduce.
    // И это будет фильтр потому что мы в основном хотим исключить интересы ниже единицы.
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    //Итак, вы видите, что сейчас interest немного снизился.и это потому, что действительно
    //здесь, в этом массиве interest, у нас есть одно значение ниже единицы. Итак, это 0.84, и поэтому он будет
    //отфильтрован  (5) [2.4, 5.4, 36, 0.84, 15.6]
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;  // % от банка

};

// calcDisplaySummary(account1.movements);

//TODO: Method FIND

// const account = accounts.find(acc => acc.owner === "Jessica Davis");
// console.log(account);

//TODO: 6 Event Listener - PIN LOGIN 
let currentAccount;

const updateUI = function (acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
}

btnLogin.addEventListener("click", function (e) {
  e.preventDefault(); //И как следует из названия, это предотвратит эту форму от отправки. запретите отправку формы.
  // ENTER тоже как мышка.
  //!
  //!  ССЫЛКА НА ОБЬЕКТ В КУЧЕ ! currentAccount - variable
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);//читываем значение из поля ввода.
  //!  username - был создан в обьекте - методом .
  //{owner: "Jonas Schmedtmann", movements: Array(8), interestRate: 1.2, pin: 1111, username: "js"}
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {       // ? проверка есть ли acc такой вообще

    //Display UI and message 
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}`; // выводим имя приветствия.
    containerApp.style.opacity = 100; // Делаем не прозрачным контент. 


    // Очистим поля LOGIN USER 
    inputLoginUsername.value = inputLoginPin.value = "";    //! стираем на пустую строку. 
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

//TODO:  7 перевод денег .
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  //! receiverAcc =  accounts = [account1, account2, account3, account4]; ищем среди них - acc принимает каждый раз 
  //! по одному и сравнивает с тем что ввел пользователь. 
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  // console.log(amount, receiverAcc);

  inputTransferAmount.value = inputTransferTo.value = "";
  // количество больше 0 и текущ баланс  больше чем денег на счету , и что сами себе не переводим 
  if (amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {

    currentAccount.movements.push(-amount);  //тут минус со счета своего
    receiverAcc.movements.push(amount);  // тут + другому. 
    updateUI(currentAccount);
  }
});

//TODO: 8 Закрытие счета.

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  // Итак, да, первое, что нам нужно сделать, - проверить правильность учетных данных.
  // В общем, если здесь введено имя пользователя, равно текущему пользователю и одинаково для пина.

  if (currentAccount.username === inputCloseUsername.value && Number(inputClosePin.value) === currentAccount.pin) {

    //и мы удалим ровно один элемент, понятно? И тогда метод сращивания фактически мутирует сам базовый массив,
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    //delete account
    inputCloseUsername.value = inputClosePin.value = "";
    console.log(index);
    accounts.splice(index, 1);
    // Итак, как и раньше, в find мы перешли в условие
    // так что что-то, что вернет либо истину, либо ложь. Затем метод findIndex вернет индекс
    // первого элемента в массиве что соответствует этому условию.
    // Итак, для чего это условие здесь возвращает true. Опять же, аналогично find, но возвращает индекс,

    //! ПОСЛЕ УДАЛЕНИЯ СПРЯТАТЬ UI 
    containerApp.style.opacity = 0;
  }

});

//TODO: 9 запрос кредита: 

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {

    //add movement;
    currentAccount.movements.push(amount);
    //Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";

});

//TODO: SORT 
let sorted = false; // память сортировки
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});