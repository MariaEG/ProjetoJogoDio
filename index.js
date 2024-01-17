class TipoAtaque {
    constructor(tipo) {
        this.tipo = tipo;
    }

    obterDescricao() {
        switch (this.tipo) {
            case 'mago':
                return 'usou magia';
            case 'guerreiro':
                return 'usou espada';
            case 'monge':
                return 'usou artes marciais';
            case 'ninja':
                return 'usou shuriken';
            default:
                return 'usou um ataque indefinido';
        }
    }
}

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        const tipoAtaque = new TipoAtaque(this.tipo);
        const descricaoAtaque = tipoAtaque.obterDescricao();

        return `O ${this.tipo} ${this.nome} atacou usando ${descricaoAtaque}`;
    }
}

// Exemplo de uso:
let jogadorEscolhido = new Heroi('Gandalf', 150, 'mago');

// Chamada do método atacar e exibição da mensagem final
console.log(jogadorEscolhido.atacar()); // Saída esperada: "O mago Gandalf atacou usando magia"
