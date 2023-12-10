// 29. Crie uma classe chamada "Pessoa" com os atributos nome, idade e profissão. Implemente um construtor para esta classe. Crie um método para saudar outras pessoas com base na profissão da pessoa (por exemplo, "Olá, sou um médico."). Crie objetos de pessoas e teste o método de saudação. 👤👋🎓

class Pessoa {
  constructor(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }

  saudacao() {
    switch (this.profissao.toLowerCase()) {
      case "médico":
        return `Olá me chamo ${this.nome}, sou um(a) médico(a).`;
      case "engenheiro":
        return `Olá me chamo ${this.nome}, sou um(a) engenheiro(a).`;
      case "professor":
        return `Olá me chamo ${this.nome}, sou um(a) professor(a).`;
      default:
        return `Olá me chamo ${this.nome}, sou ${this.profissao}.`;
    }
  }
}

const pessoa1 = new Pessoa("Maria", 30, "Médico");
const pessoa2 = new Pessoa("Carlos", 25, "Engenheiro");
const pessoa3 = new Pessoa("Ana", 40, "Professor");
const pessoa4 = new Pessoa("Abilio", 35, "Desenvolvedor");

console.log(pessoa1.saudacao());
console.log(pessoa2.saudacao());
console.log(pessoa3.saudacao());
console.log(pessoa4.saudacao());
