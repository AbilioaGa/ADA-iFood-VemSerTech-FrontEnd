// 🚀 Exercício 1: Explorador Espacial
// Crie uma classe NaveEspacial com atributos como nome, velocidade máxima e capacidade de tripulação. Implemente métodos como acelerar() e adicionarTripulante().

class NaveEspacial {
  constructor(nome, velocidadeMaxima, capacidadeTripulacao) {
    this.nome = nome;
    this.velocidadeMaxima = velocidadeMaxima;
    this.capacidadeTripulacao = capacidadeTripulacao;
    this.tripulantes = [];
    this.velocidadeAtual = 0;
  }

  acelerar(aceleracao) {
    if (this.velocidadeAtual + aceleracao <= this.velocidadeMaxima) {
      this.velocidadeAtual += aceleracao;
      console.log(`${this.nome} acelerou para ${this.velocidadeAtual} km/h.`);
    } else {
      console.log(`A velocidade máxima (${this.velocidadeMaxima} km/h) foi atingida.`);
    }
  }

  adicionarTripulante(nomeTripulante) {
    if (this.tripulantes.length < this.capacidadeTripulacao) {
      this.tripulantes.push(nomeTripulante);
      console.log(`${nomeTripulante} foi adicionado à tripulação de ${this.nome}.`);
    } else {
      console.log(`A capacidade máxima de tripulação (${this.capacidadeTripulacao}) foi atingida.`);
    }
  }
}

const minhaNave = new NaveEspacial("Space X", 10000, 4);

minhaNave.acelerar(5000);
minhaNave.adicionarTripulante("Comandante");
minhaNave.adicionarTripulante("Piloto");
minhaNave.adicionarTripulante("Engenheiro");
minhaNave.adicionarTripulante("Navegador");
minhaNave.adicionarTripulante("Médico");
minhaNave.acelerar(6000);
