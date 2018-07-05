// IIFE -> Immediately Invoked Function Expression
// Funções que são invocadas assim que são declaradas, e fogem do escopo global
(function() {
    console.log('Será executada na hora!');
    console.log('Foge do escopo mais abrangente!');
})()