// 14. Crie uma classe chamada "TriânguloRetângulo" com os atributos base e altura. Adicione um construtor para inicializar esses atributos. Implemente um método para calcular a hipotenusa do triângulo (Teorema de Pitágoras). Crie objetos de triângulos retângulos e calcule suas hipotenusas. 📐🔍

class TrianguloRetangulo {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }

  // Teorema de Pitágoras
  calcularHipotenusa() {
    return Math.sqrt(this.base ** 2 + this.altura ** 2);
  }
}

const triangulo1 = new TrianguloRetangulo(10, 24);
const triangulo2 = new TrianguloRetangulo(8, 15);

console.log("Triângulo 1:");
console.log("Base:", triangulo1.base);
console.log("Altura:", triangulo1.altura);
console.log("Hipotenusa:", triangulo1.calcularHipotenusa());
console.log("\n");

console.log("Triângulo 2:");
console.log("Base:", triangulo2.base);
console.log("Altura:", triangulo2.altura);
console.log("Hipotenusa:", triangulo2.calcularHipotenusa());
