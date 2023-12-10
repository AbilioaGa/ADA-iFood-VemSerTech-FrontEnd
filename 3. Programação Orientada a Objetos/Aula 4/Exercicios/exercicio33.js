// 33. Crie uma classe chamada "Telefone" com os atributos marca, modelo e número de série. Implemente um construtor para esta classe. Crie um método para fazer chamadas telefônicas e outro para enviar mensagens de texto. Crie objetos de telefones e teste os métodos. 📱📞📩

class Telefone {
  constructor(marca, modelo, numeroSerie) {
    this.marca = marca;
    this.modelo = modelo;
    this.numeroSerie = numeroSerie;
  }

  fazerChamada(destinatario) {
    console.log(`[${this.marca} ${this.modelo} - ${this.numeroSerie}] Chamando ${destinatario}...`);
  }

  enviarMensagem(destinatario, mensagem) {
    console.log(
      `[${this.marca} ${this.modelo} - ${this.numeroSerie}] Enviando mensagem para ${destinatario}: "${mensagem}"`
    );
  }
}

const telefone1 = new Telefone("Marca 1", "Modelo 1", "999999999");
const telefone2 = new Telefone("Marca 2", "Modelo 2", "666666666");

telefone1.fazerChamada("Amigo");
telefone2.fazerChamada("Família");

telefone1.enviarMensagem("Colega", "Olá, como você está?");
telefone2.enviarMensagem("Outro Amigo", "E aí, vamos sair hoje?");
