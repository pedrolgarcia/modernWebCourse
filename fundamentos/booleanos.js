let isAtivo = true; // Ou false
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); // true !!técnica para saber o tipo booleano

// Verdadeiros
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'teste');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

// Falsos
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log(!!('' || null || 0 || ' '));
console.log(('' || null || 0 || 'epa'));

const nome = '';
console.log(nome || 'Desconhecido');

