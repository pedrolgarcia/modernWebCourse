const fs = require('fs'); // Importando file system, que é um módulo do core do node

const caminho = __dirname + '/arquivo.json'; // __dirname = caminho atual

// Síncrono... se for pesado trava o event loop até que o arquivo todo seja lido
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo);

// Assíncrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => { // Passa uma callback que é executada assim que o arquivo for lido
    const config = JSON.parse(conteudo); // Convetendo o json em objeto
    console.log(`${config.db.host}:${config.db.port}`); 
});

// Ler arquivo json facilmente
const config = require('./arquivo.json'); // Deve especificar a extensão json pois o padrão é js
// Já retorna um objeto instanciado, não precisa do JSON.parse
console.log(config.db); 

// Lendo o conteúdo de um diretório, retorna todos os arquivos contidos na pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...');
    console.log(arquivos);
});