// 9. Crie uma classe chamada "Produto" com os atributos nome, preço e quantidade em estoque. Implemente um construtor para inicializar esses atributos e métodos para calcular o valor total em estoque e para adicionar ou remover unidades do estoque. Crie objetos de produtos e teste os métodos. 🛒💰

class Produto {
  constructor(nome, preco, quantidadeEstoque) {
    this.nome = nome;
    this.preco = preco;
    this.quantidadeEstoque = quantidadeEstoque;
  }

  calcularValorTotalEstoque() {
    return this.preco * this.quantidadeEstoque;
  }

  adicionarEstoque(quantidade) {
    if (quantidade > 0) {
      this.quantidadeEstoque += quantidade;
      console.log(`${quantidade} unidades adicionadas ao estoque.`);
    } else {
      console.log("A quantidade deve ser maior que zero.");
    }
  }

  removerEstoque(quantidade) {
    if (quantidade > 0 && quantidade <= this.quantidadeEstoque) {
      this.quantidadeEstoque -= quantidade;
      console.log(`${quantidade} unidades removidas do estoque.`);
    } else {
      console.log("Quantidade inválida ou estoque insuficiente.");
    }
  }
}

const produto1 = new Produto("Camiseta", 29.99, 50);
const produto2 = new Produto("Tênis", 99.99, 30);
const produto3 = new Produto("Boné", 19.99, 100);

console.log("Produto 1:");
console.log("Nome:", produto1.nome);
console.log("Preço:", produto1.preco);
console.log("Quantidade em Estoque:", produto1.quantidadeEstoque);
console.log("Valor Total em Estoque:", produto1.calcularValorTotalEstoque());
console.log("\n");

produto1.adicionarEstoque(10);
console.log("Novo Estoque:", produto1.quantidadeEstoque);
console.log("Novo Valor Total em Estoque:", produto1.calcularValorTotalEstoque());
console.log("\n");

produto2.removerEstoque(5);
console.log("Novo Estoque:", produto2.quantidadeEstoque);
console.log("Novo Valor Total em Estoque:", produto2.calcularValorTotalEstoque());
console.log("\n");

produto3.removerEstoque(40);
console.log("Estoque:", produto3.quantidadeEstoque);
console.log("Valor Total em Estoque:", produto3.calcularValorTotalEstoque());
