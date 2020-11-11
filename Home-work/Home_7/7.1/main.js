// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

let dog = {
  age: 12,
  host: `Ostap`,
  children: false,
};
let ostap = {
  name: `Ostap`,
  age: 22,
  dog: true,
};
let car = {
  owner: `Ostap`,
  company: `BMW`,
  year: 2020,
  color: `red`,
};
let apartaments = {
  street: `Dovbusha`,
  number: 42,
  floor: 5,
  room_number: 30,
  bedroom: 3,
};
let book = {
  name: `Killer`,
  numberOfPage: 305,
  them: `adventure`,
  author: `D. Defoe`,
  written: `1719`,
};

//     - взять объекты из задания 1 и превратить каждый в json.

let s0 = JSON.stringify(dog);
let s1 = JSON.stringify(ostap);
let s2 = JSON.stringify(car);
let s3 = JSON.stringify(apartaments);
let s4 = JSON.stringify(book);

// console.log(s0);
// console.log(s1);
// console.log(s2);
// console.log(s3);
// console.log(s4);

// - взять json из задания 11 и превратить их обратно в объекты.

// console.log(JSON.parse(s0));
// console.log(JSON.parse(s1));
// console.log(JSON.parse(s2));
// console.log(JSON.parse(s3));
// console.log(JSON.parse(s4));

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

// car = [{ name: `bmw`, year: 2000 }, {name: `opel`, year: 2008}, {name: `renault`, year: 2020}];

// console.log(car);

// for (let i = 0; i < car.length; i++) {
//        console.log(car[i]);
//         car[i] = JSON.stringify(car[i])
// }

// console.log(car);

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// carJ = [];

// for (let i = 0; i < car.length; i++) {
//         carJ.push(JSON.stringify(car[i]) )
// }

// console.log(carJ);

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

// let user = [{ name: `Vova`, year: 2000, skills: [`js`] }, {name: `Vasya`, year: 2008, skills: [`js`, `css`]}, {name: `Rostik`, year: 2020, skills: [`js`, `c++`, `pytone`]}];

// let allSkils = [];

// for (let i = 0; i < user.length; i++) {
//         console.log(user[i].skills);
//         for (let j = 0; j < user[i].skills.length; j++) {
//                console.log(user[i].skills[j]);
//                 allSkils.push(user[i].skills[j])
//         }
//         console.log(allSkils);
// }

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.

// let users = [
//   { name: "vasya", age: 31, status: false, skills: ["java", "js"] },
//   { name: "petya", age: 30, status: true, skills: ["java", "js", "html"] },
//   { name: "kolya", age: 29, status: true, skills: ["mysql", "mongo"] },
//   { name: "olya", age: 28, status: false, skills: ["java", "js"] },
//   { name: "max", age: 30, status: true, skills: ["mysql", "mongo"] },
// ];

// users.forEach(element => {
//         console.log(element);
//         for (let i = 0; i < element.skills.length; i++) {
//                 console.log(element.skills[i]);

//         }
// });

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам.

let users = [
  {
    name: "vasya",
    age: 31,
    status: false,
    address: {
      city: "Lviv",
      country: "Ukraine",
      street: "Shevchenko",
      houseNumber: 1,
    },
  },
  {
    name: "petya",
    age: 30,
    status: true,
    address: {
      city: "New York",
      country: "USA",
      street: "East str",
      houseNumber: 21,
    },
  },
  {
    name: "kolya",
    age: 29,
    status: true,
    address: {
      city: "Budapest",
      country: "Hungary",
      street: "Kuraku",
      houseNumber: 78,
    },
  },
  {
    name: "olya",
    age: 28,
    status: false,
    address: {
      city: "Prague",
      country: "Czech",
      street: "Paster",
      houseNumber: 56,
    },
  },
  {
    name: "max",
    age: 30,
    status: true,
    address: {
      city: "Istanbul",
      country: "Turkey",
      street: "Mikar",
      houseNumber: 39,
    },
  },
  {
    name: "anya",
    age: 31,
    status: false,
    address: {
      city: "Rio",
      country: "Brasil",
      street: "Ronaldi",
      houseNumber: 5,
    },
  },
  {
    name: "oleg",
    age: 28,
    status: false,
    address: {
      city: "Montreal",
      country: "Canada",
      street: "Acusto",
      houseNumber: 90,
    },
  },
  {
    name: "andrey",
    age: 29,
    status: true,
    address: {
      city: "Quebeck",
      country: "Canada",
      street: "Binaro",
      houseNumber: 33,
    },
  },
  {
    name: "masha",
    age: 30,
    status: true,
    address: {
      city: "Moscow",
      country: "Russia",
      street: "Gogolia",
      houseNumber: 1,
    },
  },
  {
    name: "olya",
    age: 31,
    status: false,
    address: {
      city: "Portland",
      country: "USA",
      street: "Forest str",
      houseNumber: 4,
    },
  },
  {
    name: "max",
    age: 31,
    status: true,
    address: {
      city: "Cairo",
      country: "Egypt",
      street: "Seashore",
      houseNumber: 45,
    },
  },
];

// let userAdress = [];

// users.forEach(element => {
//        let x = element.address
//        console.log(`${x.country} - ${x.city} - ${x.street}: ${x.houseNumber}  `);
//        userAdress.push(element.address)
// });
// console.log(userAdress);

// users.forEach(element => {
//        let x = element.address

//         let div = document.createElement('div');
//         div.innerText = `${element.name}   ${element.age}   ${element.status}  ${x.country} - ${x.city} - ${x.street}: ${x.houseNumber}  `
//         console.log(element);
//         document.body.append(div);
// });

// users.forEach(element => {
//   let x = element.address

//    let div = document.createElement('div');
//    div.innerHTML = `<div> ${element.name} </div> <div> ${element.age} </div> <div>  ${element.status} </div> <div> ${x.country} - ${x.city} - ${x.street}: ${x.houseNumber}  `
//    console.log(element);
//    document.body.append(div);
// });

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
  { id: 1, name: "vasya", age: 31, status: false },
  { id: 2, name: "petya", age: 30, status: true },
  { id: 3, name: "kolya", age: 29, status: true },
  { id: 4, name: "olya", age: 28, status: false },
];
let citiesWithId = [
  { user_id: 3, country: "USA", city: "Portland" },
  { user_id: 1, country: "Ukraine", city: "Ternopil" },
  { user_id: 2, country: "Poland", city: "Krakow" },
  { user_id: 4, country: "USA", city: "Miami" },
];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив

// let userCity = [];

// for (let i = 0; i < usersWithId.length; i++) {
//   let xUser = [];
//     for (let j = 0; j < citiesWithId.length; j++) {
//     if(usersWithId[i].id  === citiesWithId[j].user_id ) {
//      xUser = Object.assign(usersWithId[i],citiesWithId[j]);
//     }
//     }
//   console.log(xUser);
//   userCity.push(xUser)
// }
// console.log(userCity);



