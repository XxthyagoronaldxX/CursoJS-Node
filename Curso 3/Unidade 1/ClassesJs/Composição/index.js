class Endereco {
    constructor(params) {
        this.local = params.local;
        this.casa = params.casa;
    }

    toString() {
        return `Local: ${this.local}, Casa: ${this.casa}`;
    }
}

class Pessoa {
    constructor(params) {
        this.nome = params.nome;
        this.idade = params.idade;
        this.endereco = new Endereco(params.endereco);
    }

    static test() {
        console.log("Test");
    }

    toString() {
        return `Nome: ${this.nome}, Idade: ${this.idade}, ${this.endereco.toString()}`;
    }
}

// const enderecoTest = new Endereco("Sideral", 59);
// const pessoaTest = new Pessoa("Thyago", 19, enderecoTest);

// console.log(pessoaTest.toString());

const pessoaTest2 = new Pessoa({
    nome: "Thyago",
    idade: 16,
    endereco: {
        local: "Minas",
        casa: 83
    }
});

console.log(pessoaTest2.toString());