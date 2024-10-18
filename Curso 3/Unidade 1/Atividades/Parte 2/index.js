class Funcionario {
    constructor(nome, cpf, email) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;

        if (this.constructor === Funcionario) {
            throw new Error("Funcionario é uma classe abstrata.");
        }
    }

    calcSalario() {
        return 0;    
    }
}

class FuncionarioHorista extends Funcionario {
    constructor(nome, cpf, email, horas, valorHora) {
        super(nome, cpf, email);
        this.horas = horas;
        this.valorHora = valorHora;
    }

    calcSalario() {
        return this.horas * this.valorHora;
    }
}

class FuncionarioMensalista extends Funcionario {
    constructor(nome, cpf, email, valorMensal, percDesconto) {
        super(nome, cpf, email);
        this.valorMensal = valorMensal;
        this.percDesconto = percDesconto;
    }

    calcSalario() {
        return this.valorMensal - (this.valorMensal * this.percDesconto/100);
    }
}

const funcHorista = new FuncionarioHorista("Mr. Beast", "Test", "Test", 10, 100);
const funcMensalista = new FuncionarioMensalista("Elon Musk", "Test", "Test", 2000, 50);

console.log(funcHorista.calcSalario());
console.log(funcMensalista.calcSalario());
