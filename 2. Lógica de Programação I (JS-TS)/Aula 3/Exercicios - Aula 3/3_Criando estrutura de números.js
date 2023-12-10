// Crie laços de repetição para retornar a seguinte estrutura de numeros:

// 1;
// 12;
// 123;
// 1234;
// 12345;
const crescente = () => {
  for (let i = 1; i <= 5; i++) {
    let linha = "";
    for (let j = 1; j <= i; j++) {
      linha += j;
    }
    console.log(linha);
  }
};
crescente();

// Agora tente criar o inverso:

// 12345;
// 1234;
// 123;
// 12;
// 1;
const decrescente = () => {
  for (let i = 5; i >= 1; i--) {
    let linha = "";
    for (let j = 1; j <= i; j++) {
      linha += j;
    }
    console.log(linha);
  }
};
decrescente();
