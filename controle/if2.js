function teste1(num){
    if(num > 7)
        console.log(num); // dentro do if

    console.log('Final'); // for do if
}

teste1(6); // Mostra 6 e Final pois quando não abrimos o bloco, é executado só a primeira setença depois do if
teste1(8); // Mostra só FInal

function teste2(num){
    if(num > 7); { // O bloco não está relacionado ao if devido ao ponto e vírgula
        console.log(num);
    }
}

// Exibe o número sempre 
teste2(6); 
teste2(8);