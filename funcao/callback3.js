// Exemplo de callback no browser
document.getElementsByTagName("body")[0].onclick = function(e) { // Chamando callback a partir do evento onclick
    // Sempre que o body for clicado, execute esta função callback
    console.log("O evento ocorreu!");
}