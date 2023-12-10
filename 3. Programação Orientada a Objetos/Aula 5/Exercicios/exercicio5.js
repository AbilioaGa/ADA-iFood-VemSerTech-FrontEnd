// 🍔 Exercício 5: Simulador de Restaurante
// Elabore uma classe Restaurante com atributos como nome, tipo de culinária e menu. Inclua métodos como adicionarPratoNoMenu() e receberPedido().

class Restaurante {
  constructor(nome, tipoCulinaria) {
    this.nome = nome;
    this.tipoCulinaria = tipoCulinaria;
    this.menu = [];
  }

  adicionarPratoNoMenu(prato, preco) {
    this.menu.push({ prato, preco });
    console.log(`${prato} foi adicionado ao menu do ${this.nome} por ${preco} reais.`);
  }

  receberPedido(prato) {
    const pedidoEncontrado = this.menu.find((item) => item.prato === prato);

    if (pedidoEncontrado) {
      console.log(`Pedido recebido: ${prato}. Preço: ${pedidoEncontrado.preco} reais.`);
    } else {
      console.log(`${prato} não está disponível no menu.`);
    }
  }
}

const meuRestaurante = new Restaurante("La Delícia", "Italiana");

meuRestaurante.adicionarPratoNoMenu("Peru na cerveja", 35.99);
meuRestaurante.adicionarPratoNoMenu("Tender com maçãs caramelizadas", 25.99);
meuRestaurante.adicionarPratoNoMenu("Frango assado", 15.99);

meuRestaurante.receberPedido("Peru na cerveja");
meuRestaurante.receberPedido("Lasanha");
