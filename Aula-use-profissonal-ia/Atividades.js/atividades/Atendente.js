const Pessoa = require('./Pessoa');


class Atendente extends Pessoa {
    constructor(nome, cpf, matricula) {
        super(nome, cpf);
        this.matricula = matricula;
        this.historioAtendimento = [];
    }
    atender(cliente) {
        console.log(`Atendente ${this.nome} atendendo cliente ${cliente.nome}`);
        this.historioAtendimento.push(cliente);
    }
    relatorioAtendimento() {
        console.log(`Relatório de atendimento do atendente ${this.nome}:`);
        console.log(`Total de clientes atendidos: ${this.historioAtendimento.length}\n`);

        if (this.historioAtendimento.length > 0) {
            this.historioAtendimento.forEach((cliente, index) => {
                console.log(`Atendente ${index + 1}: ${cliente.nome}, Tipo: ${cliente.tipo}, 
                Senha: ${cliente.senha}`);
            });
        }
        console.log('----------------------------------------');
    }
}