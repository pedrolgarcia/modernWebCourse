function Carro(velocidadeMaxima = 200, delta = 5) {
    // privado - crie um com let, var ou uma constante
    // público - crie com this
    // Atributo privado
    let velocidadeAtual = 0;

    // Método público
    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    }

    // Método público 
    this.getVelocidadeAtual = function() {
        return velocidadeAtual;
    }
}

const uno = new Carro;
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());

console.log(typeof Carro);
console.log(typeof ferrari);