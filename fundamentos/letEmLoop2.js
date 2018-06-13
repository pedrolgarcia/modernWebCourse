const funcs = [];

for (let i = 0; i < 10; i++){
    funcs.push(function (){
        console.log(i); // let - não achou i no escopo de função, procurou em um escopo acima
    });
}

funcs[2](); 
funcs[8]();