function traduzirCorParaPortugues(corEmIngles) {
  var corEmPortugues;

  switch (corEmIngles) {
    case "red":
      corEmPortugues = "vermelho";
      break;
    case "blue":
      corEmPortugues = "azul";
      break;
    case "green":
      corEmPortugues = "verde";
      break;
    case "yellow":
      corEmPortugues = "amarelo";
      break;
    case "black":
      corEmPortugues = "preto";
      break;
    default:
      corEmPortugues = "Cor desconhecida";
  }

  return corEmPortugues;
}

var corDigitada = prompt("Digite uma cor em inglês:").toLowerCase();
var corTraduzida = traduzirCorParaPortugues(corDigitada);

console.log("A cor em português é: " + corTraduzida);
