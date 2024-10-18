let valor = parseFloat(window.prompt("Valor do jantar: "));

let garcomTax = valor * 0.1;
let total = valor + garcomTax;

document.write("<h1>" + "Taxa do garçom: R$ " + garcomTax + "</h1>");
document.write("<h1>" + "Valor do jantar: R$ " + total + "</h1>");
