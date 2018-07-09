// Usando função factory para contornar o cache, já que cria-se um novo objeto
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++;
        }
    }
}