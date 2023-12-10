// 28. Crie uma classe chamada "CarroEsportivo" com os atributos marca, modelo, ano e velocidade máxima. Implemente um construtor para esta classe. Crie métodos para acelerar e frear o carro, e para exibir a velocidade atual. Crie objetos de carros esportivos e teste os métodos. 🚗💨🏁

class CarroEsportivo {
  constructor(marca, modelo, ano, velocidadeMaxima) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.velocidadeMaxima = velocidadeMaxima;
    this.velocidadeAtual = 0;
  }

  acelerar(aceleracao) {
    this.velocidadeAtual += aceleracao;

    if (this.velocidadeAtual > this.velocidadeMaxima) {
      this.velocidadeAtual = this.velocidadeMaxima;
      console.log(`${this.marca} ${this.modelo} atingiu a velocidade máxima de ${this.velocidadeMaxima} km/h.`);
    } else {
      console.log(`${this.marca} ${this.modelo} acelerou para ${this.velocidadeAtual} km/h.`);
    }
  }

  frear(desaceleracao) {
    this.velocidadeAtual -= desaceleracao;

    if (this.velocidadeAtual < 0) {
      this.velocidadeAtual = 0;
      console.log(`${this.marca} ${this.modelo} parou completamente.`);
    } else {
      console.log(`${this.marca} ${this.modelo} reduziu para ${this.velocidadeAtual} km/h.`);
    }
  }

  exibirVelocidadeAtual() {
    console.log(`${this.marca} ${this.modelo} está atualmente a ${this.velocidadeAtual} km/h.`);
  }
}

const carro1 = new CarroEsportivo("Audi", "RS6", 2023, 280);
const carro2 = new CarroEsportivo("Nissan", "skyline GTR r34", 2007, 250);

console.log("Carro 1:");
carro1.acelerar(50);
carro1.exibirVelocidadeAtual();
carro1.frear(20);
carro1.exibirVelocidadeAtual();
console.log("\n");

console.log("Carro 2:");
carro2.acelerar(40);
carro2.exibirVelocidadeAtual();
carro2.frear(30);
carro2.exibirVelocidadeAtual();
