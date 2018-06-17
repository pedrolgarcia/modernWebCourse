const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

// Percorre um array
aprovados.forEach(function(nome, indice, array) { // Função que passa uma callback com o elemento, indice e array
    console.log(`${indice + 1}) ${nome}`);
});

aprovados.forEach(nome => console.log(nome));

exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);