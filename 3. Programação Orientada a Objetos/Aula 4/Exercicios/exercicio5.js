// 5. Crie uma classe chamada "Livro" com os atributos título, autor e ano de publicação. Implemente um construtor para esta classe. Crie objetos de livros e exiba suas informações. 📖✍️📅

class Livro {
  constructor(titulo, autor, anoPublicacao) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
  }
}

const livro1 = new Livro("Código limpo: habilidades práticas do Agile software", "Robert C. Martin", 2009);
const livro2 = new Livro(
  "O codificador limpo: um código de conduta para programadores profissionais",
  "Robert C. Martin",
  2012
);

console.log("Livro 1:");
console.log("Título:", livro1.titulo);
console.log("Autor:", livro1.autor);
console.log("Ano de Publicação:", livro1.anoPublicacao);
console.log("\n");

console.log("Livro 2:");
console.log("Título:", livro2.titulo);
console.log("Autor:", livro2.autor);
console.log("Ano de Publicação:", livro2.anoPublicacao);
