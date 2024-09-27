/*
Sem usar ternário:

let verifyParOrImpar = (value) => {
    if (value % 2 === 0) return "Par";
    else return "Ímpar";
}
*/

const verifyParOrImpar = (value) => value % 2 === 0 ? "Par" : "Ímpar";

console.log(verifyParOrImpar(2));
console.log(verifyParOrImpar(13));