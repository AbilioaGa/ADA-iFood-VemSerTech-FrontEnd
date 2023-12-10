// 27. Desenvolva uma classe chamada "Relógio" com os atributos hora, minuto e segundo. Implemente um construtor para esta classe. Crie métodos para ajustar o relógio, adicionar um segundo e exibir a hora atual. Crie objetos de relógio e teste os métodos. ⏰🕰️🕒

class Relogio {
  constructor(hora, minuto, segundo) {
    this.hora = hora;
    this.minuto = minuto;
    this.segundo = segundo;
  }

  ajustarRelogio(hora, minuto, segundo) {
    this.hora = hora;
    this.minuto = minuto;
    this.segundo = segundo;
  }

  adicionarSegundo() {
    this.segundo++;

    if (this.segundo === 60) {
      this.segundo = 0;
      this.minuto++;

      if (this.minuto === 60) {
        this.minuto = 0;
        this.hora++;

        if (this.hora === 24) {
          this.hora = 0;
        }
      }
    }
  }

  exibirHoraAtual() {
    console.log(`Hora Atual: ${this.hora}:${this.minuto}:${this.segundo}`);
  }
}

const relogio1 = new Relogio(19, 45, 59);
const relogio2 = new Relogio(23, 59, 59);

console.log("Relógio 1:");
relogio1.exibirHoraAtual();
relogio1.adicionarSegundo();
relogio1.exibirHoraAtual();
relogio1.ajustarRelogio(6, 15, 59);
relogio1.exibirHoraAtual();
console.log("\n");

console.log("Relógio 2:");
relogio2.exibirHoraAtual();
relogio2.adicionarSegundo();
relogio2.exibirHoraAtual();
relogio2.adicionarSegundo();
relogio2.exibirHoraAtual();
