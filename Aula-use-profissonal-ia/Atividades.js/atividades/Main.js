const Antendente = require('./Atendente');
const Fila = require('./Fila');
const Cliente = require('./Cliente');
const fila = new Fila();

const AntendenteJunior = new Antendente('Junior', '123456789');

const Clientes = [
  new Cliente('João', '123456789', 'PRIORITARIO'),
  new Cliente('Maria', '987654321', 'COMUM'),
  new Cliente('Pedro', '456789123', 'PRIORITARIO'),
  new Cliente('Ana', '789123456', 'COMUM'),
  new Cliente('Lucas', '321654987', 'PRIORITARIO'),
  new Cliente('Carla', '654987321', 'COMUM'),
  new Cliente('Rafael', '147258369', 'PRIORITARIO'),
  new Cliente('Fernanda', '963852741', 'COMUM')
];

Clientes.forEach(cliente => {
    Cliente.senha = Cliente.gerarSenha(cliente.tipo);
    fila.adicionar(cliente);
});

fila.exibirFila();

console.log("\nChamando clientes:\n");

let proximoCliente = fila.ChamarCliente();
while (proximoCliente) {
   atendente.antederCliente(proximoCliente);
   proximoCliente = fila.ChamarCliente();       
   
}

