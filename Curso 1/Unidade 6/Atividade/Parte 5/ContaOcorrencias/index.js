let array = [1, 2, 3, 2, 4, 2];

const occurCount = (array, value) => array.filter(x => x === value).length;

console.log(occurCount(array, 2)); 