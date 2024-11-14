const OP = {
    SOMA: 1,
    SUBTRACAO: 2,
    MULTIPLICACAO: 3,
    DIVISAO: 4
}

const validaValores = (a, b) => typeof a === "number" && typeof b === "number";

const throwInvalidValues = () => {
    throw new Error("Valores inválidos");
}

const throwDivisionZero = () => {
    throw new Error("Divisão por zero inválido!");
}

const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const multiplicacao = (a, b) => a * b;
const divisao = (a, b) => b == 0 ? throwDivisionZero() : a / b;

const doOp = (a, b, op) => {
    if (validaValores(a, b)) {
        switch(op) {
            case OP.SOMA: return soma(a, b);
            case OP.SUBTRACAO: return subtracao(a, b);
            case OP.MULTIPLICACAO: return multiplicacao(a, b);
            case OP.DIVISAO: return divisao(a, b);
            default: return 0;
        }
    } else {
        throwInvalidValues();
    }
}

try {
    const valorA = parseFloat(window.prompt("Informe o valor A: "));
    const valorB = parseFloat(window.prompt("Informe o valor B: "));
    const op = parseFloat(window.prompt("Informe a operação:\n\n1. Soma\n\n2. Subtração\n\n3. Multiplicação\n\n4. Divisão"))

    const result = doOp(valorA, valorB, op);

    window.alert("Resultado: " + result);
} catch(err) {
    window.alert("Error: " + err.message);
}