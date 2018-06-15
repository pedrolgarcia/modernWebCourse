/*class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa('João');
p1.falar();*/

// Escrever esta classe como função construtora
function Pessoa(nome) {
    this.nome = nome;

    this.falar = () => console.log(`Meu nome é ${this.nome}`);
}

const p1 = new Pessoa('Pedro');
p1.falar();