class Pessoa {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }

    exibir() {
        console.log(`
        Nome: ${this.nome}
        CPF: ${this.cpf}
        `);
    }
}

module.exports = Pessoa;
