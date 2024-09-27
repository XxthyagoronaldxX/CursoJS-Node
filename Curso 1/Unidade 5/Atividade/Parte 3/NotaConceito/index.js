function getConcept(nota) {
    if (nota <= 50) return "Insuficiente";
    else if (nota <= 70) return "Regular";
    else if (nota <= 90) return "Bom";
    else return "Excelente";
}

console.log(getConcept(45));
console.log(getConcept(90));