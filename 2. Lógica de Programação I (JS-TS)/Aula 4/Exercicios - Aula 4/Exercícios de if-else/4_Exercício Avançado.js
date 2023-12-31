// Escreva um programa em JavaScript que verifica se um ano é bissexto. Use a estrutura if-else para realizar essa verificação. 
// Dica: um ano bissexto é divisível por 4, mas não por 100, a menos que também seja divisível por 400.

function verificarAnoBissexto(ano) {
  if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
      console.log(ano + " é um ano bissexto.");
  } else {
      console.log(ano + " não é um ano bissexto.");
  }
}

var anoExemplo = 2024;
verificarAnoBissexto(anoExemplo);
