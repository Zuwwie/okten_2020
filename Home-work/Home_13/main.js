// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// console.log(document.getElementById(`someTxt`));

// // // let item = localStorage.getItem('car');

document.getElementById(`someTxt`).value = localStorage.getItem("value");

document.getElementById(`someTxt`).addEventListener(`keyup`, (ev) => {
  let x = document.getElementById(`someTxt`).value;
  localStorage.setItem("value", x);
});

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

// someUser

document.forms.someUser.addEventListener(`click`, (ev) => {
  let arr = [];
  for (let i = 0; i < document.forms.someUser.length; i++) {
    console.log(document.forms.someUser[i]);
    if (
      document.forms.someUser[i].type === `text` ||
      document.forms.someUser[i].className === `text`
    ) {
      arr.push(document.forms.someUser[i].value);
    } else {
      document.forms.someUser[i].checked ? arr.push(1) : arr.push(0);
    }
  }
  console.log(arr);
  localStorage.setItem("input", [arr]);
});

// let input = localStorage.getItem(`input`);
// input = input.split(",");

// console.log(input);
for (let i = 0; i < document.forms.someUser.length; i++) {
  //   console.log(document.forms.someUser[i]);
  if (
    document.forms.someUser[i].type === `text` ||
    document.forms.someUser[i].className === `text`
  ) {
    // document.forms.someUser[i].value = input[i];
  }
//   if (input[i] == 1) {
    // document.forms.someUser[i].checked = true;
  }
// }

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).

// document.getElementById(`save`).addEventListener(`click`, (ev) => {
//   let x = document.getElementById(`history`).value;
// });

// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).


const text = document.getElementById("history");
const arrow_left = document.getElementById("arr_left");
const arrow_right = document.getElementById("arr_right");
const save = document.getElementById("save");

console.log(localStorage);
// for (const key in localStorage) {console.log(key);}




save.onclick = () => {
	localStorage.setItem(localStorage.length + 1, text.value)
};
arrow_left.onclick = () =>{
	arrow_right.style.visibility = 'visible';
	let index;
	for (const key in localStorage) {
		if(localStorage.hasOwnProperty(key)){
           
            index = key;
                
		}
	}
	if (index === '1'){
		arrow_left.style.visibility = 'hidden';
		return;
	}
	text.value = localStorage.getItem(index - 1);
}
arrow_right.onclick = ()=>{
	arrow_left.style.visibility = 'visible';
	let index;
	for (const key in localStorage) {
		if (localStorage.hasOwnProperty(key)){
			if(localStorage.getItem(key) === text.value){
				index = key;
			}
		}

	}
	if (index === localStorage.length.toString()){
		arrow_right.style.visibility = 'hidden';
		return;
	}
	text.value = localStorage.getItem(+index + 1);
}


// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

