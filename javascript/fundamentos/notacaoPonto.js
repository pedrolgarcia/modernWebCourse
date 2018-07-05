// . é usado para acessar os membros de objetos e funções
console.log(Math.ceil(6.1));

// Denotação literal
const obj1 = {};
obj1.nome = "Bola";
// obj1['nome'] = "Bola2";
console.log(obj1.nome); // Acessando o atributo

// Declarando a função
function Obj(nome){
    this.nome = nome; // this referencia a variavel do objeto instanciado tornando-a pública
    this.exec = function(){
        console.log("Exec...");
    }
}

const obj2 = new Obj("Cadeira");
const obj3 = new Obj("Mesa");
// Acessando os atributos do objeto
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec(); // Acessando uma função do objeto