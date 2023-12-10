// 🐉 Exercício 2: Mundo dos Dragões
// Desenvolva uma classe Dragao com atributos como nome, cor, elemento (fogo, gelo, etc.) e nível de saúde. Inclua métodos como voar(), cuspirFogo() e comer().

class Dragao {
  constructor(nome, cor, elemento, nivelSaude) {
    this.nome = nome;
    this.cor = cor;
    this.elemento = elemento;
    this.nivelSaude = nivelSaude;
  }

  voar() {
    console.log(`${this.nome} está voando pelos céus.`);
  }

  cuspirFogo() {
    if (this.nivelSaude > 0) {
      console.log(`${this.nome} cuspiu fogo!`);
      this.nivelSaude -= 10;
    } else {
      console.log(`${this.nome} está muito fraco para cuspir fogo.`);
    }
  }

  comer() {
    console.log(`${this.nome} está se alimentando para recuperar energia.`);
    this.nivelSaude += 20;
  }
}

const meuDragao = new Dragao("Fúria da Noite", "Preto", "Fogo", 100);

meuDragao.voar();
meuDragao.cuspirFogo();
meuDragao.cuspirFogo();
meuDragao.comer();
meuDragao.cuspirFogo();
console.log(`Nível de saúde de ${meuDragao.nome}: ${meuDragao.nivelSaude}`);
