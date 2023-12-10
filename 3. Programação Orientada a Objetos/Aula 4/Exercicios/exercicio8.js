// 8. Crie uma classe chamada "Triângulo" com os atributos lado1, lado2 e lado3. Adicione um construtor para inicializar esses atributos. Implemente um método para verificar se os lados formam um triângulo válido (a soma de dois lados deve ser maior que o terceiro) e outro método para calcular a área do triângulo. Teste com diferentes conjuntos de lados. 📐🔍

class Triangulo {
  constructor(lado1, lado2, lado3) {
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;
  }

  verificarTriangulo() {
    return (
      this.lado1 + this.lado2 > this.lado3 &&
      this.lado1 + this.lado3 > this.lado2 &&
      this.lado2 + this.lado3 > this.lado1
    );
  }

  // fórmula de Heron
  calcularArea() {
    if (this.verificarTriangulo()) {
      const semiPerimetro = (this.lado1 + this.lado2 + this.lado3) / 2;
      const area = Math.sqrt(
        semiPerimetro * (semiPerimetro - this.lado1) * (semiPerimetro - this.lado2) * (semiPerimetro - this.lado3)
      );
      return area;
    } else {
      return "Não é um triângulo válido";
    }
  }
}

const triangulo1 = new Triangulo(2, 4, 4);
const triangulo2 = new Triangulo(3, 2, 1);

console.log("Triângulo 1:");
console.log("É um triângulo válido?", triangulo1.verificarTriangulo());
console.log("Área:", triangulo1.calcularArea());
console.log("\n");

console.log("Triângulo 2:");
console.log("É um triângulo válido?", triangulo2.verificarTriangulo());
console.log("Área:", triangulo2.calcularArea());
