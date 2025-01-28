const array = new Array(100);
const array1 = [1,2,3,4];
const array3 = array1.map((item) => item * 2);
array.push(1);

let array2 = [...array1, 5];
console.log(array1);
console.log(array2);
console.log(array3);
