console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function() { // Podemos criar um função nova a partir do prototype do tipo string. Cuidado!
    return this.split('').reverse().join('');
}

console.log('Escola Cod3r'.reverse());

Array.prototype.first = function() {
    return this[0];
}

console.log([1, 2, 3, 4, 5].first());
console.log(['a', 'b', 'c'].first());

// NÃO SOBRESCREVER MÉTODOS JÁ EXISTENTES
String.prototype.toString = function() {
    return 'Lascou tudo';
}

console.log('Escola Cod3r'.reverse()); // Efeito colateral da sobrescrita acima. Vai reverter 'Lascou tudo'