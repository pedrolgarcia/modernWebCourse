function Pessoa() {
    this.idade = 0;
    
    const self = this; // Armazena em uma constante o this do objeto
    setInterval(function() { // Dispara uma função a partir de um intervalo de tempo
        // Um this aqui dentro refere-se a function anonima em execução
        self.idade++; // Usa o this para pessoa
        console.log(self.idade); 
    }/*.bind(this) - ou usa o bind o this referenciar pessoa*/, 1000);
}

new Pessoa; 