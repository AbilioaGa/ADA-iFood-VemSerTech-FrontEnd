// Crie um laço de repetição que percorra toda a lista de contatos e mostre uma frase contento Nome, Telefone, Endereço e data de nascimento, exemplo:

// Bonus: Utilizar template string

// Bruno Cabral, telefone (11) 99999-9999, mora na Rua Major Prado, no número 200, no bairro Jardim Terezinha, nascido na data de 04/04/1988

const listaDeContatos = [
  {
    nome: "Abilio",
    telefone: "14999999999",
    endereco: {
      rua: "Rua 1",
      numero: 100,
      bairro: "Centro",
    },
    dataDeNascimento: "19/07/1988",
  },
  {
    nome: "Maria",
    telefone: "14999999999",
    endereco: {
      rua: "Rua 2",
      numero: 102,
      bairro: "Centro",
    },
    dataDeNascimento: "01/01/2000",
  },
];

listaDeContatos.forEach((contato) => {
  const { nome, telefone, endereco, dataDeNascimento } = contato;
  const { rua, numero, bairro } = endereco;

  const frase = `${nome}, telefone: ${telefone}, mora na ${rua}, no número ${numero}, no bairro ${bairro}, nascido(a) na data de ${dataDeNascimento}`;

  console.log(frase);
});