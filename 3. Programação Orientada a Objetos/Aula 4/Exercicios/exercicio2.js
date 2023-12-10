// 2. Crie uma classe chamada "Pessoa" com os atributos nome, idade e cidade. Implemente um construtor para esta classe. Em seguida, crie objetos de pessoas e exiba seus detalhes. 👤🏙️

class Pessoa {
  constructor(nome, idade, cidade) {
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
  }
}

const pessoa1 = new Pessoa("Abilio", 35, "Itaí");
const pessoa2 = new Pessoa("Kimberly", 27, "Itaí");

console.log("Pessoa 1:");
console.log("Nome:", pessoa1.nome);
console.log("Idade:", pessoa1.idade);
console.log("Cidade:", pessoa1.cidade);
console.log("\n");

console.log("Pessoa 2:");
console.log("Nome:", pessoa2.nome);
console.log("Idade:", pessoa2.idade);
console.log("Cidade:", pessoa2.cidade);
