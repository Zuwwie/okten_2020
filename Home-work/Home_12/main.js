// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let dell = document.querySelector(`#text`);
let ell = function (sep) {
  return document.querySelector(`${sep}`);
};

/////////////////////////////////////////////////////////
let getSel = (sel) => document.querySelector(sel); // вивчити!!!
/////////////////////////////////////////////////////////

// console.log(dell);

dell.addEventListener(`click`, (ev) => {
  dell.style.display = `none`;
});

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

ell(`#dell`).addEventListener(`click`, (ev) => {
  ell(`#dell`).style.display = `none`;
});

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

document.forms.form.butt.addEventListener(`click`, (ev) => {
  let age = document.forms.form.age.value;
  console.log(age);
  if (age > 18) {
    alert(`Norm`);
  } else {
    alert(`smaal`);
  }
});

// - Создайте меню, которое раскрывается/сворачивается при клике

ell(`.menu`).addEventListener(`click`, (ev) => {
  if (ell(`.list`).style.display === `none`) {
    ell(`.list`).style.display = `block`;
  } else {
    ell(`.list`).style.display = `none`;
  }
});

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

const xxx = [
  { title: "lorem", body: "lorem ipsum dolo sit ameti" },
  { title: "lorem", body: "lorem ipsum dolo sit ameti" },
  { title: "lorem", body: "lorem ipsum dolo sit ameti" },
];

const div222 = document.createElement("div");
xxx.forEach((v) => {
  const p = document.createElement("p");
  p.className = "delete";
  p.innerHTML = v.title;
  p.innerHTML += `</div> <button type="button" id="cikk"> Click</button>`;
  div222.appendChild(p);
});

document.body.appendChild(div222);

let arr = document.body.childNodes;
console.log(arr);
arr.forEach((element) => {
  // console.log(element);
  if (element.nodeName === "#comment") {
    console.log(element);
    let div = document.createElement(`div`);
    document.body.append(div);
    document.write(
      `<div class = 'lol'>${element.data}  <button type="button" id="ci"> Click</button></div>`
    );
    ell(`#ci`).addEventListener(`click`, (ev) => {
      ell(`.lol`).style.display = `none`;
    });
  }
});

console.log(document.querySelectorAll(`#cikk`));

document.querySelectorAll(`#cikk`).forEach((element) => {
  element.addEventListener(`click`, (ev) => {
    console.log(ev);
    console.log(ev.path[1]);
    ev.path[1].style.display = `none`;
  });
});

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

ell(`#getInputValue`).addEventListener(`click`, (ev) => {
  console.log(document.forms.formOne.firstInput.value);
  console.log(document.forms.formTwo.secondInput.value);
});

// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

function tableGenerator(s, v, ell) {
  let createElement = document.createElement(`table`);
  let inner = ` `;
  for (let i = 0; i < s; i++) {
    inner += `<tr>`;
    for (let j = 0; j < v; j++) {
      inner += `<td>  ${ell}  </td>`;
    }
    inner += `</tr>`;
  }
  console.log(inner);
  createElement.innerHTML = inner;
  document.body.append(createElement);
}
tableGenerator(2, 10, `x`);

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

getSel(`#tableCreateBtn`).addEventListener(`click`, (ev) => {
  console.log(document.forms.tableCreate);
  let inp = document.forms.tableCreate;
  tableGenerator(inp[0].value, inp[1].value, inp[2].value);
});

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

let badword = [`blya`];

getSel(`#badWord`).addEventListener(`keyup`, (ev) => {
  // badword.forEach(element => {
  //     (element === getSel(`#badWord`).value) ? alert(`alooo`) : console.log(`x`);
  // });
  badword.indexOf(getSel(`#badWord`).value) !== -1 ? alert(`allo`) : ` `;
  console.log(getSel(`#badWord`).value);
});

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

getSel(`#badString`).addEventListener(`keyup`, (ev) => {
  badword.forEach((element) => {
    let str = getSel(`#badString`).value.toLowerCase();
    let x = str.match(element);
    if (x !== null) {
      alert(`aloooo`);
    }
  });
});

// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// -- взять массив пользователей
let usersWithAddress = [
  {
    id: 1,
    name: "vasya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 2,
    name: "petya",
    age: 30,
    status: true,
    address: { city: "Kyiv", street: "Shevchenko", number: 1 },
  },
  {
    id: 3,
    name: "kolya",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 121 },
  },
  {
    id: 4,
    name: "olya",
    age: 28,
    status: false,
    address: { city: "Ternopil", street: "Shevchenko", number: 90 },
  },
  {
    id: 5,
    name: "max",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 115 },
  },
  {
    id: 6,
    name: "anya",
    age: 31,
    status: false,
    address: { city: "Kyiv", street: "Shevchenko", number: 2 },
  },
  {
    id: 7,
    name: "oleg",
    age: 28,
    status: false,
    address: { city: "Ternopil", street: "Shevchenko", number: 22 },
  },
  {
    id: 8,
    name: "andrey",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 43 },
  },
  {
    id: 9,
    name: "masha",
    age: 30,
    status: true,
    address: { city: "Kyiv", street: "Shevchenko", number: 12 },
  },
  {
    id: 10,
    name: "olya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 11,
    name: "max",
    age: 31,
    status: true,
    address: { city: "Ternopil", street: "Shevchenko", number: 121 },
  },
];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
