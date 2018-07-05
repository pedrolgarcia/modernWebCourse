// Em node, cada arquivo representa um módulo
// Código escrito em um módulo fica visível apenas dentro dele
// Para tornar visível, devemos expotar e importar

// Exportando
this.ola = 'Fala Pessoal';
exports.bemVindo = 'Bem vindo ao node!'; // exports.nomeAtributo
module.exports.ateLogo = 'Até o próximo exemplo';