class Fila {
  constructor() {
    this.filaPrioritaria = [];
    this.filaComum = [];
  }

  adicionar(Cliente) {
    if (Cliente.tipo === cliente.tipoCliente.PRIORITARIO) {
      this.filaPrioritaria.push(Cliente);
    } else {
      this.filaComum.push(Cliente);
    }

  }

  ChamarCliente() {
    if (this.filaPrioritaria.length > 0) {
      return this.filaPrioritaria.shift();
    } else if (this.filaComum.length > 0) {
      return this.filaComum.shift();
    } else {
      console.log("Não há clientes na fila.");
      return;
    }
  }
  exibirFila() {
    const filaCombinada = [...this.filaPrioritaria, ...this.filaComum];
    console.log("=== Fila de Atendimento: ===\n");
    if (filaCombinada.length === 0) {
      console.log("A fila está vazia.");
    } else {
      filaCombinada.forEach((cliente, index) => {
        console.log(`${index + 1}. ${cliente.tipo} - ${cliente.nome}`);
      });
    }

  }

}
