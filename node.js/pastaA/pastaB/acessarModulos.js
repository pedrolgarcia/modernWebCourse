const moduloA = require('../../moduloA'); // Importando módulos da própria aplicação, passa o caminho relativo ou absoluto
console.log(moduloA.ola);

const saudacao = require('saudacao'); // Importando os módulos do node_modules(dependencias), não precisa do caminho, procura por index
console.log(saudacao.ola);

const http = require('http'); // Importando os módulos do core do node, também não precisa do caminho
http.createServer((req, res) => {
    res.write('Bom dia!');
    res.end();
}).listen(8080);