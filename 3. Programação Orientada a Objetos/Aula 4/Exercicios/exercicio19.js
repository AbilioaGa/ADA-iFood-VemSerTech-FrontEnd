// 19. Desenvolva uma classe chamada "Aluno" com os atributos nome, matrícula e lista de disciplinas. Implemente um construtor para inicializar esses atributos e métodos para adicionar disciplinas ao aluno e calcular a média geral. Crie objetos de alunos e teste os métodos. 🎓📚📊

class Aluno {
  constructor(nome, matricula) {
    this.nome = nome;
    this.matricula = matricula;
    this.disciplinas = [];
  }

  adicionarDisciplina(disciplina, nota) {
    this.disciplinas.push({ disciplina, nota });
    console.log(`Disciplina ${disciplina} adicionada para o aluno ${this.nome}.`);
  }

  calcularMediaGeral() {
    if (this.disciplinas.length === 0) {
      console.log("O aluno não está matriculado em nenhuma disciplina.");
      return 0;
    }

    const somaNotas = this.disciplinas.reduce((soma, disciplina) => soma + disciplina.nota, 0);
    const mediaGeral = somaNotas / this.disciplinas.length;

    console.log(`A média geral do aluno ${this.nome} é ${mediaGeral.toFixed(2)}.`);
    return mediaGeral;
  }
}

const aluno1 = new Aluno("Abilio", "20230001");
const aluno2 = new Aluno("Maria", "20230002");

console.log("Aluno 1:");
console.log("Nome:", aluno1.nome);
console.log("Matrícula:", aluno1.matricula);
console.log("\n");

aluno1.adicionarDisciplina("Matemática", 6.5);
aluno1.adicionarDisciplina("História", 9.0);
console.log("\n");

aluno1.calcularMediaGeral();
console.log("\n");

console.log("Aluno 2:");
console.log("Nome:", aluno2.nome);
console.log("Matrícula:", aluno2.matricula);
console.log("\n");

aluno2.calcularMediaGeral();
