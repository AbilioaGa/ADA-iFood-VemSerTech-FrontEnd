// Exercício 1: Soma dos elementos de um vetor
// Dado um vetor `numeros` com 5 elementos, calcule a soma de todos os valores e armazene o resultado na variável `soma`. Utilize o índice para acessar os valores do vetor e realizar os cálculos.

const numeros = [10, 5, 8, 12, 3, 19];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log("A soma dos elementos do vetor é:", soma);
