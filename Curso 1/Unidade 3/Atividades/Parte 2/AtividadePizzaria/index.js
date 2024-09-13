let valorPizza = parseFloat(window.prompt("Informe o valor da pizza: "));
let clientes = parseInt(window.prompt("Informe a quantidade clientes que irão pagar: "));

window.alert("O valor a pagar por cliente é de: " + (valorPizza / clientes).toFixed(2));