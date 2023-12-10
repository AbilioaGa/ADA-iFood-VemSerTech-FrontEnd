function verificarDiaSemana(numeroDoDia) {
  var diaSemana;

  switch (numeroDoDia) {
    case 1:
      diaSemana = "Domingo";
      break;
    case 2:
      diaSemana = "Segunda-feira";
      break;
    case 3:
      diaSemana = "Terça-feira";
      break;
    case 4:
      diaSemana = "Quarta-feira";
      break;
    case 5:
      diaSemana = "Quinta-feira";
      break;
    case 6:
      diaSemana = "Sexta-feira";
      break;
    case 7:
      diaSemana = "Sábado";
      break;
    default:
      console.log("Número inválido. Digite um número de 1 a 7.");
      return;
  }

  var tipoDia =
    numeroDoDia === 1 || numeroDoDia === 7 ? "Fim de semana" : "Dia útil";

  return diaSemana + ", " + tipoDia;
}

var resultado = verificarDiaSemana(1);
console.log(resultado);
