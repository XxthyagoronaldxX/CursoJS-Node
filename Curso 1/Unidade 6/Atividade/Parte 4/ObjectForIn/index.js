let pessoa = {
    id: 1,
    nome: "Thyago",
    cidade: "Belém",
    apelido: "TCKUBIRIM",
    idade: 21
}

for (const key in pessoa) console.log(`${key}: ${pessoa[key]}`);