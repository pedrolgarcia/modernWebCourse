// O node faz cache do objeto importado, se o objeto já tiver sido criado, ele retorna sempre a mesma instância
const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');

// Como exportamos com uma factory, cria-se uma nova instancia sempre que importamos
const contadorC = require('./instanciaNova')(); // Devemos invocar a função factory, por isso os parênteses
const contadorD = require('./instanciaNova')();

contadorA.inc(); // Incrementando no contadorA
contadorA.inc();
console.log(contadorA.valor, contadorB.valor); // contadorB foi alterado devido ao cache (mesma instância)

contadorC.inc(); // Incrementando no contadorC
contadorC.inc();
console.log(contadorC.valor, contadorD.valor); // contadorD não foi alterado pois foi criada uma nova instância pela factory