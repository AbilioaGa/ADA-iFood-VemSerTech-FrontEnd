// Escreva um programa em JavaScript que calcule e imprima os primeiros N termos da sequência de Fibonacci, onde N é um número fornecido pelo usuário, utilizando um loop while.

const prompt = require("prompt-sync")();

function calcularFibonacci(N) {
  let fibonacci = [];
  let i = 0;

  while (i < N) {
    if (i <= 1) {
      fibonacci.push(i);
    } else {
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    i++;
  }

  return fibonacci;
}

// Obter o valor de N do usuário
const N = parseInt(
  prompt("Digite o valor de N para os termos da sequência de Fibonacci: ")
);

// Verificar se N é um número válido
if (isNaN(N) || N < 0) {
  console.log("Por favor, digite um número inteiro não negativo.");
} else {
  // Calcular e imprimir os primeiros N termos da sequência de Fibonacci
  const resultado = calcularFibonacci(N);
  console.log(
    `Os primeiros ${N} termos da sequência de Fibonacci são: ${resultado.join(
      ", "
    )}`
  );
}
