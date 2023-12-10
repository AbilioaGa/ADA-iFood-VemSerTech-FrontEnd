function calculadora(num1, num2, acao) {
  var resultado;

  switch (acao.toLowerCase()) {
    case "somar":
      resultado = num1 + num2;
      break;
    case "subtrair":
      resultado = num1 - num2;
      break;
    case "dividir":
      resultado = num1 / num2;
      break;
    case "multiplicar":
      resultado = num1 * num2;
      break;
    default:
      console.log(
        "Ação inválida. Escolha entre 'somar', 'subtrair', 'dividir' ou 'multiplicar'."
      );
      return;
  }

  return resultado;
}

var resultadoSoma = calculadora(2, 2, "somar");
console.log("Resultado da soma: " + resultadoSoma);

var resultadoSubtracao = calculadora(2, 2, "subtrair");
console.log("Resultado da subtração: " + resultadoSubtracao);

var resultadoDivisao = calculadora(2, 2, "dividir");
console.log("Resultado da divisão: " + resultadoDivisao);

var resultadoMultiplicacao = calculadora(2, 2, "multiplicar");
console.log("Resultado da multiplicação: " + resultadoMultiplicacao);
