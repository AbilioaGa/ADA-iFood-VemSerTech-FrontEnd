// Exercício 2: Crie um objeto literal representando um círculo com os atributos raio e calcularÁrea (um método que calcula a área do círculo).
const circulo = {
  raio: 5,
  calcularArea: function() {
    return Math.PI * this.raio * this.raio;
  }
}
console.log("Raio do círculo:", circulo.raio);
console.log("Área do círculo:", circulo.calcularArea())