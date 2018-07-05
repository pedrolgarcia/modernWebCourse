function Pessoa() {
    this.idade = 0;
    
    setInterval(() => { // Está dentro do contexto léxico pessoa
        this.idade++; // Em funções arrow o this não varia
        console.log(this.idade); 
    }, 1000);
}

new Pessoa; 