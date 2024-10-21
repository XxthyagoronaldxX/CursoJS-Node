class Nota {
    constructor(disciplina, nota) {
        this.disciplina = disciplina;
        this.nota = nota;
    }
}

class Aluno { 
    constructor(nome, matricula) {
        this.nome = nome;
        this.matricula = matricula;
        this.notas = [];
    }

    addNota(nota) {
        this.notas.push(nota);
    }

    media() {
        return this.notas.reduce((acc, value) => acc + value.nota, 0) / this.notas.length;
    }

    toString() {
        return `Nome: ${this.nome}, Matricula: ${this.matricula}, Média: ${this.media()}`;
    }
}

const nota01 = new Nota("Portugues", 5);
const nota02 = new Nota("Inglês", 5);
const nota03 = new Nota("Espanhol", 5);

const aluno01 = new Aluno("Thyago", 203);

aluno01.addNota(nota01);
aluno01.addNota(nota02);
aluno01.addNota(nota03);

console.log(aluno01.toString());