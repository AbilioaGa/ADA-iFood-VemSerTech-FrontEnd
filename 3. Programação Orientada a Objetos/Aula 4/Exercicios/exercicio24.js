// 24. Crie uma classe chamada "Calendário" com os atributos dia, mês e ano. Implemente um construtor para esta classe. Crie um método para verificar se uma data é válida (levando em consideração os meses com diferentes números de dias). Crie objetos de calendário e teste o método. 📆📅📮

class Calendario {
  constructor(dia, mes, ano) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }

  dataValida() {
    // Verifica se o ano é bissexto
    const isBissexto = (ano) => (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
    // Define o número de dias em cada mês
    const diasPorMes = [31, isBissexto(this.ano) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // Verifica se o mês está dentro do intervalo válido
    if (this.mes >= 1 && this.mes <= 12) {
      // Verifica se o dia está dentro do intervalo válido para o mês
      return this.dia >= 1 && this.dia <= diasPorMes[this.mes - 1];
    }
    return false;
  }
}

const data1 = new Calendario(25, 12, 2022); // Data válida (Natal)
const data2 = new Calendario(31, 4, 2023); // Data inválida (abril não tem 31 dias)
const data3 = new Calendario(29, 2, 2024); // Data válida (ano bissexto)

console.log("Data 1:");
console.log("Dia:", data1.dia);
console.log("Mês:", data1.mes);
console.log("Ano:", data1.ano);
console.log("É uma data válida?", data1.dataValida());
console.log("\n");

console.log("Data 2:");
console.log("Dia:", data2.dia);
console.log("Mês:", data2.mes);
console.log("Ano:", data2.ano);
console.log("É uma data válida?", data2.dataValida());
console.log("\n");

console.log("Data 3:");
console.log("Dia:", data3.dia);
console.log("Mês:", data3.mes);
console.log("Ano:", data3.ano);
console.log("É uma data válida?", data3.dataValida());
