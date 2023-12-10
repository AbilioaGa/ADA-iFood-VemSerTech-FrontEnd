// 🏞️ Exercício 4: Parque Ecológico Virtual
// Crie uma classe ParqueEcológico com atributos como nome, localização e tipos de fauna e flora. Implemente métodos para adicionarEspécie() e organizarTourVirtual().

class ParqueEcológico {
  constructor(nome, localizacao) {
    this.nome = nome;
    this.localizacao = localizacao;
    this.fauna = [];
    this.flora = [];
  }

  adicionarEspecie(tipo, nomeEspecie) {
    if (tipo === 'fauna') {
      this.fauna.push(nomeEspecie);
      console.log(`${nomeEspecie} foi adicionado à lista de fauna do ${this.nome}.`);
    } else if (tipo === 'flora') {
      this.flora.push(nomeEspecie);
      console.log(`${nomeEspecie} foi adicionado à lista de flora do ${this.nome}.`);
    } else {
      console.log(`Tipo inválido. Use 'fauna' ou 'flora' para adicionar espécies.`);
    }
  }

  organizarTourVirtual() {
    console.log(`Iniciando tour virtual pelo ${this.nome}.`);
    console.log(`Localização: ${this.localizacao}`);
    console.log('Fauna:');
    this.fauna.forEach((especie, index) => {
      console.log(`${index + 1}. ${especie}`);
    });
    console.log('Flora:');
    this.flora.forEach((especie, index) => {
      console.log(`${index + 1}. ${especie}`);
    });
  }
}

const meuParque = new ParqueEcológico('Parque da Natureza', 'Floresta Amazônica');

meuParque.adicionarEspecie('fauna', 'Onça Pintada');
meuParque.adicionarEspecie('fauna', 'Tucano');
meuParque.adicionarEspecie('flora', 'Orquídea');
meuParque.adicionarEspecie('flora', 'Jatobá');

meuParque.organizarTourVirtual();