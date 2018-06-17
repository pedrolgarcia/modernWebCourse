// Coleção de dados indexados
// Por js ser fracamente tipadao, aceita qualquer tipo de dados no array. Boas práticas é criar array homogêneo
console.log(typeof Array, typeof new Array, typeof []); 

// Criando array
let aprovados = new Array('Bia', 'Carlos', 'Ana'); // Não recomendado
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana']; // Notação literal - recomendada
// Acessando os elementos pelos índices
console.log(aprovados[0]); 
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); // undefined - não da erro

aprovados[3] = 'Paulo'; // Adicionando um novo elemento em um índice específico
aprovados.push('Abia'); // Função que adiciona um novo elemento na última posição

console.log(aprovados.length);

aprovados[9] = 'Rafael'; // Todos os índices entre este e o penúltimo inserido serão undefined
console.log(aprovados.length);

console.log(aprovados[8] === undefined);
console.log(aprovados);

aprovados.sort(); // Função que ordena um array - altera o array original
console.log(aprovados);

delete aprovados[1]; // Exclui um elemento, mas não realoca os índices, atribui undefined
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 1, 'Elemento1', 'Elemento2'); // Exclui e/ou adiciona elementos - params(a partir de que índice, até que índice(se for 0, adicionar a partir dali), adicionar elemento)
console.log(aprovados);