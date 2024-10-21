class Conversor {
    static metrosParaQuilometros(metros) {
        return metros / 1000;
    }

    static quilometrosParaMetros(quilometros) {
        return quilometros * 1000;
    }
}

console.log(Conversor.metrosParaQuilometros(1400));
console.log(Conversor.quilometrosParaMetros(0.5));