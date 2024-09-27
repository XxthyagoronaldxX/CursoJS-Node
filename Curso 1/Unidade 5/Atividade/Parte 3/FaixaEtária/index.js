function getStage(age) {
    if (age < 12) return "Criança";
    else if (age < 21) return "Adolescente";
    else if (age < 40) return "Adulto";
    else return "Idoso";
}

console.log(getStage(11));
console.log(getStage(30));