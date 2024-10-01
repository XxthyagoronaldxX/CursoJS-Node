const text = "Testando contador de vogais ABC";

function contarVogais(text) {
    const vogais = ["a", "e", "i", "o", "u"];

    let sum = 0;
    for (const vogal of vogais) sum += text.toLowerCase().split(vogal).length - 1;

    return sum;
}

console.log(contarVogais(text));