// 6. Crie uma classe chamada "Retângulo" com os atributos largura e altura. Adicione um construtor para inicializar esses atributos. Implemente um método para calcular a área do retângulo. Crie objetos de retângulos com diferentes dimensões e exiba suas áreas. 🟩📏

class Retangulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea() {
    return this.largura * this.altura;
  }
}

const retangulo1 = new Retangulo(5, 10);
const retangulo2 = new Retangulo(8, 6);

console.log("Retângulo 1:");
console.log("Largura:", retangulo1.largura);
console.log("Altura:", retangulo1.altura);
console.log("Área:", retangulo1.calcularArea());
console.log("\n");

console.log("Retângulo 2:");
console.log("Largura:", retangulo2.largura);
console.log("Altura:", retangulo2.altura);
console.log("Área:", retangulo2.calcularArea());
