// Desenvolva uma classe chamada "ContaCorrente" com os atributos número da conta, saldo e nome do titular. Implemente um construtor para esta classe. Crie métodos para depositar e sacar dinheiro da conta. Teste esses métodos em objetos de conta corrente. 💳💵🏦

// Definindo a classe ContaCorrente
class ContaCorrente {
  // Construtor da classe
  constructor(numeroConta, saldo, titular) {
    this.numeroConta = numeroConta;
    this.saldo = saldo;
    this.titular = titular;
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
      console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    } else {
      console.log("O valor do depósito deve ser maior que zero.");
    }
  }

  sacar(valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    } else {
      console.log(
        `Saque de R$${valor} NÃO realizado. Saldo insuficiente ou valor inválido para saque. Saldo existente: R$${this.saldo}`
      );
    }
  }
}

const conta1 = new ContaCorrente("123456", 1000, "Abilio");
const conta2 = new ContaCorrente("789012", 2000, "Maria");

console.log("Conta 1:");
console.log("Número da Conta:", conta1.numeroConta);
console.log("Saldo Inicial:", conta1.saldo);
console.log("Titular:", conta1.titular);
console.log("\n");

conta1.depositar(500);
console.log("\n");

conta1.sacar(200);
console.log("\n");

console.log("Conta 2:");
console.log("Número da Conta:", conta2.numeroConta);
console.log("Saldo Inicial:", conta2.saldo);
console.log("Titular:", conta2.titular);
console.log("\n");

conta2.sacar(3000);
