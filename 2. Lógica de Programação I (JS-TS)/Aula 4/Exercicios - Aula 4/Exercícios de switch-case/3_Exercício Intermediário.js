// function verificarLetra(letra) {
//   var resultado;

//   switch (letra.toLowerCase()) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//       resultado = "Vogal";
//       break;
//     default:
//       resultado = "Consoante";
//   }

//   return resultado;
// }

// var letraDigitada = prompt("Digite uma letra do alfabeto:").toLowerCase();

// if (letraDigitada.length === 1 && letraDigitada.match(/[a-z]/i)) {
//   var tipoLetra = verificarLetra(letraDigitada);
//   console.log("A letra é uma " + tipoLetra + ".");
// } else {
//   console.log(
//     "Entrada inválida. Por favor, digite apenas uma letra do alfabeto."
//   );
// }

function checkLetter(letter) {
    switch(letter.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return 'Vogal';
        default:
            return 'Consoante';
    }
}

console.log(checkLetter('a')); 