// 11. Crie uma classe chamada "Animal" com os atributos nome, espécie e idade. Implemente um construtor para esta classe. Crie objetos de animais e exiba suas informações. 🐶🐱🦁

class Animal {
  constructor(nome, especie, idade) {
    this.nome = nome;
    this.especie = especie;
    this.idade = idade;
  }
}

const animal1 = new Animal("Arya", "Gato", 3);

console.log("Animal 1:");
console.log("Nome:", animal1.nome);
console.log("Espécie:", animal1.especie);
console.log("Idade:", animal1.idade);
