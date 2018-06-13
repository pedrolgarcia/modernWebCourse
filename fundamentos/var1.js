// A variável definida com var só tem dois escopos: global e dentro de função
{
    {
        {
            {
                var sera = "Será???"; // Mesmo estando em outro bloco pode-se acessar ela globalmente
                console.log(sera);
            }
        }
    }
}

console.log(sera); // Exibirá a variável 

function teste(){
    var local = 123; // Quando ela é definida dentro da função, só pode ser acessada lá dentro
    console.log(local); 
}

teste();
// console.log(local); // Erro - Undefined