// 39. Crie uma classe chamada "RelatórioFinanceiro" com os atributos mês, ano e lista de despesas. Implemente um construtor para esta classe. Crie métodos para adicionar despesas ao relatório e calcular o total de despesas para um determinado mês e ano. Crie objetos de relatórios financeiros e teste os métodos. 💼💰

class RelatorioFinanceiro {
  constructor(mes, ano) {
    this.mes = mes;
    this.ano = ano;
    this.despesas = [];
  }

  adicionarDespesa(descricao, valor) {
    this.despesas.push({ descricao, valor });
    console.log(`Despesa de ${descricao} adicionada ao relatório de ${this.mes}/${this.ano}.`);
  }

  calcularTotalDespesas() {
    let totalDespesas = 0;
    for (const despesa of this.despesas) {
      totalDespesas += despesa.valor;
    }
    return totalDespesas;
  }
}

const relatorio1 = new RelatorioFinanceiro("Novembro", 2023);
const relatorio2 = new RelatorioFinanceiro("Dezembro", 2023);

relatorio1.adicionarDespesa("Aluguel", 1200);
relatorio1.adicionarDespesa("Supermercado", 350);

relatorio2.adicionarDespesa("Energia", 150);
relatorio2.adicionarDespesa("Internet", 80);

console.log(
  `Total de despesas em ${relatorio1.mes}/${relatorio1.ano}: R$ ${relatorio1.calcularTotalDespesas().toFixed(2)}`
);
console.log(
  `Total de despesas em ${relatorio2.mes}/${relatorio2.ano}: R$ ${relatorio2.calcularTotalDespesas().toFixed(2)}`
);
