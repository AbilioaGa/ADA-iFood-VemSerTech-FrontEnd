// Exercício 2: Média dos elementos de um vetor
// Dado um vetor notas com 4 elementos, calcule a média aritmética de todos os valores e armazene o resultado na variável media. Utilize o índice para acessar os valores do vetor e realizar os cálculos.

const notas = [17, 28, 39, 96, 55];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

const media = soma / notas.length;

console.log("A média das notas é:", media);
