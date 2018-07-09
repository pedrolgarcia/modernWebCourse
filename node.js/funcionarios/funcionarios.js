const axios = require('axios');// axios é um client http, faz requisições para obter algo remotamente
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

axios.get(url).then(response => {
    const funcs = response.data; // Pega os dados que retornaram do response
    
    // Desafio: quem é a mulher chinesa de menor salário?
    const mulher = func => func.genero === 'F';
    const china = func => func.pais === 'China';
    const menorSalario = (func, funcAtual) => func.salario < funcAtual.salario ? func : funcAtual;

    const chinesaPobre = funcs.filter(mulher).filter(china).reduce(menorSalario);
    console.log(chinesaPobre);
});