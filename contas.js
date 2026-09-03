class Conta {
    #saldo = 0;
    #titular;

    constructor(titular, saldoInicial = 0) {
        this.#titular = titular;
        this.#saldo = saldoInicial;
    }


    get saldo() { return this.#saldo; }
    get titular() { return this.#titular; }

    depositar(valor) {
        if(valor <= 0) throw new Error("O deposito precisa ser positivo.");
        this.saldo += valor;
        return this.#saldo;
    }

    sacar(valor) {
        if (valor <= 0) throw new Error("O saque precisa ser positivo.");
        if (valor > this.#saldo) throw new Error("Saldo insuficiente");
        this.#saldo -= valor;
        return this.#saldo;
    }


    render() { return 0; }
    tipo() { return "Conta"; }
}


class ContaPoupanca extends Conta {
    render() {
        const juros = this.saldo * 0.05;
        this.dapositar(juros);
        return juros;
    }
    tipo() { return "Poupanca"; }
}

class ContaCorrente extends Conta {
    render() {
        const tarifa = Math.min(20, this.saldo);
        if (tarifa > 0) this.sacar(tarifa);
        return -tarifa;
        }
        tipo () { return "Corrente"; }
}

module.exports = { Conta, ContaPoupanca, ContaCorrente };
