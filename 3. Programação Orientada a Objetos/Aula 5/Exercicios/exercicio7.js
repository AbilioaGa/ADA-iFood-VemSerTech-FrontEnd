// 🏰 Exercício 7: Construtor de Castelos
// Projete uma classe ConstrutorCastelos com atributos como nome, estilo arquitetônico e materiais usados. Implemente métodos para construirTorre() e adicionarAposentos().

class ConstrutorCastelos {
  constructor(nome, estiloArquitetonico) {
    this.nome = nome;
    this.estiloArquitetonico = estiloArquitetonico;
    this.materiaisUsados = [];
  }

  construirTorre(altura, material) {
    console.log(`Construindo uma torre no ${this.nome} com ${altura} metros de altura usando ${material}.`);
    this.materiaisUsados.push(material);
  }

  adicionarAposentos(quantidade, tipo) {
    console.log(`Adicionando ${quantidade} aposentos do tipo ${tipo} no ${this.nome}.`);
  }
}

const meuConstrutor = new ConstrutorCastelos("Castelo Encantado", "Gótico");

meuConstrutor.construirTorre(20, "Pedra");
meuConstrutor.construirTorre(15, "Madeira");

meuConstrutor.adicionarAposentos(5, "Quarto Real");
meuConstrutor.adicionarAposentos(3, "Salão Nobre");
