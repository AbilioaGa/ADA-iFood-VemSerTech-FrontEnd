// 18. Crie uma classe chamada "Celular" com os atributos marca, modelo e armazenamento interno. Implemente um construtor para esta classe. Crie métodos para adicionar aplicativos ao celular e verificar o espaço disponível. Crie objetos de celulares e teste os métodos. 📱📥💾

class Celular {
  constructor(marca, modelo, armazenamentoInterno) {
    this.marca = marca;
    this.modelo = modelo;
    this.armazenamentoInterno = armazenamentoInterno;
    this.espacoDisponivel = armazenamentoInterno;
    this.aplicativosInstalados = [];
  }

  adicionarAplicativo(nome, tamanho) {
    if (tamanho <= this.espacoDisponivel) {
      this.aplicativosInstalados.push({ nome, tamanho });
      this.espacoDisponivel -= tamanho;
      console.log(`Aplicativo ${nome} com ${tamanho} MB adicionado. Espaço restante: ${this.espacoDisponivel} MB.`);
    } else {
      console.log(`Não há espaço suficiente para instalar o aplicativo ${nome}.`);
    }
  }

  verificarEspacoDisponivel() {
    console.log(`Espaço disponível: ${this.espacoDisponivel} MB.`);
  }
}

const celular1 = new Celular("Marca 1", "Modelo 1", 128);
const celular2 = new Celular("Marca 2", "Modelo 2", 256);

console.log("Celular 1:");
console.log("Marca:", celular1.marca);
console.log("Modelo:", celular1.modelo);
console.log("Armazenamento Interno:", celular1.armazenamentoInterno, "MB");
console.log("\n");

celular1.adicionarAplicativo("WhatsApp", 20);
celular1.adicionarAplicativo("Instagram", 30);
celular1.adicionarAplicativo("Spotify", 50);
console.log("\n");

celular1.verificarEspacoDisponivel();
console.log("\n");

console.log("Celular 2:");
console.log("Marca:", celular2.marca);
console.log("Modelo:", celular2.modelo);
console.log("Armazenamento Interno:", celular2.armazenamentoInterno, "MB");
console.log("\n");

celular2.adicionarAplicativo("Twitter", 25);
celular2.adicionarAplicativo("Facebook", 40);
console.log("\n");

celular2.verificarEspacoDisponivel();
