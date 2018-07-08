const _ = require('lodash'); // Importando módulo terceiro, não precisa do caminho relativo, procura dentro de 
                             // node_modules automaticamente o arquivo index. Se não achar procura um diretório acima

setInterval(() => console.log(_.random(1, 1000)), 2000); // Utilizando a função random da biblioteca                             