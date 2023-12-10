// 36. Crie uma classe chamada "Conta" com os atributos número da conta, saldo e titular da conta. Implemente um construtor para esta classe. Crie um método para verificar se a conta está em débito (saldo negativo) e outro para depositar dinheiro na conta. Crie objetos de contas e teste os métodos. 💳💰🏦

class Conta {
  constructor(numeroConta, saldoInicial, titularConta) {
    this.numeroConta = numeroConta;
    this.saldo = saldoInicial;
    this.titular = titularConta;
  }

  estaEmDebito() {
    return this.saldo < 0;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(
      `Depósito de R$ ${valor.toFixed(2)} realizado na conta ${this.numeroConta}. Novo saldo: R$ ${this.saldo.toFixed(
        2
      )}`
    );
  }
}

const conta1 = new Conta("999999", -1000, "Abilio");
const conta2 = new Conta("666666", 500, "Maria");

console.log(
  `Conta ${conta1.numeroConta} do titular ${conta1.titular} está em débito? ${
    conta1.estaEmDebito() ? `Sim, débito de ${conta1.saldo}` : `Não, saldo de ${conta1.saldo}`
  }`
);
console.log(
  `Conta ${conta2.numeroConta} do titular ${conta2.titular} está em débito? ${
    conta2.estaEmDebito() ? `Sim, débito de ${conta2.saldo}` : `Não, saldo de ${conta2.saldo}`
  }`
);

conta1.depositar(500);
conta2.depositar(200);

console.log(
  `Conta ${conta1.numeroConta} do titular ${conta1.titular} está em débito? ${
    conta1.estaEmDebito() ? `Sim, débito de ${conta1.saldo}` : `Não, saldo de ${conta1.saldo}`
  }`
);
console.log(
  `Conta ${conta2.numeroConta} do titular ${conta2.titular} está em débito? ${
    conta2.estaEmDebito() ? `Sim, débito de ${conta2.saldo}` : `Não, saldo de ${conta2.saldo}`
  }`
);
