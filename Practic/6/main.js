// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.


// let arr = ['a', 'b', 'c'];
// for (let i = 1; i <= 3; i++) {
//     arr.push(i)
// }
// console.log(arr);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

// let arr = [1, 2, 3];
// arr = [3, 2, 1];


// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// let arr = [1, 2, 3];
// arr.push(4,5,6)

// console.log(arr);


// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let arr = [1, 2, 3];

// arr.unshift(4,5,6);


// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

// let arr = ['js', 'css', 'jq'];
// console.log(arr.shift());


// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()


// let arr = ['js', 'css', 'jq'];
// console.log(arr.pop());

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(3,5));

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(0,2));

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1,1);
// arr.splice(1,1);
// console.log(arr);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let arr = [1, 2, 3, 4, 5];
// for(let i =0;i<3;i++) {
//     let z;
// if(i==0){
//     z=`c`
// }
// if(i==1){
//     z=`b`
// }
// if(i==2){
//     z=`a`
// }
//     arr.splice(3,0,z);
// }

// console.log(arr);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let arr = [1, 2, 3, 4, 5];

// arr.splice(1,0,`a`)
// arr.splice(2,0,`b`)
// arr.splice(6,0,`c`)
// arr.splice(8,0,`e`)


// console.log(arr);


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i=0; i<arr.length; i++) {
//     if(!arr[i]%2) {
//         console.log(arr[i]);
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

// let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let copyArr = [];

// for (let i = 0; i < arr.length; i++) {
//     copyArr.push(arr[i])
    
// }
// console.log(copyArr);


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let copyArr = [];

// for (let i = 0; i < arr.length; i++) {
//     copyArr[i] = arr[i]
// }
// console.log(copyArr);


// 1 створити пустий масив та :заповнити його 50 парними числами за допомоги циклу.

// let arr = []

// for (let i = 1; i <= 50; i++) {
//     arr[i-1] = i*2;
// }
// console.log(arr);

// 2. заповнити його 50 непарними числами за допомоги циклу.

// let arr = [];

// for (let i = 0; i < 50; i++) {
//     arr[i] = i*2+1;
// }
// console.log(arr);

// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)

// let arr = [];

// for (let i = 0; i < 20; i++) {
//     arr[i] = parseInt(8 + Math.random()*1000);
//     if(arr[i]>732) {
//         i--;
//     }

// }
// console.log(arr);


// 2. вывести на консоль  каждый третий елемент
// for(let i = 1; i<arr.length/3; i++) {
//     console.log(arr[i*3-1]);
// }

// 3. вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.

// for(let i = 1; i<arr.length/3; i++) {
//     if(arr[i*3-1]%2==0){
//     console.log(arr[i*3-1]);
//     }
// }

// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный

// let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(let i = 1; i<arr.length; i++) {
//     if(arr[i-1] % 2 == 0 && arr[i+1] % 2 == 0){
//         console.log(arr[i]);
//     }
// }


// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.



// let arr = [100,250,50,168,120,345,188];
// let z = 0;
// for (let i = 0; i < arr.length; i++) {
//    z += arr[i];
// }
// console.log(parseInt(z/arr.length));


// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.


// let arr = [];

// for (let i = 0; i < 20; i++) {
//         arr[i] = parseInt(Math.random()*10);
// }
// console.log(arr);

// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     arr2[i] = arr[i] * 5;
// }
// console.log(arr2)

// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
//  додати його в інший масив.

let arr = [1, 3, 78, true, `mafia`, 77, false];

let num = []

for (let i = 0; i < arr.length; i++) {
    if( typeof arr[i] === 'number') {
        console.log(arr[i]);
        num.push(arr[i])
    }    
}
console.log(num);