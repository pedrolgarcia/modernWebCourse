const funcs = [];

for (var i = 0; i < 10; i++){
    funcs.push(function (){
        console.log(i); // var escopo de função
    });
}

// Imprime o valor que saiu do laço
funcs[2](); 
funcs[8]();