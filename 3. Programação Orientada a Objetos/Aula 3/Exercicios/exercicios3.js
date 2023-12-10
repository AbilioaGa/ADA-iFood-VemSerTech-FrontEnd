// Exercício 3: Crie um objeto chamado "aluno" com os atributos nome, idade e um método chamado "mostrarInformacoes" que imprime os dados do aluno.

const aluno = {
  nome: "Abilio",
  idade: 35,
  mostrarInformacoes: function() {
    console.log("Nome: " + this.nome);
    console.log("Idade: " + this.idade);
  }
};
aluno.mostrarInformacoes();