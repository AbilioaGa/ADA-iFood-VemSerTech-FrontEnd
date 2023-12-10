// 🌊 Exercício 9: Explorador de Oceano Profundo
// Crie uma classe ExploradorOceanoProfundo com atributos como nome, submarino e descobertas submarinas. Implemente métodos para mergulhar(), coletarAmostras() e estudarCriaturasMarinhas().

class ExploradorOceanoProfundo {
  constructor(nome, submarino) {
    this.nome = nome;
    this.submarino = submarino;
    this.descobertasSubmarinas = [];
  }

  mergulhar(profundidade) {
    console.log(`${this.nome} está mergulhando no oceano profundo até ${profundidade} metros.`);
  }

  coletarAmostras(local) {
    console.log(`${this.nome} está coletando amostras submarinas em ${local}.`);
    this.descobertasSubmarinas.push(`Amostras coletadas em ${local}`);
  }

  estudarCriaturasMarinhas(criatura) {
    console.log(`${this.nome} está estudando a criatura marinha: ${criatura}.`);
    this.descobertasSubmarinas.push(`Nova criatura marinha estudada: ${criatura}`);
  }
}

const meuSubmarino = { modelo: "Explorador 9000", capacidade: "4 pessoas" };
const meuExplorador = new ExploradorOceanoProfundo("Oceanógrafo 42", meuSubmarino);

meuExplorador.mergulhar(500);
meuExplorador.coletarAmostras("Fossa das Marianas");
meuExplorador.estudarCriaturasMarinhas("Lula Gigante");

console.log(`Descobertas submarinas de ${meuExplorador.nome}:`);
meuExplorador.descobertasSubmarinas.forEach((descoberta, index) => {
  console.log(`${index + 1}. ${descoberta}`);
});
