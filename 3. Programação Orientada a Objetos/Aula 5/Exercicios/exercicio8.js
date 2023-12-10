// 🎨 Exercício 8: Estúdio de Arte Digital
// Desenvolva uma classe EstudioArteDigital com atributos como nome, equipamentos e obras de arte. Inclua métodos para criarArteDigital() e exporObras().

class EstudioArteDigital {
  constructor(nome) {
    this.nome = nome;
    this.equipamentos = [];
    this.obrasDeArte = [];
  }

  criarArteDigital(nomeObra, software) {
    console.log(`Criando obra de arte digital '${nomeObra}' no ${this.nome} usando o software ${software}.`);
    this.obrasDeArte.push({ nome: nomeObra, software });
  }

  exporObras() {
    console.log(`Expondo obras de arte digitais no ${this.nome}:`);
    this.obrasDeArte.forEach((obra, index) => {
      console.log(`${index + 1}. ${obra.nome} (Criada com ${obra.software})`);
    });
  }

  adicionarEquipamento(nomeEquipamento) {
    this.equipamentos.push(nomeEquipamento);
    console.log(`${nomeEquipamento} foi adicionado ao estúdio ${this.nome}.`);
  }
}

const meuEstudio = new EstudioArteDigital("DigitalArtStudio");

meuEstudio.adicionarEquipamento("Tablet Gráfico");
meuEstudio.adicionarEquipamento("Computador de Alta Performance");

meuEstudio.criarArteDigital("Paisagem Futurista", "Photoshop");
meuEstudio.criarArteDigital("Retrato Digital", "Procreate");

meuEstudio.exporObras();
