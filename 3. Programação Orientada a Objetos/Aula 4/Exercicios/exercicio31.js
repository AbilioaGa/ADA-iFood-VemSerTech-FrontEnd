// 31. Crie uma classe chamada "Estudante" com os atributos nome, matrícula e lista de disciplinas. Implemente um construtor para inicializar esses atributos e métodos para adicionar e remover disciplinas do estudante. Crie objetos de estudantes e teste os métodos. 🎓📚📝

class Estudante {
  constructor(nome, matricula) {
    this.nome = nome;
    this.matricula = matricula;
    this.disciplinas = [];
  }

  adicionarDisciplina(disciplina) {
    this.disciplinas.push(disciplina);
    console.log(`${disciplina} adicionada para ${this.nome}.`);
  }

  removerDisciplina(disciplina) {
    const index = this.disciplinas.indexOf(disciplina);
    if (index !== -1) {
      this.disciplinas.splice(index, 1);
      console.log(`${disciplina} removida para ${this.nome}.`);
    } else {
      console.log(`${disciplina} não encontrada para ${this.nome}.`);
    }
  }
}

const estudante1 = new Estudante("Abilio", "20230001");
const estudante2 = new Estudante("Maria", "20230002");

console.log("Estudante 1:");
console.log("Nome:", estudante1.nome);
console.log("Matrícula:", estudante1.matricula);
estudante1.adicionarDisciplina("Matemática");
estudante1.adicionarDisciplina("História");
estudante1.removerDisciplina("Geografia");
console.log("Disciplinas:", estudante1.disciplinas);
console.log("\n");

console.log("Estudante 2:");
console.log("Nome:", estudante2.nome);
console.log("Matrícula:", estudante2.matricula);
estudante2.adicionarDisciplina("Biologia");
estudante2.adicionarDisciplina("Química");
estudante2.removerDisciplina("História");
console.log("Disciplinas:", estudante2.disciplinas);
