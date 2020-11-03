// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

let dog = {
    name: `Topic`,
    age:   12,
    host: `Ostap`,
    children: false,
    street: `Dovbusha 42`
};
let ostap = {
    name: `Ostap`,
    age: 22,
    sex: `male`,
    dog: true,
    car: `bmw`
};
let car = {
    owner: `Ostap`,
    company: `BMW`,
    year: 2020,
    color: `red`,
    vin: `iu21yhh1j11129008`
};
let apartaments = {
    street: `Dovbusha`,
    number: 42,
    floor: 5,
    room_number: 30,
    bedroom: 3
};
let book = {
    name: `Killer`,
    numberOfPage: 305,
    them:  `adventure`,
    author: `D. Defoe`,
    written: `1719`
};

// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

let dogs = [`Berta`, `Topik`, `Leleka`, `Manya`, `Zero`];
console.log(dogs);

let people = [`Nazar`, `Ostap`, `Vova`, `Iryna`, `Oksana`];
console.log(people);

let cars = [`BMW`, `Mers`, `Renault`, `Nisan`, `VW`];
console.log(cars);

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок


let house = {
    street: `Dovbusha`,
    roomsOnFloor: {
        first: 23,
        second: 44
    },
    floor: 5,
    bedroom: 3,
    firstFloor: [`bedroom x5`, `kitchen x2`, `toilet x3`]
};

// Дан массив:
let users = [
				{name: 'vasya', age: 31, status: false},
				{name: 'petya', age: 30, status: true},
				{name: 'kolya', age: 29, status: true},
				{name: 'olya', age: 28, status: false},
				{name: 'max', age: 30, status: true},
				{name: 'anya', age: 31, status: false},
				{name: 'oleg', age: 28, status: false},
				{name: 'andrey', age: 29, status: true},
				{name: 'masha', age: 30, status: true},
				{name: 'olya', age: 31, status: false},
				{name: 'max', age: 31, status: true}
			];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни

console.log(users[0].status);
console.log(users[4].status);
console.log(users[9].name);
console.log(users[3].name);
console.log(users[6].age);
console.log(users[9].age);
console.log(users[5].age + ` ` + users[5].name);
console.log(users[5].age +` `+ users[5].status);

