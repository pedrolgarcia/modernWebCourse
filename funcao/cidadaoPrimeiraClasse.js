// Função em JS é First-Class Object (Citizens)
// Higher-order function
// No paradigma funcional, trata-se a função como dado podendo passa-la como parâmetro, retornar ela, guardar em variável etc

// Criar função de forma literal
// Palavra reservada function + nome + parâmetros + bloco, com retorno opcional (se não chamar o return, retorna undefined por padrão)
function fun1(){} 

// Armazenar em uma variável
// Cria a variável ou constante guarda uma função ANÔNIMA nela. Invoca com o nome da var + ()
const fun2 = function(){}

// Armazenar em um array
// Podemos criar uma função direto, guardar uma função literal já existentes ou variáveis que armazenam uma função
const array = [function(a,b){return a + b;}, fun1, fun2];
console.log(array[0](2, 3)); // Invocando a função, não esquecer dos parênteses

// Armazenar em um atributo de objeto
const obj = {};
obj.falar = function(){ return "Opa";}
console.log(obj.falar()); // Invocando a função, não esquecer dos parênteses

// Passar função como parâmetro
function run(fun){ // Parâmetro não recebe os parênteses
    fun(); // Invocando a função
}

run(function(){ // Passando como parâmetro, criando uma ou passando uma existente
    console.log("Executando...");
});

// Uma função pode retornar/conter uma função
function soma(a, b){
    return function(c){
        console.log(a + b + c);
    }
}

// Chamando a função
soma(2, 3)(4); // Passar direto o parâmetro da outra funçãõ
const cincoMais = soma(2, 3); // Ou guarda em uma var/const e chama depois de novo
cincoMais(4);