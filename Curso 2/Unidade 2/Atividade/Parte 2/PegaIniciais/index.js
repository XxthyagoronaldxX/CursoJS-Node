let nome = "Thyago Ronald";

function pegaIniciais(nome) {
    return nome.split(" ").reduce((acc, value) => acc + value[0] + ".", "");
}

console.log(pegaIniciais(nome));