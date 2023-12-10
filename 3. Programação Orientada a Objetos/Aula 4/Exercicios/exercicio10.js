// 10. Desenvolva uma classe chamada "Funcionário" com os atributos nome, cargo e salário. Adicione um construtor para inicializar esses atributos. Implemente um método para aumentar o salário de um funcionário em uma determinada porcentagem. Crie objetos de funcionários e teste o método de aumento de salário. 👨‍💼💼📈

class Funcionario {
  constructor(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
  }

  aumentarSalario(porcentagem) {
    if (porcentagem > 0) {
      this.salario += (this.salario * porcentagem) / 100;
      console.log(`O salário de ${this.nome} foi aumentado em ${porcentagem}%.`);
    } else {
      console.log("A porcentagem de aumento deve ser maior que zero.");
    }
  }
}

const funcionario1 = new Funcionario("Abilio", "Desenvolvedor", 6000);
const funcionario2 = new Funcionario("Maria", "Gerente", 8000);
const funcionario3 = new Funcionario("Carlos", "Analista", 5000);

console.log("Funcionário 1:");
console.log("Nome:", funcionario1.nome);
console.log("Cargo:", funcionario1.cargo);
console.log("Salário:", funcionario1.salario);
console.log("\n");

funcionario1.aumentarSalario(10);
console.log("Novo Salário:", funcionario1.salario);
console.log("\n");

console.log("Funcionário 2:");
console.log("Nome:", funcionario2.nome);
console.log("Cargo:", funcionario2.cargo);
console.log("Salário:", funcionario2.salario);
console.log("\n");

funcionario2.aumentarSalario(15);
console.log("Novo Salário:", funcionario2.salario);
console.log("\n");

console.log("Funcionário 3:");
console.log("Nome:", funcionario3.nome);
console.log("Cargo:", funcionario3.cargo);
console.log("Salário:", funcionario3.salario);
console.log("\n");

funcionario3.aumentarSalario(-5);
console.log("Salário (sem aumento):", funcionario3.salario);
