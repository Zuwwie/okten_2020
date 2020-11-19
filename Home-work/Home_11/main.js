// - создать массив с 20 числами.
let arr = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  44,
  20,
];

// -- при помощи метода sort и колбека  отсортировать массив.
// arr.sort(function (a, b) {
//   return a - b;
// });
// console.log(arr);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

// arr.sort(function (a, b) {
//     return b - a;
//   });
//   console.log(arr);

// -- при помощи filter получить числа кратные 3

// arr.filter(num => num%3===0 && num !==0? console.log(num): ``);

// -- при помощи filter получить числа кратные 10
// arr.filter(num => num%10==0 && num !==0 ? console.log(num): ``)

// -- перебрать (проитерировать) массив при помощи foreach()

// arr.forEach(element => {
//     console.log(element);
// });

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let newArr =  arr.map(n =>n*3);
// console.log(newArr);

// - создать массив со словами на 15-20 элементов.

let word = [
  `Вася`,
  `Оля`,
  `Наятя`,
  `Віка`,
  `Маріна`,
  `Костя`,
  `Назар`,
  `Олександр`,
  `Льоня`,
  `Паша`,
  `Марта`,
  `Василь`,
  `Маркіз`,
  `Андрій`,
  `Оксана`,
  `Міша`,
  `Віктор`,
];

// -- отсортировать его по алфавиту в восходящем порядке.
console.log(word.sort());

// -- отсортировать его по алфавиту  в нисходящем порядке.
console.log(word.reverse());

// -- отфильтровать слова длиной менее 4х символов

word.map((word) => (word.length > 4 ? console.log(word) : ``));
console.log(word.filter((word) => word.length > 4));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

let newWord = word.map((word) => word + `!`);
console.log(newWord);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [
  { name: "vasya", age: 31, status: false },
  { name: "petya", age: 30, status: true },
  { name: "kolya", age: 29, status: true },
  { name: "olya", age: 28, status: false },
  { name: "max", age: 30, status: true },
  { name: "anya", age: 31, status: false },
  { name: "oleg", age: 28, status: false },
  { name: "andrey", age: 29, status: true },
  { name: "masha", age: 30, status: true },
  { name: "olya", age: 31, status: false },
  { name: "max", age: 31, status: true },
];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
console.log(users.sort((a, b) => a.age - b.age));

console.log(users.sort((a, b) => b.age - a.age));

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

console.log(users.sort((a, b) => a.name.length - b.name.length));

console.log(users.sort((a, b) => b.name.length - a.name.length));

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
let newUsers = JSON.stringify(users);
newUsers = JSON.parse(newUsers);
newUsers.map((user, ind) => (user.id = 100 - ind));
console.log(newUsers);

// - відсортувати його за індентифікатором

console.log(newUsers.sort((a, b) => a.id - b.id));


// -- наисать функцию калькулятора с 2мя числами и колбеком

// -- наисать функцию калькулятора с 3мя числами и колбеком
