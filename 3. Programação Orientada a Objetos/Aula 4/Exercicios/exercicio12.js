// Crie uma classe chamada "Casa" com os atributos endereço, número de quartos e área em metros quadrados. Adicione um construtor para inicializar esses atributos. Crie objetos de casas e imprima seus detalhes. 🏠🛏️📐

class Casa {
  constructor(endereco, numeroQuartos, area) {
    this.endereco = endereco;
    this.numeroQuartos = numeroQuartos;
    this.area = area;
  }
}

const casa1 = new Casa("Rua 9, 999", 9, 900);
const casa2 = new Casa("Avenida 6, 666", 6, 600);

console.log("Casa 1:");
console.log("Endereço:", casa1.endereco);
console.log("Número de Quartos:", casa1.numeroQuartos);
console.log("Área (m²):", casa1.area);
console.log("\n");

console.log("Casa 2:");
console.log("Endereço:", casa2.endereco);
console.log("Número de Quartos:", casa2.numeroQuartos);
console.log("Área (m²):", casa2.area);
