const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let x in nums){ 
    if(x == 5) break; // Não age sobre o bloco if. Sai do laço
    console.log(`x = ${nums[x]}`);
}

for(let y in nums){
    if(y == 5) continue; // Interrompe a repetição atual e vai para a próxima
    console.log(`${y} = ${nums[y]}`);
}

externo: // Rótulo
for(let a in nums){ 
    for(let b in nums){
        if(a == 2 && b == 3) break externo; // Age sobre o for rotulado, sai do laço externo
        console.log(`Par = ${a},${b}`)
    }
} // Evitar

console.log("Fim!");