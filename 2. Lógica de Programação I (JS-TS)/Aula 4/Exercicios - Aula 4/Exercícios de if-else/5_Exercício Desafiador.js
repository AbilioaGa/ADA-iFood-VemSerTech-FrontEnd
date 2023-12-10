// Escreva um programa em JavaScript que verifica se um número é um palíndromo. Use a estrutura if-else para realizar essa verificação. Um palíndromo é um número que permanece o mesmo quando seus dígitos são invertidos.
// Dica: para inverter um numero utilize: parseInt(numero.toString().split('').reverse().join(''))

function verificarPalindromo(numero) {
  var numeroInvertido = parseInt(numero.toString().split('').reverse().join(''));

  if (numero === numeroInvertido) {
      console.log(numero + " é um palíndromo.");
  } else {
      console.log(numero + " não é um palíndromo.");
  }
}

var numeroExemplo = 1221;
verificarPalindromo(numeroExemplo);
