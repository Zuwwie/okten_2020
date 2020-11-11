let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// - створити функцію яка виводить масив

let arrConsole = function (arr) {
  arr.forEach((element) => {
    console.log(element);
  });
};
// arrConsole(arr);

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

let arrRandom = function (x = 10) {
  arr = [];
  for (let i = 0; i < x; i++) {
    arr.push(Math.round(Math.random() * 100));
  }
  arrConsole(arr);
};
// arrRandom()

// - створити функцію яка приймає три числа та виводить та повертає найменьше.

function minNumber(a, b, c) {
  if (a < b && a < c) {
    return console.log(a);
  }
  if (b < a && b < c) {
    return console.log(b);
  }
  return console.log(c);
}

// minNumber(9,4,6);

// - створити функцію яка приймає три числа та виводить та повертає найбільше.

function maxNumber(a, b, c) {
  if (a > b && a > b) {
    return console.log(a);
  }
  if (b > a && b > c) {
    return console.log(b);
  }
  return console.log(c);
}

// maxNumber(4,6,8)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

function numberFocus(...arg) {
  let max = arr[0];
  let min = arr[0];
  arg.forEach((element) => {
    if (element > max) {
      max = element;
    }
    if (element < min) {
      min = element;
    }
  });
  console.log(max);
  return min;
}

// numberFocus(2,3,5,7,8,11);

// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка повертає найменьше число з масиву
function arrCall(arr) {
  let min = arr[0];
  let max = arr[0];
  arr.forEach((element) => {
    if (element > max) {
      max = element;
    }
    if (element < min) {
      min = element;
    }
  });
  console.log(min);
  console.log(max);
  return min, max;
}

// arrCall(arr)

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

function sum(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  console.log(sum);
  return sum;
}

// sum(arr);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function middleNumber(arr) {
  let rez = 0;
  arr.forEach((element) => {
    rez += element;
  });
  rez = rez / arr.length;
  console.log(rez);
  return rez;
}

// middleNumber(arr,arr.length);

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

let usersWithId = [
  { id: 1, name: "vasya", age: 31, status: false },
  { id: 2, name: "petya", age: 30, status: true },
  { id: 3, name: "kolya", age: 29, status: true },
  { id: 4, name: "olya", age: 28, status: false },
  4,
];

function anyNumber(arr) {
  let rez = 0;
  arr.forEach((element) => {
    if (typeof element === `object`) {
      rez++;
    }
  });
  console.log(rez);
  return rez;
}

// anyNumber(usersWithId)

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

let usersWithId2 = [
  { id: 1, name: "vasya", age: 31, status: false },
  { id: 2, name: "petya", age: 30, status: true },
  { id: 3, name: "kolya", age: 29, status: true },
  { id: 4, name: "olya", age: 28, status: false },
];

function muchNumber(arr) {
  let rez = 0;
  arr.forEach((element) => {
    if (typeof element === `object`) {
      // console.log(element);
      for (const key in element) {
        rez++;
      }
    }
  });
  console.log(rez);
  return rez;
}

// muchNumber(usersWithId2);

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

function parse(arrA, arrB) {
  let rez = [];
  if (arrA.length === arrB.length) {
    for (let i = 0; i < arrA.length; i++) {
      rez[i] = arrA[i] + arrB[i];
    }
  }
  console.log(rez);
  return rez;
}

// parse(arr1, arr2);

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

function replace(arr, i) {
  let z = arr[i];
  arr[i] = arr[i + 1];
  arr[i + 1] = z;
  console.log(arr);
}

// replace(arr, 3);

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// ************* не змінюючи індексів не 0 значень *****************
// arr3 = [0,2,1,2,3,4,5,0,7,0,0];

// function dellZero(arr) {
//     lastZero = true;
//     console.log(arr);
//     for (let i = arr.length-1; i >= 0; i--) {
//         if (arr[i] === 0 && lastZero === false) {
//             delete arr[i]
//             arr.push(0)
//         }
//         if (arr[i] === 0 && lastZero) {
//             if (arr[i-1] !== 0) {
//                 lastZero = false;
//             }
//         }
//     }
//     console.log(arr);
// }

// dellZero(arr3);

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.

car = [
  { name: `bmw`, year: 2000 },
  { name: `opel`, year: 2008 },
  { name: `renault`, year: 2020 },
];

function owu(arrCars, i) {
  document.write(`<p>Hello owu</p>`);
}

owu();
