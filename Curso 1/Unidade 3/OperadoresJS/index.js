// Operadores Matemáticos
console.log("Operadores matemáticos: ");
console.log(2 + 2); //Soma
console.log(2 - 2); //Subtração
console.log(2 * 2); //Multiplicação
console.log(2 / 2); //Divisão
console.log(2 % 3); //Resto da divisão
console.log(2 ** 3); //Potenciação

let cont = 1;

// Operadores de Incremento e Decremento
console.log("\nOperadores de Incremento e Decremento: ");
console.log(++cont); //PréIncremento
console.log(cont++); //PósIncremento
console.log(cont);

console.log(--cont); //PréDecremento
console.log(cont--); //PósDecremento
console.log(cont);

cont += 1;
cont -= 1;
cont *= 2;
cont /= 2;
cont **= 2;
cont %= 2;

// Operadores Relacionais
console.log("\nOperadores relacionais: ");
console.log(5 === 5); //true
console.log(5 === "5"); //false
console.log(5 == 5); //true 
console.log(5 == "5"); //true

console.log(5 !== 5); //false
console.log(5 !== "5"); //true
console.log(5 != 5); //false
console.log(5 != "5"); //false

console.log(5 > 5); //false
console.log(5 >= 5); //true
console.log(5 < 5); //false
console.log(5 <= 5); //true

// Operadores Lógicos
console.log("\nOperadores lógicos: ");
console.log(true && true); //true
console.log(false && true); //false
console.log(false && false); //false

console.log(true || true); //false
console.log(false || true); //true
console.log(false || false); //true

console.log(!true); //false
console.log(!false); //true