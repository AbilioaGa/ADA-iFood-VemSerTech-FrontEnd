// 4. Defina uma classe chamada "Círculo" que tenha um atributo raio e métodos para calcular a área e o perímetro do círculo. Crie objetos de círculos com diferentes raios e exiba suas áreas e perímetros. ⭕📏📐

class Circulo {
  constructor(raio) {
    this.raio = raio;
  }

  calcularArea() {
    return Math.PI * this.raio ** 2;
  }

  calcularPerimetro() {
    return 2 * Math.PI * this.raio;
  }
}

const circulo1 = new Circulo(10);
const circulo2 = new Circulo(20);

console.log("Círculo 1:");
console.log("Raio:", circulo1.raio);
console.log("Área:", circulo1.calcularArea());
console.log("Perímetro:", circulo1.calcularPerimetro());
console.log("\n");

console.log("Círculo 2:");
console.log("Raio:", circulo2.raio);
console.log("Área:", circulo2.calcularArea());
console.log("Perímetro:", circulo2.calcularPerimetro());
