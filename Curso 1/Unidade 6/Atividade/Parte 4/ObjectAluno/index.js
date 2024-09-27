let alunos = [
    {
        nome: "Thyago",
        notas: [5, 5, 5, 5]
    },
    {
        nome: "Kaleo",
        notas: [7, 7, 7, 7]
    }
];

for (const aluno of alunos) {
    let sum = 0;

    for (const i in aluno.notas) sum += aluno.notas[i];

    console.log(`${aluno.nome}: ${sum/aluno.notas.length}`);
}