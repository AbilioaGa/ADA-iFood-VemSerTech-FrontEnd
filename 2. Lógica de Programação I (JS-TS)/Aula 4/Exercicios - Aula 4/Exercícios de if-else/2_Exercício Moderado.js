// Escreva um programa em JavaScript que verifica se um número é par ou ímpar. Use a estrutura if-else para realizar essa verificação.

function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
      console.log("O número é par.");
  } else {
      console.log("O número é ímpar.");
  }
}

var numeroExemplo = 7;
verificarParOuImpar(numeroExemplo);
