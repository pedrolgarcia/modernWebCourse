function tratarErroELancar(erro){
    // throw new Error('...');
    // throw 10;
    // throw true;
    // throw 'mensagem';
    throw { // Lança um erro
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try { // Bloco de código onde você acha que pode dar erro
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) {
        tratarErroELancar(e); // Executa se der algum erro no try, trata da sua maneira
    } finally { // Sempre executa independente de dar algum erro
        console.log('final');
    }
}

const obj = { name: 'Pedro'};
imprimirNomeGritado(obj);