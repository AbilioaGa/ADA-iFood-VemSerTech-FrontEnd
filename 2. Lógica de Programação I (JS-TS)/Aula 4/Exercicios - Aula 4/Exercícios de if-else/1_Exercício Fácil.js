// Escreva um programa em JavaScript que verifica se um número é positivo, negativo ou igual a zero. Use a estrutura if-else para realizar essa verificação.

function verificarSinal(numero) {
  if (numero > 0) {
      console.log("O número é positivo.");
  } else if (numero < 0) {
      console.log("O número é negativo.");
  } else {
      console.log("O número é igual a zero.");
  }
}

var numeroExemplo = 42;
verificarSinal(numeroExemplo);
