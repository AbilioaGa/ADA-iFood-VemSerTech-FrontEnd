// 22. Crie uma classe chamada "Hotel" com os atributos nome, localização e lista de quartos. Implemente um construtor para inicializar esses atributos e métodos para reservar quartos e verificar a disponibilidade. Crie objetos de hotéis e teste os métodos. 🏨🌆🛏️

class Hotel {
  constructor(nome, localizacao, totalQuartos) {
    this.nome = nome;
    this.localizacao = localizacao;
    this.listaQuartos = Array.from({ length: totalQuartos }, (_, index) => ({ numero: index + 1, reservado: false }));
  }

  reservarQuarto(numeroQuarto) {
    const quarto = this.listaQuartos.find((quarto) => quarto.numero === numeroQuarto);

    if (quarto) {
      if (!quarto.reservado) {
        quarto.reservado = true;
        console.log(`Quarto ${numeroQuarto} reservado no hotel ${this.nome}.`);
      } else {
        console.log(`O quarto ${numeroQuarto} já está reservado.`);
      }
    } else {
      console.log(`Quarto ${numeroQuarto} não encontrado no hotel ${this.nome}.`);
    }
  }

  verificarDisponibilidade() {
    const quartosDisponiveis = this.listaQuartos.filter((quarto) => !quarto.reservado);
    console.log(`No hotel ${this.nome}, há ${quartosDisponiveis.length} quartos disponíveis.`);
    console.log("Números dos quartos disponíveis:", quartosDisponiveis.map((quarto) => quarto.numero).join(", "));
  }
}

const hotel1 = new Hotel("Hotel Lux", "Centro", 10);
const hotel2 = new Hotel("Beach Resort", "Praia", 20);

console.log("Hotel 1:");
console.log("Nome:", hotel1.nome);
console.log("Localização:", hotel1.localizacao);
console.log("\n");

hotel1.reservarQuarto(2);
hotel1.reservarQuarto(5);
hotel1.verificarDisponibilidade();
console.log("\n");

console.log("Hotel 2:");
console.log("Nome:", hotel2.nome);
console.log("Localização:", hotel2.localizacao);
console.log("\n");

hotel2.reservarQuarto(15);
hotel2.reservarQuarto(8);
hotel2.reservarQuarto(15);
hotel2.verificarDisponibilidade();
