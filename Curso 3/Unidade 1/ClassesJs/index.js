class Pessoa {
    email;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    toString() {
        return `Nome: ${this.email}, Idade: ${this.idade}`;
    }
}

const pessaoTest = new Pessoa("Thyago", 18);

console.log(pessaoTest.toString());