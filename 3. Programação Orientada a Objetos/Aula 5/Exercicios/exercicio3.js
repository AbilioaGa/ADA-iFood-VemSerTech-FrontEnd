// 🎮 Exercício 3: Console de Jogos Retro
// Projete uma classe ConsoleRetro com atributos como nome, ano de lançamento e jogos disponíveis. Adicione métodos para adicionarJogo() e jogar().

class ConsoleRetro {
  constructor(nome, anoLancamento) {
    this.nome = nome;
    this.anoLancamento = anoLancamento;
    this.jogosDisponiveis = [];
  }

  adicionarJogo(nomeJogo) {
    this.jogosDisponiveis.push(nomeJogo);
    console.log(`${nomeJogo} foi adicionado à lista de jogos do ${this.nome}.`);
  }

  jogar(nomeJogo) {
    if (this.jogosDisponiveis.includes(nomeJogo)) {
      console.log(`Iniciando o jogo ${nomeJogo} no ${this.nome}.`);
    } else {
      console.log(`O jogo ${nomeJogo} não está disponível para o ${this.nome}.`);
    }
  }
}

const meuConsole = new ConsoleRetro("Super Retro 10000", 1990);

meuConsole.adicionarJogo("Metal Gear Solid");
meuConsole.adicionarJogo("Street Fighter 2");
meuConsole.adicionarJogo("007 Goldeneye");

meuConsole.jogar("Super Mario Bros");
meuConsole.jogar("Sonic the Hedgehog");
