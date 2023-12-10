// 34. Crie uma classe chamada "Restaurante" com os atributos nome, tipo de cozinha e lista de pratos do menu. Implemente um construtor para esta classe. Crie métodos para adicionar pratos ao menu e exibir o menu completo. Crie objetos de restaurantes e teste os métodos. 🍽️🍔🍝

class Restaurante {
  constructor(nome, tipoCozinha) {
    this.nome = nome;
    this.tipoCozinha = tipoCozinha;
    this.menu = [];
  }

  adicionarPrato(prato, preco) {
    this.menu.push({ prato, preco });
    console.log(`${prato} adicionado ao menu de ${this.nome}.`);
  }

  exibirMenu() {
    console.log(`Menu de ${this.nome} (${this.tipoCozinha}):`);
    for (const item of this.menu) {
      console.log(`${item.prato} - R$ ${item.preco.toFixed(2)}`);
    }
  }
}

const restaurante1 = new Restaurante("Italiano", "Italiana");
const restaurante2 = new Restaurante("Oriental", "Japonesa");

restaurante1.adicionarPrato("Pizza Margherita", 28.99);
restaurante1.adicionarPrato("Pasta Carbonara", 22.5);

restaurante2.adicionarPrato("Sushi Misto", 35.99);
restaurante2.adicionarPrato("Yakitori", 18.75);
console.log("\n");

restaurante1.exibirMenu();
console.log("\n");
restaurante2.exibirMenu();
