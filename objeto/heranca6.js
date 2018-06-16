function Aula(nome, videoID) {
    this.nome = nome;
    this.videoID = videoID;
}

const aula1 = new Aula('Bem vindo', 123); // new cria um objeto a partir da função, e o protótipo aponta para função.prototype
const aula2 = new Aula('Até breve', 456);
console.log(aula1, aula2);

// Simulando o new
function novo(f, ...params) { // ...recebe conjunto de parametros e concatena em um array
    const obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj, params);
    return obj;
}

const aula3 = novo(Aula, 'Bem vindo', 123);
const aula4 = novo(Aula, 'Bem vindo', 456);
console.log(aula3, aula4);