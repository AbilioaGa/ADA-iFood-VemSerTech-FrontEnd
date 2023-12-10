// Exercício 5: Crie uma classe chamada "Retângulo" com os atributos "largura" e "altura" e um método chamado "calcularÁrea" que retorna a área do retângulo.
class Retangulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea() {
    return this.largura * this.altura;
  }
}

const retangulo = new Retangulo(5, 10);
console.log("Largura do retângulo:", retangulo.largura);
console.log("Altura do retângulo:", retangulo.altura);
console.log("Área do retângulo:", retangulo.calcularArea());