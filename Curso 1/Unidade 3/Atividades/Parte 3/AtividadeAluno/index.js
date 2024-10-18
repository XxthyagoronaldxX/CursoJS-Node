window.alert("Calculando média de um aluno!");

let nota1 = parseFloat(window.prompt("Informe a nota 1: "));
let nota2 = parseFloat(window.prompt("Informe a nota 2: "));
let nota3 = parseFloat(window.prompt("Informe a nota 3: "));
let nota4 = parseFloat(window.prompt("Informe a nota 4: "));

let media = (nota1 + nota2 + nota3 + nota4) / 4;

window.alert("Média do aluno: " + media);