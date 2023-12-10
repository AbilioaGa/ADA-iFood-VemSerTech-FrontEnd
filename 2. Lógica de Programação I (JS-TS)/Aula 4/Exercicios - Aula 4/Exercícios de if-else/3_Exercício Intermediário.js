// Escreva um programa em JavaScript que verifica se um número é divisível por 3 e por 5 ao mesmo tempo. Use a estrutura if-else para realizar essa verificação.

function verificarDivisibilidadePor3e5(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) {
      console.log("O número é divisível por 3 e por 5.");
  } else {
      console.log("O número não é divisível por 3 e por 5 ao mesmo tempo.");
  }
}

var numeroExemplo = 15;
verificarDivisibilidadePor3e5(numeroExemplo);
