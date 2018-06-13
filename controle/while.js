function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;

while(opcao != -1){ // Indicada para executar laços que têm quantidade indeterminada de repetições
    opcao = getInteiroAleatorioEntre(-1, 10); // Quando o número sorteado for -1 ele sai do laço
    console.log(`Opção escolhida foi ${opcao}.`);
}

console.log("Até a próxima!");