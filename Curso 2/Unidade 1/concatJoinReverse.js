let array = [1, 2, 3, 4, 5];

let newArrayConcat = array.concat(1, 2, 6);

console.log(newArrayConcat);

let joinArray = array.join(",");

console.log(joinArray);

let arrayReverse = array.toReversed();

console.log(arrayReverse);

let arrayReverse2 = [...array];

arrayReverse2.reverse();

console.log(arrayReverse2);
console.log(array);