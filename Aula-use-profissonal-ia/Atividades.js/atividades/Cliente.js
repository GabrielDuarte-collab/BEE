const Pessoa = require("./Pessoa");

class Cliente extends Pessoa {
    
    static contadorComum = 0;
    static contadorPrioritario = 0;

    static tipoCliente = Object.freeze({ 
        COMUM: "comum",
        PRIORITARIO: "prioritario"
    });

    constructor(nome,cpf, tipo) {
     this.nome = nome;
     this.cpf = cpf;
     this.tipo = tipo;
     this.senha = this.gerarSenha(tipo);
    }

   static gerarSenha(tipo) {
        if (tipo === "prioritario") {
            Cliente.contadorPrioritario++;
            const numero = String(Cliente.contadorPrioritario).padStart(3, "0");
            return `P${numero}`;
        } else {
            Cliente.contadorComum++;
            const numero = String(Cliente.contadorComum).padStart(3, "0");
            return `A${numero}`;
        }
    }

    exibir() {
        super.exibir();
        console.log(`Tipo: ${this.tipo}`);
        console.log(`Senha Automática: ${this.senha}`);
    }
}

module.exports = Cliente;