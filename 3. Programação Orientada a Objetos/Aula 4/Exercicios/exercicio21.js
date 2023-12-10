// 21. Defina uma classe chamada "ProdutoEletrônico" com os atributos nome, preço e garantia em meses. Implemente um construtor para esta classe. Crie um método para verificar se o produto está na garantia com base na quantidade de meses desde a compra. Crie objetos de produtos eletrônicos e teste o método. 💻🔌🛡️

class ProdutoEletronico {
  constructor(nome, preco, garantiaMeses) {
    this.nome = nome;
    this.preco = preco;
    this.garantiaMeses = garantiaMeses;
    this.dataCompra = new Date();
  }

  estaNaGarantia() {
    const dataAtual = new Date();

    const diferencaMeses =
      (dataAtual.getFullYear() - this.dataCompra.getFullYear()) * 12 +
      (dataAtual.getMonth() - this.dataCompra.getMonth());

    return diferencaMeses <= this.garantiaMeses;
  }
}

const produto1 = new ProdutoEletronico("Notebook", 2500, 12);
const produto2 = new ProdutoEletronico("Smartphone", 800, 24);

console.log("Produto 1:");
console.log("Nome:", produto1.nome);
console.log("Preço:", produto1.preco);
console.log("Garantia em Meses:", produto1.garantiaMeses);
console.log("Está na Garantia?", produto1.estaNaGarantia());
console.log("\n");

console.log("Produto 2:");
console.log("Nome:", produto2.nome);
console.log("Preço:", produto2.preco);
console.log("Garantia em Meses:", produto2.garantiaMeses);
console.log("Está na Garantia?", produto2.estaNaGarantia());
