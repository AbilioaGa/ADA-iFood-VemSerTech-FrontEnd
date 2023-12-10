// 🚀 Exercício 6: Clube de Astronomia
// Crie uma classe ClubeAstronomia com atributos como nome, local e membros. Desenvolva métodos para realizarObservacao() e organizarEventosEstelares().

class ClubeAstronomia {
  constructor(nome, local) {
    this.nome = nome;
    this.local = local;
    this.membros = [];
  }

  realizarObservacao(observacao) {
    console.log(`Realizando observação astronômica: ${observacao}`);
  }

  organizarEventosEstelares() {
    console.log(`Organizando eventos estelares no ${this.nome}, localizado em ${this.local}.`);
    console.log("Membros participantes:");
    this.membros.forEach((membro, index) => {
      console.log(`${index + 1}. ${membro}`);
    });
  }

  adicionarMembro(nomeMembro) {
    this.membros.push(nomeMembro);
    console.log(`${nomeMembro} foi adicionado como membro do ${this.nome}.`);
  }
}

// Exemplo de uso
const meuClubeAstronomia = new ClubeAstronomia("Astronomia na Via Láctea", "Observatório Celestial");

meuClubeAstronomia.adicionarMembro("Abilio");
meuClubeAstronomia.adicionarMembro("Jade");
meuClubeAstronomia.adicionarMembro("Alphonse");

meuClubeAstronomia.realizarObservacao("Supernova na constelação de Órion");
meuClubeAstronomia.organizarEventosEstelares();
