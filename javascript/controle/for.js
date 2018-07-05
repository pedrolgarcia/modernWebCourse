let contador = 1; // Declaração 

// While com quantidade determinada de repetições (for é mais indicado)
while(contador <= 10){ // Condição
    console.log(`contador = ${contador}`);
    contador++; // Incremento
}

for(let i = 1; i <= 10; i++){ // (Declaração; Condição; Incremento)
    console.log(`i = ${i}`);
} 

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]; 

for(let i = 0; i < notas.length; i++){ // Percorrendo array notas
    console.log(`notas = ${notas[i]}`);
}