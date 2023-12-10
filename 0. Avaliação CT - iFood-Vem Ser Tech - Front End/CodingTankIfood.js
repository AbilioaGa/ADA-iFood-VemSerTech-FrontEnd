// 1. Desafio: Conversor de Horários

function converterHorario(horario12h) {
  const partes = horario12h.replace(/[APM]+/, '').split(':')
  
  if (partes.length !== 3) {
    return "Formato de horário inválido"
  }

  let horas = parseInt(partes[0])
  const minutos = parseInt(partes[1])
  const segundos = parseInt(partes[2])

  if (horario12h.includes("PM") && horas !== 12) {
    horas += 12
  } else if (horario12h.includes("AM") && horas === 12) {
    horas = 0
  }

  const horario24h = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`
  
  return horario24h
}

const horario12h = "06:15:25PM"
const horario24h = converterHorario(horario12h)
console.log(horario24h)
//----------------------------------------------------------------

// 2. Desafio: Quantidade de Palavras

function contarPalavrasEmCamelCase(frase) {
  let contadorPalavras = 1
  for (let i = 1; i < frase.length; i++) {
    if (frase[i] === frase[i].toUpperCase()) {
      contadorPalavras++
    }
  }
  return contadorPalavras
}

const frase = "façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa"
const quantidadeDePalavras = contarPalavrasEmCamelCase(frase)
console.log(`A quantidade de palavras na frase é: ${quantidadeDePalavras}`)
//----------------------------------------------------------------

// 3. Desafio: Número Solitário

function encontrarNumerosSolitarios(arr) {
  const solitarios = [];

  for (let i = 0; i < arr.length; i++) {
    let repeticoes = 0;
    
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        repeticoes++;
      }
    }

    if (repeticoes === 1) {
      solitarios.push(arr[i]);
    }
  }

  return solitarios;
}

const numeros = [12, 17, 15, 19, 22, 17, 19, 12];
const solitarios = encontrarNumerosSolitarios(numeros);
console.log(solitarios); // Deve imprimir [15, 22]

//----------------------------------------------------------------

// 4. Qual é a saída do código a seguir?

let n = 4;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        console.log(j);
    }
}

// e. 1 1 2 1 2 3 1 2 3 4
//----------------------------------------------------------------

// 5. Qual é o resultado da expressão booleana abaixo?

console.log(!(true && false) || (false && true))

// a. true
//----------------------------------------------------------------

// 6. Qual o valor da saída do código abaixo?

let x = 0;
let a = 0;
let b = -5;
if (a > 0) {
    if (b < 0) {
        x = x + 5;
    } else if (a > 5) {
        x = x + 4;
    } else {
        x = x + 3;
    }
} else {
    x = x + 2;
}
console.log(x);

// b) 2
//----------------------------------------------------------------
