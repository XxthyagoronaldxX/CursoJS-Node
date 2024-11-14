class Veiculo {
    marca;
    #modelo;
    #velocidade;
    #createdAt;

    constructor(marca, modelo) {
        this.marca = marca;
        this.#modelo = modelo;
        this.#velocidade = 0;
        this.#createdAt = new Date();
    }

    get createdAt() {
        return Intl.DateTimeFormat("pt-br", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }).format(this.#createdAt);
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
        return `Marca: ${this.marca}, Modelo: ${this.#modelo}, Velocidade: ${this.#velocidade}, Criado em: ${this.createdAt}`;
    }
}

const carro = new Veiculo("Toyota", "Corolla");

carro.acelerar();

console.log(carro.marca);
console.log(carro.toString());