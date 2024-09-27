/*
Sem usar ternário:

let verifyAge = (age) => {
    if (age >= 18) return "Maior de idade";
    else return "Menor de idade";
}
*/

let verifyAge = (age) => age >= 18 ? "Maior de idade" : "Menor de idade";

console.log(verifyAge(17));
console.log(verifyAge(19));