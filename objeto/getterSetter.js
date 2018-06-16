const sequencia = {
    _valor: 1, // Convenção para private
    get valor() { return this._valor++ }, 
    set valor(valor) { // Vantagem de fazer validações
        if(valor > this._valor){
            this._valor = valor;
        }
    }
}

console.log(sequencia.valor, sequencia.valor); // O js reconhece quando você está tentando ler um valor ele chama o método get
sequencia.valor = 1000; // Quando está tentando alterar um valor ele chama o set
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 900; 
console.log(sequencia.valor, sequencia.valor);