// Crie uma classe chamada "Jogo" com os atributos nome, gênero e classificação etária. Implemente um construtor para esta classe. Crie objetos de jogos e exiba suas informações. 🎮🕹️📢

class Jogo {
  constructor(nome, genero, classificacaoEtaria) {
    this.nome = nome;
    this.genero = genero;
    this.classificacaoEtaria = classificacaoEtaria;
  }
}

const jogo1 = new Jogo("Counter-Strike 2", "Ação", "Não recomendado para menores de 16 anos");
const jogo2 = new Jogo("Path of Exile", " Ação/RPG", "Não recomendado para menores de 16 anos");

console.log("Jogo 1:");
console.log("Nome:", jogo1.nome);
console.log("Gênero:", jogo1.genero);
console.log("Classificação Etária:", jogo1.classificacaoEtaria);
console.log("\n");

console.log("Jogo 2:");
console.log("Nome:", jogo2.nome);
console.log("Gênero:", jogo2.genero);
console.log("Classificação Etária:", jogo2.classificacaoEtaria);
