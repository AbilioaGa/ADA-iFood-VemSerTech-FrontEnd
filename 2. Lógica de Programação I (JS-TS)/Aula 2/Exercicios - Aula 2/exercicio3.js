// Exercício 3: Encontrar o maior valor de um vetor
// Dado um vetor valores com 6 elementos, encontre o maior valor presente no vetor e armazene-o na variável maiorValor. Utilize o índice para acessar os valores do vetor e realizar as comparações com Math.max.

const valores = [25, 18, 32, 12, 20, 28];

const maiorValor = Math.max(...valores);

console.log("O maior valor no vetor é:", maiorValor);
