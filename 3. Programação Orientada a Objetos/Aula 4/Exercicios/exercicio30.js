// 30. Defina uma classe chamada "Casa" com os atributos endereço, número de quartos e valor. Implemente um construtor para esta classe. Crie um método para calcular o preço por metro quadrado da casa. Crie objetos de casas e teste o método de cálculo de preço. 🏠📐💲

class Casa {
  constructor(endereco, numeroQuartos, valor) {
    this.endereco = endereco;
    this.numeroQuartos = numeroQuartos;
    this.valor = valor;
  }

  calcularPrecoPorMetroQuadrado(area) {
    return this.valor / area;
  }
}

const casa1 = new Casa("Rua 9, 999", 3, 350000);
const casa2 = new Casa("Avenida 6, 666", 5, 555000);

const areaCasa1 = 150; // metros quadrados
const areaCasa2 = 200; // metros quadrados

console.log("Casa 1:");
console.log("Endereço:", casa1.endereco);
console.log("Número de Quartos:", casa1.numeroQuartos);
console.log("Preço por Metro Quadrado:", casa1.calcularPrecoPorMetroQuadrado(areaCasa1).toFixed(2));
console.log("\n");

console.log("Casa 2:");
console.log("Endereço:", casa2.endereco);
console.log("Número de Quartos:", casa2.numeroQuartos);
console.log("Preço por Metro Quadrado:", casa2.calcularPrecoPorMetroQuadrado(areaCasa2).toFixed(2));
