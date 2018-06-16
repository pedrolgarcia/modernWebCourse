// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = 'Z'; // não faça isso em casa
const avo = { attr1: 'A' }; // __proto__:Object.prototype
const pai = { __proto__: avo, attr2: 'B', attr3: 'D'};
const filho = { __proto__:pai, attr3: 'C'};

// Procura em filho, se não tiver, procura no protótipo que é pai e assim por diante, até o nível máximo que é Object.prototype.
// Se tiver atributos com os nomes iguais (attr3), ocorre o sombreamento (pega o primeiro achado na cadeia)
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3); 

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax;
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // Shadowing - sombreamento
}

const volvo = {
    modelo: 'V40',
    status() { // sobrescrevendo
        return `${this.modelo}: ${super.status()}`; // super referencia o protótipo, this referencia o objeto atual
    }
}

// Função que estabelece uma relação de protótipo entre dois objetos. params - (objeto, protótipo) 
Object.setPrototypeOf(ferrari, carro); // = __proto__: carro
Object.setPrototypeOf(volvo, carro); 

// Exibe só os dados definidos no objeto
console.log(ferrari);
console.log(volvo); 

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(300);
console.log(ferrari.status());