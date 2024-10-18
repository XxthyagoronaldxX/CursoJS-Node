let valor = parseFloat(window.prompt("Informe o valor do produto: "));
let formaPagamento = window.prompt("Forma de pagamento:\n1. A vista [10% Desconto]\n2. Parcelado em 2x [Sem Desconto]\n3. Parcelado em 3x [Sem Desconto]\n");

let total = formaPagamento == 1 ? valor - (valor * 0.1) : formaPagamento == 2 ? valor/2 : valor/3;

window.alert("Pagamento: " + total);