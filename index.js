// ex-1
// ****[Перепишите функцию, используя оператор '?' или '||'](https://learn.javascript.ru/function-basics#perepishite-funktsiyu-ispolzuya-operator-ili)****
// Следующая функция возвращает `true`, если параметр `age` больше `18`.
// В ином случае она задаёт вопрос `confirm` и возвращает его результат.
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

let message;
function checkAge(age) {
  return (message = age == 18 ? true : confirm("Родители разрешили?"));
}

// ex-2
// ### ****[Функция pow(x,n)](https://learn.javascript.ru/function-basics#funktsiya-pow-x-n)****
// Напишите функцию `pow(x,n)`, которая возвращает `x` в степени `n`. Иначе говоря, умножает `x` на себя `n` раз и возвращает результат.

// > pow(3, 2) = 3*3 = 9
// pow(3, 3) = 3*3*3 = 27
// pow(1, 100) = 1*1 * ...* 1 = 1
// >

function powerXN(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");
if (n >= 1) {
  console.log(powerXN(x, n));
  // alert(pow(x, n));
} else {
  alert("Use numbers more than 0");
}

//ex-3
// ### ****[Перепишите с использованием функции-стрелки](https://learn.javascript.ru/arrow-functions-basics#perepishite-s-ispolzovaniem-funktsii-strelki)****
// Замените код Function Expression стрелочной функцией:
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function () {
//     alert("Вы согласились.");
//   },
//   function () {
//     alert("Вы отменили выполнение.");
//   }
// );

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);


//ex-4
//Сортировать в порядке по убыванию https://learn.javascript.ru/array-methods#sortirovat-v-poryadke-po-ubyvaniyu
let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию
arr.sort((a, b) => b - a);
alert( arr ); // 8, 5, 2, 1, -10


//ex-5
// ### Т****[рансформировать в массив имён](https://learn.javascript.ru/array-methods#transformirovat-v-massiv-imyon)****
// У вас есть массив объектов `user`, и в каждом из них есть `user.name`. Напишите код, который преобразует их в массив имён.
// Например:
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];
let names = users.map(item => item.name);/* ... ваш код */
alert( names ); // Вася, Петя, Маша


// ex-6
// ### ****[Трансформировать в объекты](https://learn.javascript.ru/array-methods#transformirovat-v-obekty)****
// У вас есть массив объектов `user`, и у каждого из объектов есть `name`, `surname` и `id`.
// Напишите код, который создаст ещё один массив объектов с параметрами `id` и `fullName`, где `fullName` – состоит из `name` и `surname`.
// Например:
let vasya1 = { name: "Вася1", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя1", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша1", surname: "Петрова", id: 3 };

let users1 = [ vasya1, petya1, masha1 ];

let usersMapped = users.map(user => ({fullName: `${user.name} ${user.surname}`,
  id: user.id}));
  /* ... ваш код ... *//*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин
// Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка.


ex-7
// ### ****[Получить средний возраст](https://learn.javascript.ru/array-methods#poluchit-sredniy-vozrast)****
// Напишите функцию `getAverageAge(users)`, которая принимает массив объектов со свойством `age`и возвращает средний возраст.
// Формула вычисления среднего арифметического значения: `(age1 + age2 + ... + ageN) / N`.
// Например:
let vasya2 = { name: "Вася2", age: 25 };
let petya2 = { name: "Петя2", age: 30 };
let masha2 = { name: "Маша2", age: 29 };

let arr2 = [ vasya2, petya2, masha2 ];
//below is the solution - my code:
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
