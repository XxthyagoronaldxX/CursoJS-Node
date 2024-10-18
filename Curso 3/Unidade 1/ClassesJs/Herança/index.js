class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;

        if (this.constructor === Veiculo) {
            throw new Error("Veiculo é uma classe abstrata.");
        }
    }

    acelerar() {
        console.log("Acelerando...");
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano, portas) {
        super(marca, modelo, ano);
        this.portas = portas;
    }

    abrirPorta() {
        console.log("Abrindo porta...");
    }

    acelerar() {
        console.log(`Acelerando ${modelo}...`)
    }
}

