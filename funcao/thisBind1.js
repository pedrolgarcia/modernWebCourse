// this pode variar de acordo com o contexto léxico

const pessoa = {
    saudacao: "Bom dia",
    falar() {
        console.log(this.saudacao); // Acessa o atributo saudacao do objeto pessoa
    }
}

pessoa.falar();
const falar = pessoa.falar;
falar(); // Conflito entre paradigmas: funcional e OO

// O bind é responsável por amarrar um objeto para ser "dono" da execução sempre que um método for chamado
const falarDePessoa = pessoa.falar.bind(pessoa); // O this sempre será resolvido para o objeto passado no bind
falarDePessoa();