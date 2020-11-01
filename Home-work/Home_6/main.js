// -створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// let arr = [`123`, `1234`, `ksnnn`, `allo`, `mam`];
// console.log(arr);

// let arr = [1, `123`, true, false, `karina`];
// console.log(arr);

// let arr = [];
// arr.push(123);
// arr.push(`lool`);
// arr.push(false);
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div> lool ${i} </div>`)

// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arr = [1, 2, 3, `123`, `456`, `lool`, false, true];

// for (const iterator of arr) {
//     console.log(iterator);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// for (const iterator of arr) {
//     if (typeof iterator === `boolean`) {
//     console.log(iterator);
//     }
// };

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// for (const i of arr) {
//   if (typeof i === `number`) {
//       console.log(i);
//   }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// for (const i of arr) {
//     if (typeof i === `string`) {
//         console.log(i);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arr = [];

// arr[0] = false;
// arr[1] = 123;
// arr[2] = `1234`;
// arr[3] = 11;
// arr[4] = 22;
// arr[5] = `lool`;
// arr[6] = `false`;
// arr[7] = true;
// arr[8] = `kill`;
// arr[9] = null;

// for (const i of arr) {
//     console.log(i);
// }
// console.log(arr);

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(`number ${i}`);
// };

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(`number ${i}`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i <= 100; i += 2) {
//     console.log(`number ${i}`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(`number ${i}`);
//   }
// };

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//       console.log(`number ${i}`);
//     }
//   };


// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// https://github.com/Zuwwie/Clock-StopWatch-Timer-Zuwwie

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let arr = [ 'a', 'b', 'c'];
let rez = ``;
for (let i = 0; i < arr.length; i++){
     rez +=  arr[i]
}
let i = 0;
while (i<arr.length) {
    rez += arr[i]
    i++;
}

for (const i of arr) {
    rez += i
}


console.log(rez);