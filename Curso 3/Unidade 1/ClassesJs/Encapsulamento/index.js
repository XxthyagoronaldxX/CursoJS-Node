class ContaBancaria {
    #saldo;

    constructor(saldo) {
        this.#saldo = saldo;
    }

    doSaque(value) {
        if (value > this.#saldo) {
            throw new Error("Valor de saque inválido!");
        }

        this.#saldo -= value;
    }

    doDeposito(value) {
        this.#saldo += value;
    }

    getSaldo() {
        return this.#saldo;
    }

    get saldo() {
        return this.#saldo;
    }
}

const ctBancaria = new ContaBancaria(100);

console.log(ctBancaria.saldo);


ctBancaria.doDeposito(100);

console.log(ctBancaria.saldo);