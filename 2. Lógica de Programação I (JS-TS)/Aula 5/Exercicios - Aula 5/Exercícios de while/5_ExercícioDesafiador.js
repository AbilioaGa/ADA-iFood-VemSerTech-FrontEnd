// Escreva um programa em JavaScript cria uma lista de contatos, com dados inputados pelo usuário, dados para salvar:

// - Nome
// - Telefone
// - Idade
// - Profissão

// O usuário deve inputar dados de 5 contatos.

// Ao final o programa deve mostrar uma lista com os contatos.

const prompt = require("prompt-sync")();

function criarContato(nome, telefone, idade, profissao) {
  return {
    nome: nome,
    telefone: telefone,
    idade: idade,
    profissao: profissao,
  };
}

let listaDeContatos = [];
let contador = 1;

// Loop while para coletar dados de 5 contatos
while (contador <= 5) {
  console.log(`Digite os dados para o contato ${contador}:`);

  let nome = prompt("Nome:");
  let telefone = prompt("Telefone:");
  let idade = prompt("Idade:");
  let profissao = prompt("Profissão:");

  // Criar o objeto de contato e adicioná-lo à lista com o método push para adicionar elementos ao final do array
  let contato = criarContato(nome, telefone, idade, profissao);
  listaDeContatos.push(contato);

  contador++;
}

// Exibir a lista de contatos
console.log("\nLista de Contatos:");
for (let contato of listaDeContatos) {
  console.log(
    `\nNome: ${contato.nome}\nTelefone: ${contato.telefone}\nIdade: ${contato.idade}\nProfissão: ${contato.profissao}`
  );
}
