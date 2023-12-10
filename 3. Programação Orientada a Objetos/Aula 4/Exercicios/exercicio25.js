// 25. Defina uma classe chamada "Cachorro" com os atributos nome, raça e idade. Implemente um construtor para esta classe. Crie um método para latir (exibir uma mensagem de latido) e outro método para calcular a idade humana do cachorro com base na idade real. Crie objetos de cachorros e teste os métodos. 🐕🗣️🐶

class Cachorro {
  constructor(nome, raca, idade) {
    this.nome = nome;
    this.raca = raca;
    this.idade = idade;
  }

  latir() {
    console.log(`${this.nome} está latindo: Woof! Woof! 🐾`);
  }

  calcularIdadeHumana() {
    // Aproximação comum para converter a idade do cachorro para idade humana
    if (this.idade <= 2) {
      return this.idade * 10.5;
    } else {
      // Cada ano adicional é multiplicado por 4 (aproximação)
      return 2 * 10.5 + (this.idade - 2) * 4;
    }
  }
}

const cachorro1 = new Cachorro("Meg", "SRD", 3);
const cachorro2 = new Cachorro("Finn", "SRD", 1);

console.log("Cachorro 1:");
console.log("Nome:", cachorro1.nome);
console.log("Raça:", cachorro1.raca);
console.log("Idade:", cachorro1.idade, "anos");
cachorro1.latir();
console.log("Idade Humana:", cachorro1.calcularIdadeHumana());
console.log("\n");

console.log("Cachorro 2:");
console.log("Nome:", cachorro2.nome);
console.log("Raça:", cachorro2.raca);
console.log("Idade:", cachorro2.idade, "ano");
cachorro2.latir();
console.log("Idade Humana:", cachorro2.calcularIdadeHumana());
