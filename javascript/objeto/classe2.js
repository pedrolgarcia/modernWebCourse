class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo { // Define o protótipo com extends
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome),
        this.profissao = profissao;
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho;
console.log(filho);