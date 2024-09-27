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

const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const multiplicacao = (a, b) => a * b;
const divisao = (a, b) => a / b;

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
    console.log(doOp(10, "20", OP.SOMA));
} catch(err) {
    console.error(err);
}