// 16. Defina uma classe chamada "Funcionário" com os atributos nome, cargo e salário. Adicione um construtor para inicializar esses atributos. Implemente um método para calcular o salário anual do funcionário (salário mensal multiplicado por 12). Crie objetos de funcionários e calcule seus salários anuais. 👩‍💼💰🗓️

class Funcionario {
  constructor(nome, cargo, salarioMensal) {
    this.nome = nome;
    this.cargo = cargo;
    this.salarioMensal = salarioMensal;
  }

  calcularSalarioAnual() {
    return this.salarioMensal * 12;
  }
}

const funcionario1 = new Funcionario("Abilio", "Desenvolvedor", 6000);
const funcionario2 = new Funcionario("Maria", "Gerente de Projetos", 7000);

console.log("Funcionário 1:");
console.log("Nome:", funcionario1.nome);
console.log("Cargo:", funcionario1.cargo);
console.log("Salário Anual:", funcionario1.calcularSalarioAnual());
console.log("\n");

console.log("Funcionário 2:");
console.log("Nome:", funcionario2.nome);
console.log("Cargo:", funcionario2.cargo);
console.log("Salário Anual:", funcionario2.calcularSalarioAnual());
