// 38. Crie uma classe chamada "Escola" com os atributos nome, endereço e lista de alunos matriculados. Implemente um construtor para esta classe. Crie métodos para matricular alunos na escola e exibir a lista de alunos matriculados. Crie objetos de escolas e teste os métodos. 🏫🎓📚

class Escola {
  constructor(nome, endereco) {
    this.nome = nome;
    this.endereco = endereco;
    this.alunosMatriculados = [];
  }

  matricularAluno(aluno) {
    this.alunosMatriculados.push(aluno);
    console.log(`${aluno.nome} matriculado na escola ${this.nome}.`);
  }

  exibirListaAlunos() {
    console.log(`Lista de alunos matriculados na escola ${this.nome}:`);
    for (const aluno of this.alunosMatriculados) {
      console.log(aluno.nome);
    }
  }
}

const escola1 = new Escola("Escola Primária 9", "Rua 9, 999");
const escola2 = new Escola("Escola Secundária 6", "Avenida 6, 666");

const aluno1 = { nome: "Neji" };
const aluno2 = { nome: "Hinata" };

escola1.matricularAluno(aluno1);
escola1.matricularAluno(aluno2);

escola2.matricularAluno({ nome: "Bento" });
escola2.matricularAluno({ nome: "Ahri" });

escola1.exibirListaAlunos();
console.log("\n");
escola2.exibirListaAlunos();
