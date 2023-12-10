// Escreva um programa em JavaScript que encontre e imprima todos os números primos de 1 a 100 utilizando um loop while.

function primo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

let contador = 1;

while (contador <= 100) {
  if (primo(contador)) {
    console.log(contador);
  }
  contador++;
}
