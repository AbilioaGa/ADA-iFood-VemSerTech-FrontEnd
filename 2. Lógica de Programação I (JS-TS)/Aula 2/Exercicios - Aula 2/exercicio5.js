// Exercício 5: Média dos elementos de uma matriz
// Dada uma matriz notas com 4 linhas e 2 colunas, calcule a média aritmética de todos os valores e armazene o resultado na variável media. Utilize o índice para acessar os valores da matriz e realizar os cálculos.

const notas = [
  [17, 28, 11],
  [46, 39, 44],
  [35, 57, 44],
  [48, 39, 88]
];

let soma = 0;
let quantidadeDeElementos = 0;

for (let i = 0; i < notas.length; i++) {
  for (let j = 0; j < notas[i].length; j++) {
    soma += notas[i][j];
    quantidadeDeElementos++;
  }
}

const media = soma / quantidadeDeElementos;

console.log("A média das notas é:", media);
