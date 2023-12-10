// 17. Crie uma classe chamada "Cafeteira" com os atributos marca, capacidade e quantidade de café. Implemente um construtor para inicializar esses atributos. Crie métodos para encher a cafeteira de café e para fazer uma xícara de café. Teste esses métodos em objetos de cafeteira. ☕💼

class Cafeteira {
  constructor(marca, capacidade) {
    this.marca = marca;
    this.capacidade = capacidade;
    this.quantidadeCafe = 0;
  }

  encherCafeteira() {
    this.quantidadeCafe = this.capacidade;
    console.log(`A cafeteira foi enchida. Quantidade de café: ${this.quantidadeCafe} xícaras.`);
  }

  fazerCafe() {
    if (this.quantidadeCafe > 0) {
      this.quantidadeCafe--;
      console.log("Uma xícara de café foi feita. Aproveite!");
    } else {
      console.log("A cafeteira está vazia. Encha antes de fazer mais café.");
    }
  }
}

const cafeteira1 = new Cafeteira("CaféMaster", 4);

console.log("Cafeteira 1:");
console.log("Marca:", cafeteira1.marca);
console.log("Capacidade:", cafeteira1.capacidade);
console.log("\n");

cafeteira1.encherCafeteira();
console.log("\n");

cafeteira1.fazerCafe();
cafeteira1.fazerCafe();
