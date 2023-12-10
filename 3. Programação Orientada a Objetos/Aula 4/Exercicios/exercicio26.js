// 26. Crie uma classe chamada "ProdutoAlimentício" com os atributos nome, preço e data de validade. Implemente um construtor para esta classe. Crie um método para verificar se o produto está vencido com base na data atual. Crie objetos de produtos alimentícios e teste o método. 🥖🏷️📅

class ProdutoAlimenticio {
  constructor(nome, preco, dataValidade) {
    this.nome = nome;
    this.preco = preco;
    this.dataValidade = new Date(dataValidade);
  }

  estaVencido() {
    const dataAtual = new Date();

    return this.dataValidade < dataAtual;
  }
}

const pao = new ProdutoAlimenticio("Pão Francês", 2.5, "2023-12-10");
const leite = new ProdutoAlimenticio("Leite Integral", 3.0, "2023-11-30");

console.log("Pão:");
console.log("Nome:", pao.nome);
console.log("Preço:", pao.preco);
console.log("Data de Validade:", pao.dataValidade.toISOString().split("T")[0]);
console.log("Está Vencido?", pao.estaVencido());
console.log("\n");

console.log("Leite:");
console.log("Nome:", leite.nome);
console.log("Preço:", leite.preco);
console.log("Data de Validade:", leite.dataValidade.toISOString().split("T")[0]);
console.log("Está Vencido?", leite.estaVencido());
