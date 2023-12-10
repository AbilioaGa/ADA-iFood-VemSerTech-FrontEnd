// 35. Defina uma classe chamada "Viagem" com os atributos destino, data de partida e data de retorno. Implemente um construtor para esta classe. Crie um método para calcular a duração da viagem em dias. Crie objetos de viagens e teste o método de cálculo de duração. ✈️🗓️🌍

class Viagem {
  constructor(destino, dataPartida, dataRetorno) {
    this.destino = destino;
    this.dataPartida = new Date(dataPartida);
    this.dataRetorno = new Date(dataRetorno);
  }

  calcularDuracao() {
    const umDiaEmMilissegundos = 24 * 60 * 60 * 1000; // 1 dia em milissegundos
    const diffEmMilissegundos = this.dataRetorno - this.dataPartida;
    const duracaoEmDias = Math.ceil(diffEmMilissegundos / umDiaEmMilissegundos);
    return duracaoEmDias;
  }
}

const viagem1 = new Viagem("Logo ali", "2023-12-15", "2023-12-20");
const viagem2 = new Viagem("Logo lá", "2023-12-15", "2023-12-25");

console.log(`Viagem para ${viagem1.destino}: ${viagem1.calcularDuracao()} dias`);
console.log(`Viagem para ${viagem2.destino}: ${viagem2.calcularDuracao()} dias`);
