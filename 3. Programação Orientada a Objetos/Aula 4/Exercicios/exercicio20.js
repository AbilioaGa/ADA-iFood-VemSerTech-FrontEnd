// 20. Crie uma classe chamada "Biblioteca" com os atributos nome, endereço e lista de livros disponíveis. Adicione um construtor para inicializar esses atributos e métodos para adicionar e emprestar livros. Crie objetos de bibliotecas e teste os métodos. 📚🏢📖

class Biblioteca {
  constructor(nome, endereco) {
    this.nome = nome;
    this.endereco = endereco;
    this.livrosDisponiveis = [];
    this.livrosEmprestados = [];
  }

  adicionarLivro(livro) {
    this.livrosDisponiveis.push(livro);
    console.log(`Livro "${livro}" adicionado à biblioteca ${this.nome}.`);
  }

  emprestarLivro(livro) {
    const indexLivro = this.livrosDisponiveis.indexOf(livro);

    if (indexLivro !== -1) {
      this.livrosDisponiveis.splice(indexLivro, 1);
      this.livrosEmprestados.push(livro);
      console.log(`Livro "${livro}" emprestado da biblioteca ${this.nome}.`);
    } else {
      console.log(`O livro "${livro}" não está disponível para empréstimo.`);
    }
  }
}

const biblioteca1 = new Biblioteca("Biblioteca 9", "Rua 9, 999");
const biblioteca2 = new Biblioteca("Biblioteca 6", "Avenida 6, 666");

console.log("Biblioteca 1:");
console.log("Nome:", biblioteca1.nome);
console.log("Endereço:", biblioteca1.endereco);
console.log("\n");

biblioteca1.adicionarLivro("Expressões Regulares: Uma Abordagem Divertida");
biblioteca1.adicionarLivro("Entendendo Algoritmos: Um Guia Ilustrado Para Programadores e Outros Curiosos");
console.log("\n");

biblioteca1.emprestarLivro("Entendendo Algoritmos: Um Guia Ilustrado Para Programadores e Outros Curiosos");
console.log("\n");

console.log("Biblioteca 2:");
console.log("Nome:", biblioteca2.nome);
console.log("Endereço:", biblioteca2.endereco);
console.log("\n");

biblioteca2.emprestarLivro("Código limpo: habilidades práticas do Agile software");
