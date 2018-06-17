// Funcionamento interno do forEach - simulando com método próprio
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];
Object.defineProperty(aprovados, 'forEach2', {
    value: function(forCallBack) {
        for(key in this) {
            forCallBack(this[key], parseInt(key), this);
        }
    },
    enumerable: false
});

aprovados.forEach2(function(nome, indice) { 
    console.log(`${indice + 1}) ${nome}`);
});