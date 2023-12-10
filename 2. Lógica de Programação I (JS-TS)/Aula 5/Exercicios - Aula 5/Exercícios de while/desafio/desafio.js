const prompt = require("prompt-sync")();

// Gera um número aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let tentativas = 0;

console.log("Adivinhe o número entre 1 e 100:");

while (true) {
  const numeroUsuario = parseInt(prompt("> "));

  tentativas++;

  if (numeroUsuario === numeroSecreto) {
    console.log(`Parabéns! Você acertou o número em ${tentativas} tentativas.`);
    break;
  } else {
    const resposta =
      numeroUsuario < numeroSecreto ? "O número é maior." : "O número é menor.";
    console.log(resposta);
  }
}
