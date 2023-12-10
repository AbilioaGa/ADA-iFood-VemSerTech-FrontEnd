// Exercício 4: Crie um objeto chamado "livro" com os atributos título, autor e um método chamado "detalhes" que imprime os detalhes do livro.
const livro = {
  titulo: "Aventuras de Sherlock Holmes",
  autor: "Arthur Conan Doyle",
  detalhes: function() {
    console.log("Título: " + this.título);
    console.log("Autor: " + this.autor);
  }
};
livro.detalhes();