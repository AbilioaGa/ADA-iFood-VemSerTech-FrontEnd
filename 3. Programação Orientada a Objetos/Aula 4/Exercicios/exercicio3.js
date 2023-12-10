// 3. Crie uma classe chamada "ContaBancaria" com os atributos número da conta, saldo e nome do titular. Adicione um construtor para inicializar esses atributos. Crie métodos para depositar e sacar dinheiro da conta. Teste esses métodos em objetos de conta bancária. 💰🏦

class ContaBancaria {
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
      console.log("Saldo insuficiente ou valor inválido para saque.");
    }
  }
}

const conta1 = new ContaBancaria("999999999", 10000, "Abilio");

console.log("Detalhes da Conta 1:");
console.log("Número da Conta:", conta1.numeroConta);
console.log("Saldo Inicial:", conta1.saldo);
console.log("Titular:", conta1.titular);
console.log("\n");

conta1.depositar(500);
conta1.sacar(200);
conta1.sacar(800);
