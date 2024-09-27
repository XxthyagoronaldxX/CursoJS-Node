let array = [1, 2, 3 ,4];

let newArray = array.slice(0, 2);

console.log(array);
console.log(newArray);

let newArray2 = array.splice(0, 2);

console.log(array);
console.log(newArray2);

let newArray3 = array.splice(0, 2, 1, 2, 3, 4);

console.log(array);
console.log(newArray3);