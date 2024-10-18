class Veiculo {
    #marca;
    #modelo;
    #velocidade;

    constructor(marca, modelo) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#velocidade = 0;
    }

    get velocidade() {
        return this.#velocidade;
    }

    acelerar() {
        this.#velocidade++;
    }

    frear() {
        this.#velocidade--;
    }

    toString() {
        return `Marca: ${this.#marca}, Modelo: ${this.#modelo}, Velocidade: ${this.#velocidade}`;
    }
}

const carro = new Veiculo("Toyota", "Corolla");

carro.acelerar();

console.log(carro.velocidade);