// 32. Desenvolva uma classe chamada "Loja" com os atributos nome, endereço e lista de produtos. Implemente um construtor para esta classe. Crie métodos para adicionar produtos à loja e calcular o preço total dos produtos. Crie objetos de lojas e teste os métodos. 🏪🛒💰

class Loja {
  constructor(nome, endereco) {
    this.nome = nome;
    this.endereco = endereco;
    this.produtos = [];
  }

  adicionarProduto(produto) {
    this.produtos.push(produto);
    console.log(`${produto.nome} adicionado à loja ${this.nome}.`);
  }

  calcularPrecoTotal() {
    let precoTotal = 0;
    for (const produto of this.produtos) {
      precoTotal += produto.preco;
    }
    return precoTotal;
  }
}

class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}

const loja1 = new Loja("Supermercado A", "Rua 9, 999");
const loja2 = new Loja("Loja de Eletrônicos A", "Avenida 6, 666");

const produto1 = new Produto("Arroz", 5.99);
const produto2 = new Produto("TV LED", 799.99);

loja1.adicionarProduto(produto1);
loja1.adicionarProduto(produto2);

loja2.adicionarProduto(new Produto("Smartphone", 499.99));
loja2.adicionarProduto(new Produto("Notebook", 1099.99));

console.log("Loja 1 - Preço Total:", loja1.calcularPrecoTotal().toFixed(2));
console.log("Loja 2 - Preço Total:", loja2.calcularPrecoTotal().toFixed(2));
