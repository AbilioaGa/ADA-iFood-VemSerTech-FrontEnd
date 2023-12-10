// 37. Desenvolva uma classe chamada "Câmera" com os atributos marca, modelo e resolução. Implemente um construtor para esta classe. Crie métodos para tirar fotos e gravar vídeos. Crie objetos de câmeras e teste os métodos. 📷🎥📸

class Camera {
  constructor(marca, modelo, resolucao) {
    this.marca = marca;
    this.modelo = modelo;
    this.resolucao = resolucao;
    this.armazenamento = [];
  }

  tirarFoto() {
    const foto = `Foto tirada com ${this.marca} ${this.modelo}, resolução ${this.resolucao}.`;
    this.armazenamento.push(foto);
    console.log(foto);
  }

  gravarVideo() {
    const video = `Vídeo gravado com ${this.marca} ${this.modelo}, resolução ${this.resolucao}.`;
    this.armazenamento.push(video);
    console.log(video);
  }
}

const camera1 = new Camera("Camera 1", "Modelo 1", "50 MP");
const camera2 = new Camera("Camera 2", "Modelo 2", "34 MP");

camera1.tirarFoto();
camera1.gravarVideo();
camera2.tirarFoto();
camera2.gravarVideo();

console.log("\nArmazenamento de Camera 1:");
console.log(camera1.armazenamento);

console.log("\nArmazenamento de Camera 2:");
console.log(camera2.armazenamento);
