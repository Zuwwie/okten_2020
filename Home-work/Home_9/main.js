// ==============================================
// 	-  Створити функцію конструктор для об'єкту який описує теги

// function Tag(titleOfTag,action,attrs) {
// 	this.titleoftag = titleOfTag;
// 	this.action = action;
// 	this.attrs = attrs;
// }
// let title = "<a>";
// let action = "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.";
// let atribytes = [
// 	{titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
// 	{titleOfAttr: "coords", actionOfAttr: 'Устанавливает координаты активной области.'},
// 	{titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
// ];
// let a = new Tag(title,action,atribytes);
// console.log(a);

// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
// 	titleOfTag: 'area',
// 		action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
// 	attrs: [
// 	{titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
// 	{/*some props and values*/},
// 	{/*...*/},
// 	{/*...*/},
// ]
//
// }
// ==============================================
//
//
// ==============================================
// 	-  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
// 	titleOfTag: 'area',
// 		action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
// 	attrs: [
// 	{titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
// 	{/*some props and values*/},
// 	{/*...*/},
// 	{/*...*/},
// ]
// class Tag {
// 	constructor(titleOfTag,action,attrs){
// 	this.titleoftag = titleOfTag;
// 	this.action = action;
// 	this.attrs = attrs;
// 	}
// }
// let title = "<a>";
// let action = "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.";
// let atribytes = [
// 	{titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
// 	{titleOfAttr: "coords", actionOfAttr: 'Устанавливает координаты активной области.'},
// 	{titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
// ];
// let a = new Tag(title,action,atribytes);
// console.log(a);

//
// }
// ==============================================
//
//
//
// ==============================================
// 	- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//

// let car = {
// 	model: "Cybertruck",
// 	manufacturer:"Tesla",
// 	year:2020,
// 	maxSpeed: 177,
// 	volumeEngine:"just electrick",
// 	shasher:"auto-pilot",
// 	drive: function (){
// 		console.log(`Їдемо із швидкістю ${this.maxSpeed} на годину`);
// 	},
// 	info: function () {
// 		console.log(`
// 			model : ${this.model}
// 			manufacturer : ${this.manufacturer}
// 			year : ${this.year}
// 			maxSpeed : ${this.maxSpeed}
// 			volumeEngine : ${this.volumeEngine}
// 			shasher : ${this.shasher},
// 		`);
// 	},
// 	increaseMaxSpeed: function (newSpeed){
// 		this.maxSpeed += newSpeed;
// 	},
// 	changeYear: function (newValue){
// 		this.year = newValue;
// 	},
// 	addDriver: function (driver){
// 		this.shasher = driver;
// 	}
//
// };
//
// let driver = {
// 	name:"Ivan Petrovich",
// 	age : 45
// };
//
// car.info();
// car.changeYear(2021);
// car.addDriver("elon");
// car.increaseMaxSpeed(100);
// car.info();
//
// ==============================================
// 	- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// function construct (model,
// 				   manufacturer,
// 				   year,
// 				   maxSpeed,
// 				   volumeEngine,
// 				   shasher) {
// 	this.model = model;
// 	this.manufacturer = manufacturer;
// 	this.year = year;
// 	this.maxSpeed = maxSpeed;
// 	this.volumeEngine = volumeEngine;
// 	// this.shasher = shasher;
// 	this.driver = function (){
// 		console.log(`Їдемо із швидкістю ${this.maxSpeed} на годину`);
// 	};
// 	this.info = function ()
// 	{
// 		console.log(`
// 			model : ${this.model}
// 			manufacturer : ${this.manufacturer}
// 			year : ${this.year}
// 			maxSpeed : ${this.maxSpeed}
// 			volumeEngine : ${this.volumeEngine}
// 			shasher : ${this.shasher},
// 		`);
// 	};
// 	this.increaseMaxSpeed = function (newSpeed){
// 		this.maxSpeed += newSpeed;
// 	};
// 	this.changeYear = function (newValue){
// 		this.year = newValue;
// 	};
// 	this.addDriver = function (driver){
// 		this.shasher = driver;
// 	};
// };
// let car = {
// 	model: "Cybertruck",
// 	manufacturer:"Tesla",
// 	year:2020,
// 	maxSpeed: 177,
// 	volumeEngine:"just electrick",
// 	shasher:"auto-pilot",
// 	drive: function (){
// 		console.log(`Їдемо із швидкістю ${this.maxSpeed} на годину`);
// 	},
// 	info: function () {
// 		console.log(`
// 			model : ${this.model}
// 			manufacturer : ${this.manufacturer}
// 			year : ${this.year}
// 			maxSpeed : ${this.maxSpeed}
// 			volumeEngine : ${this.volumeEngine}
// 			shasher : ${this.shasher},
// 		`);
// 	},
// 	increaseMaxSpeed: function (newSpeed){
// 		this.maxSpeed += newSpeed;
// 	},
// 	changeYear: function (newValue){
// 		this.year = newValue;
// 	},
// 	addDriver: function (driver){
// 		this.shasher = driver;
// 	}
//
// };
//
// let driver = {
// 	name:"Ivan Petrovich",
// 	age : 45
// };
// ==============================================
// 	- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
class Construct {
  constructor(model, manufacturer, year, maxSpeed, volumeEngine, shasher) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volumeEngine = volumeEngine;
  }
  // this.shasher = shasher;
  driver() {
    console.log(`Їдемо із швидкістю ${this.maxSpeed} на годину`);
  }
  info() {
    console.log(`
			model : ${this.model}
			manufacturer : ${this.manufacturer}
			year : ${this.year}
			maxSpeed : ${this.maxSpeed}
			volumeEngine : ${this.volumeEngine}
			shasher : ${this.shasher},
		`);
  }
  increaseMaxSpeed(newSpeed) {
    this.maxSpeed += newSpeed;
  }
  changeYear(newValue) {
    this.year = newValue;
  }
  addDriver(driver) {
    this.shasher = driver;
  }
}
