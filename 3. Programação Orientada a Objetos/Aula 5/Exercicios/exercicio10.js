// 🍦 Exercício 10: Sorveteria Mágica
// Elabore uma classe SorveteriaMagica com atributos como nome, sabores e varinhas mágicas. Desenvolva métodos para criarSorveteMagico() e realizarFeitiçosGelados().

class SorveteriaMagica {
  constructor(nome) {
    this.nome = nome;
    this.sabores = [];
    this.varinhasMagicas = [];
  }

  criarSorveteMagico(sabor, cobertura) {
    console.log(`Criando sorvete mágico de ${sabor} com cobertura de ${cobertura} na ${this.nome}.`);
    this.sabores.push({ sabor, cobertura });
  }

  realizarFeiticosGelados(feitico) {
    console.log(`Realizando feitiço gelado: ${feitico}`);
    console.log(`Os sorvetes mágicos estão mais gelados do que nunca!`);
  }

  adicionarVarinhaMagica(varinha) {
    this.varinhasMagicas.push(varinha);
    console.log(`${varinha} foi adicionada às varinhas mágicas da ${this.nome}.`);
  }
}

const minhaVarinha = "Varinha de Gelo Infinito";
const minhaSorveteria = new SorveteriaMagica("MagiaGelada");

minhaSorveteria.adicionarVarinhaMagica(minhaVarinha);
minhaSorveteria.criarSorveteMagico("Morango", "Chantilly");
minhaSorveteria.realizarFeiticosGelados("Congelamento Instantâneo");
minhaSorveteria.criarSorveteMagico("Chocolate", "Granulado");

console.log(`Sabores disponíveis na ${minhaSorveteria.nome}:`);
minhaSorveteria.sabores.forEach((sabor, index) => {
  console.log(`${index + 1}. Sorvete de ${sabor.sabor} com cobertura de ${sabor.cobertura}`);
});
