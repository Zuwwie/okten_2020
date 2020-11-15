// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

// let x = +prompt(`Input`);

// (function natural () {
//     x /= 2
//     console.log(x);
//     if (x===1) {
//         return alert(`yes`)
//     }
//     if(x<2) {
//         return alert(`no`)
//     }
    
//     else return natural()
// }());

// реалізувати глибоке копіювання обєкту за допомогою рекурсій

// let user = {
//     name:  `andryy`,
//     car: {
//         model: `bmw`,
//         year: {
//             year: 2008,
//             month: 8,
//             day: {
//                 day: 21,
//                 dayName: `monday`
//             }
//         }
//     }
// }


// let arr = [
//     [0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,1,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0],
//    ];
// let local = JSON.stringify(arr);
// local = JSON.parse(local)
// console.log(local);

//    console.log(arr);

// let gogo = function () {
//     let x = myLocation();
//     let go = random();
//     if (go === `n`) {
//         arr[x[0]][x[1]]=0;
//         x[0] --
//         arr[x[0]][x[1]]=1;
//         console.log(arr);
//     }
//     if (go === `s`) {
//         arr[x[0]][x[1]]=0;
//         x[0] ++
//         arr[x[0]][x[1]]=1;
//         console.log(arr);
//     }
//     if (go === `w`) {
//         arr[x[0]][x[1]]=0;
//         x[1] --
//         arr[x[0]][x[1]]=1;
//         console.log(arr);
//     }
//     if (go === `e`) {
//         arr[x[0]][x[1]]=0;
//         x[1] ++
//         arr[x[0]][x[1]]=1;
//         console.log(arr);
//     }
// };

// let myLocation = function() {

// for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             // console.log(arr[i][j]);
//             if (arr[i][j]===1) {
//                 // console.log(i, j)
//                 return [i,j]
//             };
//         };
// };
// };

// function random() {
//     let mass = [`s`,`w`,`n`,`e`];
//     let z = Math.round(Math.random() * 3);
//     // console.log(z);
//     // console.log(mass[z]);
//     return mass[z];
// }



// gogo();


function local() {
    let mass = [];
    for (let i = 0; i < 10; i++) {
      mass.push(random())  
    }
    console.log(mass);
    let x = perebor(mass);
    console.log(x);
};

function random() {
    let mass = [`s`,`w`,`n`,`e`];
    let z = Math.round(Math.random() * 3);
    return mass[z];
};
function perebor(array) {
    let s = 0,w = 0,n = 0 ,e = 0;
    array.forEach(element => {
        switch (element) {
            case `s`:
                s++
              break;
            case `w`:
                w++
              break;
            case `n`:
                n++
              break;
            case `e`:
                e++
              break;
    }});
   if (n===s && w===e) {
       return true
   }
   return local()
}

local();