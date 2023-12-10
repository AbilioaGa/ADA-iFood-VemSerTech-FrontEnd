// 23. Desenvolva uma classe chamada "ContaPoupança" com os atributos número da conta, saldo e taxa de juros anual. Adicione um construtor para inicializar esses atributos. Crie métodos para calcular os juros mensais e depositar juros na conta. Teste esses métodos em objetos de conta poupança. 💰🏦📈

class ContaPoupanca {
  constructor(numeroConta, saldoInicial, taxaJurosAnual) {
    this.numeroConta = numeroConta;
    this.saldo = saldoInicial;
    this.taxaJurosAnual = taxaJurosAnual;
  }

  calcularJurosMensais() {
    const taxaJurosMensal = this.taxaJurosAnual / 12 / 100;
    const jurosMensais = this.saldo * taxaJurosMensal;
    return jurosMensais;
  }

  depositarJuros() {
    const jurosMensais = this.calcularJurosMensais();
    this.saldo += jurosMensais;
    console.log(`Juros mensais de ${jurosMensais.toFixed(2)} depositados na conta ${this.numeroConta}.`);
  }
}

const contaPoupanca1 = new ContaPoupanca("12345", 1000, 3.5);
const contaPoupanca2 = new ContaPoupanca("67890", 500, 2.5);

console.log("Conta Poupança 1:");
console.log("Número da Conta:", contaPoupanca1.numeroConta);
console.log("Saldo Inicial:", contaPoupanca1.saldo);
console.log("Taxa de Juros Anual:", contaPoupanca1.taxaJurosAnual);
console.log("\n");

const jurosMensais1 = contaPoupanca1.calcularJurosMensais();
console.log(`Juros mensais sem depositar: ${jurosMensais1.toFixed(2)}`);
contaPoupanca1.depositarJuros();
console.log("Novo Saldo:", contaPoupanca1.saldo);
console.log("\n");

console.log("Conta Poupança 2:");
console.log("Número da Conta:", contaPoupanca2.numeroConta);
console.log("Saldo Inicial:", contaPoupanca2.saldo);
console.log("Taxa de Juros Anual:", contaPoupanca2.taxaJurosAnual);
console.log("\n");

const jurosMensais2 = contaPoupanca2.calcularJurosMensais();
console.log(`Juros mensais sem depositar: ${jurosMensais2.toFixed(2)}`);
contaPoupanca2.depositarJuros();
console.log("Novo Saldo:", contaPoupanca2.saldo);
