// É um objeto usado para processamento assíncrono
function falarDepois(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // Simulando um processo mais demorado
            resolve(frase); // Sucesso
        }, segundos * 1000);
    });
}

falarDepois(3, 'Que Legal!').then(frase => frase.concat('?!?')).then(outraFrase => console.log(outraFrase));
// .catch para tratar reject