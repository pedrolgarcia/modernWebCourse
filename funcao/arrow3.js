let comparaComThis = function(param) {
    console.log(this === param); // Em uma função tradicional, o this varia conforme a chamada e aponta para o global (tanto no browser quanto no node)
}

comparaComThis(global); // true
comparaComThis(this); //false

const obj = {}
comparaComThis = comparaComThis.bind(obj); // Se fazer um bind em um objeto, o this passa a apontar para ele
comparaComThis(global);
comparaComThis(obj);

// Em uma função arrow, o this aponta para o objeto para no qual ela foi escrita
let comparaComThisArrow = param => console.log(this === param); // No caso, o this aponta para o módulo corrente no node (arquivo atual no qual a função foi escrita)
comparaComThisArrow(global); // false
comparaComThisArrow(module.exports); // true

comparaComThisArrow = comparaComThisArrow.bind(obj); // Bind não funciona na função arrow
comparaComThisArrow(obj); // false
comparaComThisArrow(module.exports); // true - continua apontando para o módulo atual
