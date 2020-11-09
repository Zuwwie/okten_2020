let clearArr = [];
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18, [1, 2, 3, 4], 61253213, [5, 3, 2, 4], false, `qw`];
for (let j = 0; j < arr.length; j++) {
    const arrElement = arr[j];
    if (typeof arrElement === `number` || typeof arrElement === `object`) {
            clearArr.push(arrElement)
    }
     console.log(123);
}
console.log(clearArr);