let array = [1, 2, 3, 4, 1];

let value = array.find((x) => x > 3);
console.log(value);

let valueIndex = array.findIndex((x) => x > 3);
console.log(valueIndex);

let verifyEveryP1 = array.every((x) => x > 3); // Verifica se todos os elementos são maiores que 3.
console.log(verifyEveryP1);

let verifyEveryP2 = array.every((x) => x > 0);  // Verifica se todos os elementos são maiores que 0.
console.log(verifyEveryP2);

let verifySomeP1 = array.some((x) => x > 2); // Verifica se algum dos elementos é maior que 2.
console.log(verifySomeP1);

let verifySomeP2 = array.some((x) => x > 80); // Verifica se algum dos elementos é maior que 80.
console.log(verifySomeP2);

let verifyIncludesP1 = array.includes(4); // Verifica se existe o valor 4 no array.
console.log(verifyIncludesP1);

let verifyIncludesP2 = array.includes(5); // Verifica se existe o valor 5 no array.
console.log(verifyIncludesP2);


